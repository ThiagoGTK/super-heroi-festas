import { getWhatsappLink } from "../utils/whatsapp";

/**
 * Link/botão que abre o WhatsApp com mensagem pré-preenchida.
 * Use `as` para herdar as classes de botão (.btn.btn-primary etc.) do elemento pai.
 */
export default function WhatsappLink({ children, className = "", message, ...rest }) {
  return (
    <a
      href={getWhatsappLink(message)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
