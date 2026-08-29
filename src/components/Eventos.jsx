import "./Eventos.css";

const TIPOS_EVENTO = [
  { icon: "🎂", label: "Festas de aniversário" },
  { icon: "🎈", label: "Eventos infantis" },
  { icon: "🎭", label: "Festas temáticas" },
  { icon: "🌟", label: "Eventos especiais" },
];

export default function Eventos() {
  return (
    <section id="eventos" className="section eventos">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Onde contratar</span>
          <h2 className="section-title">Para quais eventos?</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            O super-herói pode marcar presença em diferentes tipos de celebração.
          </p>
        </div>

        <div className="eventos__grid">
          {TIPOS_EVENTO.map((evento) => (
            <div className="eventos__item" key={evento.label}>
              <span className="eventos__icon" aria-hidden="true">
                {evento.icon}
              </span>
              <span className="eventos__label">{evento.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
