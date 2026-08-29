import { useState } from "react";
import { siteConfig } from "../config/site";
import WhatsappLink from "./WhatsappLink";
import "./FAQ.css";

// Edite as respostas abaixo conforme as informações forem definidas.
const PERGUNTAS = [
  {
    question: "Como funciona a contratação?",
    answer:
      "É simples: entre em contato pelo WhatsApp informando a data e os detalhes do seu evento para consultar disponibilidade e receber um orçamento.",
  },
  {
    question: "O personagem vai até o local da festa?",
    answer: "[INFORMAÇÃO A CONFIRMAR — descrever aqui como funciona o deslocamento até o evento]",
  },
  {
    question: "Quanto tempo dura a participação?",
    answer: "[INFORMAÇÃO A CONFIRMAR — descrever aqui a duração da apresentação]",
  },
  {
    question: "Quais regiões atende?",
    answer: siteConfig.serviceArea,
  },
  {
    question: "Como consultar disponibilidade?",
    answer: "Envie uma mensagem pelo WhatsApp com a data do seu evento para verificarmos a disponibilidade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container faq__inner">
        <div className="section-header">
          <span className="section-eyebrow">Dúvidas frequentes</span>
          <h2 className="section-title">Perguntas frequentes</h2>
        </div>

        <div className="faq__list">
          {PERGUNTAS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq__answer" id={`faq-answer-${index}`} role="region" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="faq__more">
          Ainda tem dúvidas?{" "}
          <WhatsappLink className="faq__more-link">Fale conosco pelo WhatsApp</WhatsappLink>
        </p>
      </div>
    </section>
  );
}
