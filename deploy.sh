#!/usr/bin/env bash
#
# Деплой статического сайта на hoster.by (LiteSpeed/Apache).
# Билдит Next.js в папку out/ и заливает её на хостинг через FTP/SFTP (lftp mirror).
#
# Настройки берутся из .env.deploy (см. .env.deploy.example). Этот файл в .gitignore
# и не попадает в репозиторий — пароль остаётся только у тебя на компьютере.
#
# Использование:
#   ./deploy.sh            обычный деплой (билд + заливка изменившихся файлов)
#   ./deploy.sh --no-build залить уже собранную папку out/ без пересборки
#   ./deploy.sh --dry-run  показать что изменится, но ничего не заливать

set -euo pipefail
cd "$(dirname "$0")"

# --- читаем настройки ---
if [[ ! -f .env.deploy ]]; then
  echo "❌ Нет файла .env.deploy. Скопируй .env.deploy.example в .env.deploy и заполни." >&2
  exit 1
fi
set -a; source .env.deploy; set +a

: "${FTP_PROTOCOL:?нужно задать FTP_PROTOCOL (ftp или sftp) в .env.deploy}"
: "${FTP_HOST:?нужно задать FTP_HOST в .env.deploy}"
: "${FTP_USER:?нужно задать FTP_USER в .env.deploy}"
: "${FTP_PASS:?нужно задать FTP_PASS в .env.deploy}"
: "${REMOTE_DIR:?нужно задать REMOTE_DIR в .env.deploy}"
FTP_PORT="${FTP_PORT:-}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "❌ lftp не установлен. Поставь: brew install lftp" >&2
  exit 1
fi

# --- флаги ---
DO_BUILD=1
DRY_RUN=""
for arg in "$@"; do
  case "$arg" in
    --no-build) DO_BUILD=0 ;;
    --dry-run)  DRY_RUN="--dry-run" ;;
    *) echo "Неизвестный аргумент: $arg" >&2; exit 1 ;;
  esac
done

# --- билд ---
if [[ "$DO_BUILD" == 1 ]]; then
  echo "▶ Сборка сайта (next build → out/)…"
  npm run build
fi

if [[ ! -d out ]]; then
  echo "❌ Папки out/ нет. Запусти 'npm run build' сначала." >&2
  exit 1
fi

# --- заливка ---
# mirror -R = из локальной папки на сервер; --delete убирает с сервера то, чего больше нет.
PORT_OPT=""
[[ -n "$FTP_PORT" ]] && PORT_OPT="-p $FTP_PORT"

echo "▶ Заливка out/ → ${FTP_PROTOCOL}://${FTP_HOST}${REMOTE_DIR}"
lftp -c "
set ssl:verify-certificate no;
set sftp:auto-confirm yes;
open $PORT_OPT -u '$FTP_USER','$FTP_PASS' $FTP_PROTOCOL://$FTP_HOST;
mirror -R --delete --verbose $DRY_RUN out/ '$REMOTE_DIR';
bye
"

echo "✅ Готово."
