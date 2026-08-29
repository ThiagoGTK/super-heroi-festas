import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import WhatsappLink from "./WhatsappLink";
import "./Header.css";

const NAV_LINKS = [
  { href: "#apresentacao", label: "O Herói" },
  { href: "#experiencia", label: "A Experiência" },
  { href: "#galeria", label: "Galeria" },
  { href: "#eventos", label: "Eventos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="#topo" className="site-header__logo">
          <span className="site-header__logo-icon" aria-hidden="true">
            ⚡
          </span>
          {siteConfig.heroName}
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <WhatsappLink className="btn btn-primary site-header__cta">
          <span className="btn-icon" aria-hidden="true">
            🦸
          </span>
          Chamar o Herói
        </WhatsappLink>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`site-header__mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-label="Navegação mobile"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <WhatsappLink className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              🦸 Chamar o Herói
            </WhatsappLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
