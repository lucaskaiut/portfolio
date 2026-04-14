import type { PortfolioData } from "@/types/portfolio";

const portfolioData: PortfolioData = {
  profile: {
    name: "Lucas Kaiut",
    title: "Desenvolvedor Full Stack",
    tagline:
      "Crio produtos digitais performáticos que convertem objetivos de negócio em experiências escaláveis.",
    about:
      "Atuo no desenvolvimento de aplicações web ponta a ponta, conectando produto, engenharia e UX para entregar software confiável, rápido e fácil de evoluir. Meu foco principal e gerar impacto mensurável com arquitetura consistente e execução pragmática.",
    location: "São José dos Pinhais, Brasil",
  },
  skills: [
    { name: "PHP", level: 99, category: "Backend" },
    { name: "Laravel", level: 99, category: "Backend" },
    { name: "MySQL", level: 90, category: "Backend" },
    { name: "Redis", level: 80, category: "Backend" },
    { name: "Docker", level: 90, category: "Tools" },
    { name: "React", level: 92, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 94, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 82, category: "Backend" },
    { name: "GraphQL", level: 78, category: "Backend" },
    { name: "AWS", level: 74, category: "Cloud" },
    { name: "Vercel", level: 85, category: "Cloud" },
  ],
  projects: [
    {
      id: "nox-agenda",
      name: "Nox Agenda",
      description:
        "Sistema de agendamento de serviços com automação via WhatsApp com Inteligência Artificial",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Laravel"],
      demoUrl: "https://noxagenda.com.br",
      repoUrl: "https://github.com/lucaskaiut/nox-schduler",
      image: "/images/nox-agenda.png",
    },
    {
      id: "tio-orlando",
      name: "Tio Orlando Viagens",
      description:
        "Site de e-commerce para o ramo turístico, baseado em uma plataforma de e-commerce própria (eShop)",
      technologies: ["Next.js", "PHP", "MySQL", "Laravel", "React"],
      demoUrl: "https://tioorlando.com.br",
      repoUrl: "",
      image: "/images/tio-orlando.png",
    },
    {
      id: "eshop",
      name: "eShop",
      description:
        "Plataforma de e-commerce para venda de produtos e serviços",
      technologies: ["Next.js", "PHP", "MySQL", "Laravel", "React"],
      demoUrl: "https://emutuadigital.com",
      repoUrl: "",
      image: "/images/eshop.png",
    },
    {
      id: "ematricula",
      name: "eMatrícula",
      description:
        "Sistema de matrícula online para instituições de ensino",
      technologies: ["Next.js", "PHP", "MySQL", "Laravel", "React"],
      demoUrl: "https://ematricula.lucaskaiut.com.br",
      repoUrl: "",
      image: "/images/ematricula.png",
    },
    {
      id: "monensure",
      name: "Monensure",
      description:
        "Sistema de gerenciamento financeiro pessoal",
      technologies: ["Tailwind CSS", "PHP", "MySQL", "Laravel", "React"],
      demoUrl: "",
      repoUrl: "https://github.com/lucaskaiut/monensure-desktop",
      image: "/images/monensure.png",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Líder Técnico",
      company: "eMutua Digital",
      period: "2022 - Atual",
      impact:
        "Arquitetou plataformas escaláveis de SaaS e e‐commerce utilizando Laravel, APIs RESTful e PostgreSQL, melhorando o tempo de entrega em 45% por meio de fluxos de engenharia otimizados. • Projetou sistemas backend distribuídos com estratégias de cache utilizando Redis, aumentando a performance e reduzindo a carga no banco de dados em ambientes de alto tráfego. • Implementou pipelines de CI/CD com Docker e AWS, permitindo implantações automatizadas e melhorando a estabilidade das releases.",
    },
    {
      id: "exp-2",
      role: "Desenvolvedor Full Stack",
      company: "eMutua Digital",
      period: "2021 - 2022",
      impact:
        "Desenvolveu funcionalidades completas de e‐commerce utilizando React, Next.js, Laravel e Type‐Script, atendendo mais de 10 mil usuários ativos. • Otimizou consultas de banco de dados e serviços de backend, reduzindo incidentes de suporte em 25% por meio de melhorias de performance e monitoramento. • Construiu APIs RESTful e integrou serviços de pagamento e logística de terceiros.",
    },
    {
      id: "exp-3",
      role: "Desenvolvedor PHP",
      company: "OnWay Soluções em Tecnologia",
      period: "2016 - 2021",
      impact: "Desenvolveu e manteve aplicações de e‐commerce utilizando PHP e arquitetura MVC. • Projetou módulos personalizados emelhorou a extensibilidade da plataforma com componentes modulares de backend. • Melhorou a performance por meio de otimização de consultas e refatoração do backend.",
    },
  ],
  contactLinks: [
    { label: "Email", href: "mailto:lucas.kaiut@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/lucas-kaiut" },
    { label: "GitHub", href: "https://github.com/lucaskaiut" },
    { label: "WhatsApp", href: "https://wa.me/5541997498795" },
  ],
};

export async function getPortfolioData(): Promise<PortfolioData> {
  return Promise.resolve(portfolioData);
}
