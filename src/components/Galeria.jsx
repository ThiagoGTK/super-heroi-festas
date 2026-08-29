import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import Lightbox from "./Lightbox";
import "./Galeria.css";

// Para trocar pelas fotos reais: adicione os arquivos em /public/images/galeria/
// e substitua o <PlaceholderImage /> de cada item por <img src="/images/galeria/arquivo.jpg" alt="..." />
const FOTOS = [
  { id: 1, filename: "galeria-01.jpg", alt: "Super-herói em festa infantil", size: "tall" },
  { id: 2, filename: "galeria-02.jpg", alt: "Super-herói interagindo com crianças", size: "normal" },
  { id: 3, filename: "galeria-03.jpg", alt: "Super-herói posando para foto", size: "normal" },
  { id: 4, filename: "galeria-04.jpg", alt: "Super-herói animando a festa", size: "tall" },
  { id: 5, filename: "galeria-05.jpg", alt: "Chegada do super-herói", size: "normal" },
  { id: 6, filename: "galeria-06.jpg", alt: "Super-herói com as crianças no evento", size: "normal" },
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
            Fotos ilustrativas — em breve, registros reais dos eventos.
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
              <PlaceholderImage icon="🦸" filename={`public/images/galeria/${foto.filename}`} />
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
