import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import type { Profile } from "@/types/portfolio";

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Sobre"
            title="Engenharia orientada a resultado"
            description="Mais do que entregar telas, eu projeto sistemas sustentáveis para acelerar negócio e reduzir custo de evolução."
          />
          <div className="rounded-2xl bg-slate-900/70 p-7 shadow-lg shadow-black/25 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/35">
            <p className="text-slate-300">{profile.about}</p>
            <p className="mt-4 text-sm font-medium text-slate-400">{profile.location}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
