import { siteConfig } from "../config/site";

/**
 * Monta o link do WhatsApp (wa.me) com mensagem pré-preenchida.
 * @param {string} [customMessage] - mensagem alternativa à padrão do site.
 */
export function getWhatsappLink(customMessage) {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default getWhatsappLink;
