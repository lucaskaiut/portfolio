import { Container } from "@/components/ui/container";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contato" },
];

export function Topbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <nav
          aria-label="Navegacao principal"
          className="flex items-center justify-between rounded-2xl bg-slate-950/80 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/40"
        >
          <a href="#home" className="text-sm font-bold tracking-[0.15em] text-slate-100">
            Lucas Kaiut
          </a>
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer text-sm text-slate-300 transition-colors duration-200 hover:text-emerald-400 focus-visible:text-emerald-300 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
