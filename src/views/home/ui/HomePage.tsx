import { SiteHeader } from "@/widgets/site-header";
import { Hero } from "@/widgets/hero";
import { Community } from "@/widgets/community";
import { Features } from "@/widgets/features";
import { Services } from "@/widgets/services";
import { Messages } from "@/widgets/messages";
import { SimpleStart } from "@/widgets/simple-start";
import { Faq } from "@/widgets/faq";
import { DownloadCta } from "@/widgets/cta";
import { SiteFooter } from "@/widgets/site-footer";

/**
 * FSD pages layer (named `views` to avoid clashing with Next routing).
 * Pure composition of widgets — no business logic here.
 */
export function HomePage() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <Community />
        <Features />
        <Services />
        <Messages />
        <SimpleStart />
        <Faq />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  );
}
