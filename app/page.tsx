import { About } from "@/features/about/about";
import { Contact } from "@/features/contact/contact";
import { Experience } from "@/features/experience/experience";
import { Hero } from "@/features/hero/hero";
import { Topbar } from "@/features/navigation/topbar";
import { Projects } from "@/features/projects/projects";
import { Skills } from "@/features/skills/skills";
import { getPortfolioData } from "@/services/portfolio.service";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <div className="min-h-screen bg-slate-950">
      <Topbar />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Contact links={data.contactLinks} />
      </main>
    </div>
  );
}
