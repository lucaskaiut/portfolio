import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { Profile } from "@/types/portfolio";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="relative pt-36 pb-16 sm:pt-40 sm:pb-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {profile.title}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-lg text-slate-300">{profile.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="#contact">Me contrate</Button>
            <Button href="#projects" variant="ghost">
              Ver projetos
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
