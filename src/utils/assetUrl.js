/**
 * Monta a URL de um arquivo estático (pasta public/) respeitando o
 * "base path" configurado no vite.config.js — necessário porque o site
 * é publicado em um subcaminho no GitHub Pages (ex: /super-heroi-festas/).
 */
export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export default assetUrl;
