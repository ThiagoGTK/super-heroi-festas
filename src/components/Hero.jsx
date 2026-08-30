import WhatsappLink from "./WhatsappLink";
import { Lightning, Star, Burst } from "./ComicDecorations";
import { assetUrl } from "../utils/assetUrl";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="halftone-bg" />
        <Lightning className="hero__deco hero__deco--lightning-1" />
        <Lightning className="hero__deco hero__deco--lightning-2" />
        <Star className="hero__deco hero__deco--star-1" />
        <Star className="hero__deco hero__deco--star-2" />
        <Burst className="hero__deco hero__deco--burst" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">🦸 Animação temática para festas infantis</span>

          <h1 className="hero__title">
            O super-herói que vai transformar sua festa em uma{" "}
            <span className="hero__title-highlight">aventura!</span>
          </h1>

          <p className="hero__subtitle">
            Leve a magia dos super-heróis para o seu evento e proporcione às crianças uma
            experiência que elas nunca vão esquecer.
          </p>

          <div className="hero__actions">
            <WhatsappLink className="btn btn-primary hero__cta">
              <span className="btn-icon" aria-hidden="true">
                🦸
              </span>
              Quero levar um super-herói para minha festa
            </WhatsappLink>
          </div>
        </div>

        <div className="hero__figure">
          <div className="hero__figure-frame">
            <video
              src={assetUrl("images/galeria/galeria-video-01.mp4")}
              className="hero__figure-img"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Super-herói animando uma festa (vídeo em loop, sem som)"
            />
          </div>
          <Star className="hero__figure-star" />
        </div>
      </div>

      <svg
        className="hero__wave"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="var(--color-cloud)"
          d="M0,64 C240,10 480,10 720,40 C960,70 1200,70 1440,24 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  );
}
