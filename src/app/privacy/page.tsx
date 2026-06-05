import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How this website handles data. Short version: it collects almost nothing.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy policy"
        intro="The short version: this is a personal website, not a product. It has no accounts, no tracking pixels, and no forms. It collects almost nothing about you."
        meta="Last updated · June 2026"
        back={{ href: "/", label: "Home" }}
      />
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <article className="prose">
              <h2>What this site collects</h2>
              <p>
                Almost nothing about you personally. There are no accounts and
                no advertising or cross-site tracking cookies. The site records
                privacy-friendly aggregate analytics, a visitor tally, and
                whatever you choose to send via the contact form, all explained
                below. You can read every page without handing over personal
                information.
              </p>

              <h2>Hosting and server logs</h2>
              <p>
                The site is hosted on Vercel. Like virtually all web hosts,
                Vercel may automatically process limited technical data needed to
                serve and secure the site, such as your IP address, browser type,
                and the pages requested. This is standard infrastructure logging,
                handled by Vercel under their own privacy terms. I do not use it
                to identify you.
              </p>

              <h2>Cookies</h2>
              <p>
                No advertising or tracking cookies. The site sets a single
                first-party cookie purely so the visitor counter does not count
                you twice, and only after you accept the cookie notice. It holds
                a yes/no flag, nothing that identifies you; decline and no cookie
                is set.
              </p>

              <h2>Visitor count and analytics</h2>
              <p>
                The footer shows a running count of visitors: one aggregate
                number incremented in a private datastore, with no personal data
                or profile. The cookie above simply keeps your own visit from
                being recounted on every reload.
              </p>
              <p>
                The site also uses Vercel Web Analytics, which measures aggregate
                page views and visitor counts <strong>without cookies</strong> and
                without building a profile of you or tracking you across other
                sites. It tells me which pages are useful, nothing about who you
                are.
              </p>

              <h2>The contact form</h2>
              <p>
                If you use the contact form, it sends the name, email, and
                message you enter to my inbox using Resend, an email delivery
                service, so I can reply. That data is emailed, not saved to a
                database on this site, and it is processed by Resend under their
                privacy terms. The form includes a hidden anti-spam field;
                otherwise it asks for nothing beyond what you type.
              </p>

              <h2>When you contact me</h2>
              <p>
                However you reach out, by form, WhatsApp, email, or a booking
                link, you share only what you choose to send. I use it to reply
                to you and discuss working together. I do not sell it, and I do
                not add you to any list without your say-so.
              </p>

              <h2>Links to other services</h2>
              <p>
                Some links lead off this site, for example to WhatsApp, Substack,
                LinkedIn, GitHub, X, and Instagram. Once you follow a link, you
                are on that service and its own privacy policy applies. I do not
                control what those platforms collect.
              </p>

              <h2>Your choices</h2>
              <p>
                Because the site stores nothing about you, there is nothing to
                export or delete here. If we have exchanged messages and you would
                like me to delete that correspondence, just ask.
              </p>

              <h2>Changes</h2>
              <p>
                If this policy changes, the updated date at the top of the page
                will change with it.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about privacy? Email me at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
