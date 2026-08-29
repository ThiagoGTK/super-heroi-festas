import "./Experiencia.css";

// Textos fáceis de editar: basta alterar os campos abaixo.
const MOMENTOS = [
  {
    icon: "🦸",
    title: "Entrada do super-herói",
    text: "O personagem chega à festa caracterizado e surpreende os convidados.",
  },
  {
    icon: "🎉",
    title: "Interação",
    text: "O super-herói interage com as crianças e participa da festa.",
  },
  {
    icon: "📸",
    title: "Momentos especiais",
    text: "Um personagem marcante para deixar a festa ainda mais inesquecível.",
  },
  {
    icon: "⭐",
    title: "Uma experiência diferente",
    text: "Uma presença que transforma uma festa comum em uma aventura.",
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="section experiencia">
      <div className="halftone-bg halftone-bg--dark" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">A experiência</span>
          <h2 className="section-title">O que acontece na festa?</h2>
        </div>

        <div className="experiencia__grid">
          {MOMENTOS.map((momento) => (
            <div className="experiencia__card" key={momento.title}>
              <span className="experiencia__icon" aria-hidden="true">
                {momento.icon}
              </span>
              <h3 className="experiencia__card-title">{momento.title}</h3>
              <p className="experiencia__card-text">{momento.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
