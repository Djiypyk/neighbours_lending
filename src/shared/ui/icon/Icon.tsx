import type { SVGProps } from "react";

export type IconName =
  | "tag"
  | "tools"
  | "chat"
  | "users"
  | "pin"
  | "home"
  | "arrow-right"
  | "check"
  | "sparkle";

const paths: Record<IconName, React.ReactNode> = {
  tag: (
    <>
      <path d="M3.6 8.5 8.5 3.6a2 2 0 0 1 1.4-.6H15a2 2 0 0 1 2 2v5.1a2 2 0 0 1-.6 1.4l-4.9 4.9a2 2 0 0 1-2.8 0l-5.1-5.1a2 2 0 0 1 0-2.8Z" />
      <circle cx="13" cy="7" r="1.4" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.2l-6 6a1.8 1.8 0 0 0 2.5 2.5l6-6a3.5 3.5 0 0 0 4.2-4.6l-2 2a1.4 1.4 0 0 1-2-2Z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-4 4v-4H6.5A2.5 2.5 0 0 1 4 12.5Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 5.5a3 3 0 0 1 0 5.6" />
      <path d="M16.5 14.2A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  home: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
