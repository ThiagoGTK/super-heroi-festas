import { siteConfig } from "../config/site";
import WhatsappLink from "./WhatsappLink";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo">
            <span aria-hidden="true">⚡</span> {siteConfig.heroName}
          </span>
          <p className="site-footer__professional">{siteConfig.professionalName}</p>
          <p className="site-footer__area">Atendimento: {siteConfig.serviceArea}</p>
        </div>

        <div className="site-footer__links">
          <WhatsappLink className="site-footer__link">
            <span aria-hidden="true">📱</span> WhatsApp
          </WhatsappLink>
          <a
            className="site-footer__link"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">📷</span> Instagram
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © {year} {siteConfig.heroName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
