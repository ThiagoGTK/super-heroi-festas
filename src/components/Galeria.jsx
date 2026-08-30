import { useState } from "react";
import Lightbox from "./Lightbox";
import { assetUrl } from "../utils/assetUrl";
import "./Galeria.css";

// Para adicionar mais fotos/vídeos: coloque o arquivo em /public/images/galeria/
// e inclua um novo item no array abaixo (use type: "video" para vídeos).
const FOTOS = [
  { id: 1, filename: "galeria-01.jpg", alt: "Super-herói ao lado de criança em evento, fazendo joinha", size: "normal" },
  { id: 2, filename: "galeria-02.jpg", alt: "Super-herói participando da festa e comemorando com bolo", size: "normal" },
  { id: 3, filename: "galeria-03.jpg", alt: "Dupla de super-heróis em apresentação de evento à noite", size: "normal" },
  { id: 4, filename: "galeria-04.jpg", alt: "Super-herói posando com cosplayers em evento", size: "normal" },
  { id: 5, filename: "galeria-05.jpg", alt: "Super-herói em participação de podcast", size: "normal" },
  { id: 6, filename: "galeria-video-01.mp4", alt: "Vídeo do super-herói animando a festa", size: "normal", type: "video" },
];

export default function Galeria() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="galeria" className="section galeria">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Galeria</span>
          <h2 className="section-title">Momentos de aventura</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            Alguns registros reais de festas e eventos animados.
          </p>
        </div>

        <div className="galeria__grid">
          {FOTOS.map((foto, index) => (
            <button
              type="button"
              key={foto.id}
              className={`galeria__item galeria__item--${foto.size} ${foto.type === "video" ? "galeria__item--video" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`${foto.type === "video" ? "Reproduzir vídeo" : "Ampliar foto"}: ${foto.alt}`}
            >
              {foto.type === "video" ? (
                <video
                  src={assetUrl(`images/galeria/${foto.filename}`)}
                  className="galeria__img"
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={assetUrl(`images/galeria/${foto.filename}`)}
                  alt={foto.alt}
                  className="galeria__img"
                  loading="lazy"
                />
              )}
              <span className="galeria__zoom" aria-hidden="true">
                {foto.type === "video" ? "▶" : "🔍"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={FOTOS}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChangeIndex={setActiveIndex}
        />
      )}
    </section>
  );
}
