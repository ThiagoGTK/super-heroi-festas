import { useState } from "react";
import Lightbox from "./Lightbox";
import { assetUrl } from "../utils/assetUrl";
import "./Galeria.css";

// Para adicionar mais fotos: coloque o arquivo em /public/images/galeria/
// e inclua um novo item no array abaixo.
const FOTOS = [
  { id: 1, filename: "galeria-01.jpg", alt: "Super-herói ao lado de criança em evento, fazendo joinha", size: "normal" },
  { id: 2, filename: "galeria-02.jpg", alt: "Super-herói participando da festa e comemorando com bolo", size: "normal" },
  { id: 3, filename: "galeria-03.jpg", alt: "Dupla de super-heróis em apresentação de evento à noite", size: "normal" },
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
              className={`galeria__item galeria__item--${foto.size}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar foto: ${foto.alt}`}
            >
              <img
                src={assetUrl(`images/galeria/${foto.filename}`)}
                alt={foto.alt}
                className="galeria__img"
                loading="lazy"
              />
              <span className="galeria__zoom" aria-hidden="true">
                🔍
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
