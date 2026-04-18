import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import type { ContactLink } from "@/types/portfolio";
import { ContactForm } from "./contact-form";

interface ContactProps {
  links: ContactLink[];
}

export function Contact({ links }: ContactProps) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Contato"
            title="Vamos construir algo relevante"
            description="Aberto a projetos e oportunidades que exigem qualidade tecnica e foco em resultado."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <aside className="rounded-2xl bg-slate-900/70 p-6 shadow-lg shadow-black/25 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/35">
              <h3 className="text-lg font-semibold text-slate-100">Canais</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="cursor-pointer text-sm text-slate-300 transition-colors duration-200 hover:text-[#9d00ff]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
