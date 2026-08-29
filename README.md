# Herói das Festas — Site

Site em React + Vite para divulgação de um animador de festas infantis
caracterizado como super-herói, com foco em gerar contato pelo WhatsApp.

## Como rodar o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # visualiza a build de produção localmente
```

## O que editar para colocar as informações reais

### 1. Nome, WhatsApp, Instagram e região de atendimento

Tudo isso fica centralizado em **um único arquivo**:

📄 [`src/config/site.js`](src/config/site.js)

```js
export const siteConfig = {
  heroName: "Herói das Festas",              // nome do personagem/marca
  professionalName: "[NOME DO PROFISSIONAL]", // nome real do profissional
  whatsappNumber: "5500000000000",            // número no formato 55DDDNUMERO (só dígitos)
  whatsappDefaultMessage: "...",              // mensagem pré-preenchida do WhatsApp
  instagramUrl: "https://instagram.com/...",
  instagramHandle: "@seu_instagram_aqui",
  serviceArea: "[REGIÃO DE ATENDIMENTO]",
};
```

Alterando esse arquivo, o número de WhatsApp, o Instagram, o nome e a região
são atualizados automaticamente em todos os botões e páginas do site
(Hero, cabeçalho, rodapé, botão flutuante, FAQ etc.).

### 2. Fotos reais

As fotos ainda são placeholders (ícone de super-herói sobre fundo azul,
com uma etiqueta indicando o nome do arquivo esperado). Para trocar:

1. Coloque os arquivos de imagem em `public/images/` seguindo os nomes
   sugeridos em `public/images/README.txt`:
   - `hero-principal.jpg` — foto grande da seção principal (Hero)
   - `apresentacao.jpg` — foto da seção "Seu convidado mais especial chegou!"
   - `galeria/galeria-01.jpg` até `galeria/galeria-06.jpg` (ou mais) — fotos da galeria

2. Troque o componente `<PlaceholderImage ... />` por uma tag `<img>`:
   - Hero: [`src/components/Hero.jsx`](src/components/Hero.jsx)
   - Apresentação: [`src/components/Apresentacao.jsx`](src/components/Apresentacao.jsx)
   - Galeria: [`src/components/Galeria.jsx`](src/components/Galeria.jsx) (edite o array `FOTOS`
     para adicionar/remover itens, e troque `<PlaceholderImage />` por `<img src={...} alt={...} />`)

Exemplo de troca no Hero:

```jsx
// antes
<PlaceholderImage icon="🦸‍♂️" filename="public/images/hero-principal.jpg" />

// depois
<img src="/images/hero-principal.jpg" alt="Super-herói na festa" />
```

### 3. Textos das seções

Todos os textos ficam diretamente nos componentes em `src/components/`,
em português, fáceis de localizar e editar:

- `Hero.jsx` — título e subtítulo principais
- `Apresentacao.jsx` — texto de apresentação
- `Experiencia.jsx` — array `MOMENTOS` com os 4 cards de "O que acontece na festa"
- `Eventos.jsx` — array `TIPOS_EVENTO` com os tipos de festa atendidos
- `FAQ.jsx` — array `PERGUNTAS` com as perguntas e respostas

### 4. Informações ainda pendentes (marcadas no código)

Os seguintes pontos foram deixados como placeholder porque essas
informações não foram fornecidas. Procure por `[...]` nos arquivos
acima e substitua quando tiver a informação definitiva:

- Nome real do profissional
- Região de atendimento
- Se o personagem se desloca até o local da festa
- Duração da participação
- Preços, pacotes e condições de contratação (não incluídos no site)

### 5. SEO e imagem de compartilhamento (Open Graph)

Título, meta description e tags Open Graph/Twitter já estão configurados
em [`index.html`](index.html). Falta apenas:

- Adicionar uma imagem `og-image.jpg` (1200×630px recomendado) em `public/`
  para aparecer ao compartilhar o link em redes sociais/WhatsApp.
- Definir a URL final do site e, opcionalmente, reativar a tag
  `<link rel="canonical" ...>` (está comentada em `index.html`).

## Estrutura do projeto

```
src/
  components/     -> um componente por seção do site (Hero, Galeria, FAQ, etc.)
  config/site.js  -> configurações centrais (WhatsApp, Instagram, nome, região)
  utils/whatsapp.js -> geração do link do WhatsApp com mensagem pré-preenchida
public/
  images/         -> onde entram as fotos reais (veja README.txt dentro da pasta)
  favicon.svg     -> ícone do site (raio dourado)
```

## Checklist de qualidade já verificado

- ✅ Build de produção sem erros (`npm run build`)
- ✅ Lint sem problemas (`npm run lint`)
- ✅ Testado em viewport desktop e mobile (sem rolagem horizontal)
- ✅ Sem erros no console do navegador
- ✅ Lightbox da galeria, menu mobile e acordeão do FAQ funcionando
- ✅ Todos os botões de WhatsApp (Hero, cabeçalho, CTA, rodapé e botão
  flutuante) geram o link correto com mensagem pré-preenchida
