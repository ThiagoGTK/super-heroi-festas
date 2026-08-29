import "./PlaceholderImage.css";

/**
 * Espaço reservado para uma foto real.
 * Para substituir por uma foto de verdade, troque este componente por uma tag <img>
 * apontando para o arquivo em /public/images/ (veja instruções no README).
 */
export default function PlaceholderImage({ icon = "🦸", filename, className = "" }) {
  return (
    <div className={`placeholder-image ${className}`} role="img" aria-label="Foto ilustrativa a ser substituída">
      <div className="placeholder-image__halftone" aria-hidden="true" />
      <span className="placeholder-image__icon" aria-hidden="true">
        {icon}
      </span>
      {filename && <span className="placeholder-image__tag">Substituir: {filename}</span>}
    </div>
  );
}
