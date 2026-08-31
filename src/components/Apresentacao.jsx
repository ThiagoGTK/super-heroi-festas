import { Star } from "./ComicDecorations";
import { assetUrl } from "../utils/assetUrl";
import "./Apresentacao.css";

export default function Apresentacao() {
  return (
    <section id="apresentacao" className="section apresentacao">
      <div className="container apresentacao__inner">
        <div className="apresentacao__figure">
          <div className="apresentacao__frame">
            <img
              src={assetUrl("images/apresentacao.jpg")}
              alt="Super-herói posando com convidados em evento"
              className="apresentacao__img"
            />
          </div>
          <Star className="apresentacao__star" />
        </div>

        <div className="apresentacao__content">
          <span className="section-eyebrow">Seu convidado mais especial chegou!</span>
          <h2 className="section-title">
            Um super-herói de verdade, na sua festa
          </h2>
          <p className="section-subtitle">
            Estamos à disposição para apresentar uma forma diferente de divulgar a sua marca:
            nossos artistas dão vida a personagens super-heróis icônicos, queridos pelo público
            de todas as idades, levando muito carisma para ações promocionais e eventos
            corporativos. Consulte a disponibilidade e leve essa experiência única para a
            divulgação dos seus produtos e serviços.
          </p>
        </div>
      </div>
    </section>
  );
}
