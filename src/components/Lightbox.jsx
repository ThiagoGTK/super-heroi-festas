import { useCallback, useEffect, useRef } from "react";
import { assetUrl } from "../utils/assetUrl";
import "./Lightbox.css";

export default function Lightbox({ items, activeIndex, onClose, onChangeIndex }) {
  const dialogRef = useRef(null);
  const item = items[activeIndex];

  const goTo = useCallback(
    (delta) => {
      const next = (activeIndex + delta + items.length) % items.length;
      onChangeIndex(next);
    },
    [activeIndex, items.length, onChangeIndex]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo(1);
      if (event.key === "ArrowLeft") goTo(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [goTo, onClose]);

  return (
    <div className="lightbox" role="presentation" onClick={onClose}>
      <div
        className="lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`Foto ampliada: ${item.alt}`}
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={() => goTo(-1)}
          aria-label="Foto anterior"
        >
          ‹
        </button>

        <div className="lightbox__frame">
          <img src={assetUrl(`images/galeria/${item.filename}`)} alt={item.alt} className="lightbox__img" />
        </div>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={() => goTo(1)}
          aria-label="Próxima foto"
        >
          ›
        </button>

        <p className="lightbox__caption">{item.alt}</p>
      </div>
    </div>
  );
}
