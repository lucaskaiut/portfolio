import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import type { Experience as ExperienceItem } from "@/types/portfolio";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Experiencia"
            title="Historico orientado a impacto"
            description="Trajetoria com entregas mensuraveis em produto, performance e capacidade de evolucao."
          />
          <ol className="relative space-y-6 border-s-2 border-slate-800 pl-6">
            {experience.map((item) => (
              <li key={item.id} className="relative">
                <span className="absolute -inset-s-[1.95rem] top-2 h-3 w-3 rounded-full bg-emerald-500" />
                <article className="rounded-2xl bg-slate-900/70 p-5 shadow-lg shadow-black/25 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/35">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.role} - {item.company}
                    </h3>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.impact}</p>
                </article>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
