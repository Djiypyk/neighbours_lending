import { Container, Section, SectionHeading } from "@/shared/ui";
import { faqContent } from "@/shared/config";

/**
 * Native <details> accordion — works without JS, keeps every answer in the
 * DOM so search engines (and the FAQPage rich snippet) can read it.
 */
export function Faq() {
  return (
    <Section id={faqContent.id} className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
          text={faqContent.text}
        />

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
          {faqContent.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-border bg-background px-6 py-5 transition-colors open:border-primary-light"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-primary-dark transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-pretty leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
