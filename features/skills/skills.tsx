import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import type { Skill, SkillCategory } from "@/types/portfolio";

interface SkillsProps {
  skills: Skill[];
}

const categories: SkillCategory[] = ["Backend", "Frontend", "Tools", "Cloud"];

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Skills"
            title="Stack tecnico com profundidade"
            description="Conhecimento distribuido por camadas para construir produtos robustos com velocidade de entrega."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category}
                className="rounded-2xl bg-slate-900/70 p-5 shadow-lg shadow-black/25 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/35"
              >
                <h3 className="mb-4 text-lg font-semibold text-slate-100">{category}</h3>
                <ul className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <li key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-slate-200">{skill.name}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800">
                          <div
                            aria-label={`Dominio em ${skill.name}`}
                            className="h-2 rounded-full bg-[#9d00ff] transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
