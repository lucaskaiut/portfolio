import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import type { Project } from "@/types/portfolio";
import Link from "next/link";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Portfolio"
            title="Projetos de alto impacto"
            description="Selecao de produtos construidos com foco em performance, experiencia e escalabilidade."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="flex h-full flex-col gap-4">
                <Link
                  href={project.demoUrl ?? project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col gap-4"
                >
                  <Image
                    src={project.image}
                    alt={`Capa do projeto ${project.name}`}
                    width={420}
                    height={220}
                    className="h-44 w-full rounded-xl object-cover shadow-sm shadow-black/20"
                  />
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3 pt-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-sm font-semibold text-[#9d00ff] transition-colors duration-200 hover:text-[#9d00ff]/90"
                    >
                      Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-slate-100"
                    >
                      Repositorio
                    </a>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
