import WhatsappLink from "./WhatsappLink";
import { Lightning, Star } from "./ComicDecorations";
import "./CTAContratacao.css";

export default function CTAContratacao() {
  return (
    <section className="section cta-contratacao">
      <div className="halftone-bg" aria-hidden="true" />
      <Lightning className="cta-contratacao__deco cta-contratacao__deco--1" />
      <Star className="cta-contratacao__deco cta-contratacao__deco--2" />

      <div className="container cta-contratacao__inner">
        <h2 className="section-title section-title--light">
          Sua festa está pronta para receber um super-herói?
        </h2>
        <p className="section-subtitle section-subtitle--light" style={{ margin: "16px auto 0" }}>
          Entre em contato, consulte a disponibilidade e faça seu orçamento.
        </p>

        <WhatsappLink className="btn btn-secondary cta-contratacao__btn">
          <span className="btn-icon" aria-hidden="true">
            💬
          </span>
          Falar pelo WhatsApp
        </WhatsappLink>
      </div>
    </section>
  );
}
