import PlaceholderImage from "./PlaceholderImage";
import { Star } from "./ComicDecorations";
import "./Apresentacao.css";

export default function Apresentacao() {
  return (
    <section id="apresentacao" className="section apresentacao">
      <div className="container apresentacao__inner">
        <div className="apresentacao__figure">
          <div className="apresentacao__frame">
            <PlaceholderImage icon="🦸‍♂️" filename="public/images/apresentacao.jpg" />
          </div>
          <Star className="apresentacao__star" />
        </div>

        <div className="apresentacao__content">
          <span className="section-eyebrow">Seu convidado mais especial chegou!</span>
          <h2 className="section-title">
            Um super-herói de verdade, na sua festa
          </h2>
          <p className="section-subtitle">
            Imagine a reação das crianças quando um super-herói aparecer de verdade na festa.
            O personagem chega caracterizado, interage com os convidados, participa dos momentos
            especiais e leva muita diversão e energia para o evento.
          </p>
        </div>
      </div>
    </section>
  );
}
