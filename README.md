# War Editor Portfolio

Redesign do portfólio do editor de vídeo Felipe Guerra (War Editor), reconstruído a partir do zero como projeto de estudo em design system, tipografia e motion.

> **Status:** em desenvolvimento. Hero implementado (vídeo ainda como placeholder); toggle PT/EN planejado.

## Stack

- React 19 + Vite 8
- TypeScript 6
- Tailwind CSS v4
- shadcn/ui (sobre Base UI)
- Motion (antigo Framer Motion)
- Vitest + Testing Library

## Como rodar

Pré-requisitos: Node.js 22.22.2+ (linha 22), 24.15.0+ (linha 24) ou 26+, e npm.

```bash
git clone https://github.com/daniykt/war-editor-portfolio.git
cd war-editor-portfolio
npm ci
npm run dev
```

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Checa os tipos e gera o build de produção |
| `npm run preview` | Serve localmente o build gerado |
| `npm run lint` | Roda o ESLint |
| `npm test` | Vitest em modo watch |
| `npm test -- --run` | Roda os testes uma vez |

## Estrutura de pastas

```text
src/
├── assets/             # imagens importadas pelo código
├── components/
│   ├── hero/           # seção Hero e o título animado
│   ├── layout/         # Nav
│   ├── ui/             # componentes shadcn/ui
│   └── Styleguide.tsx  # referência visual (ainda não usada na aplicação)
├── hooks/              # hooks (useFontReady)
├── lib/                # utilitários
├── test/               # setup e exemplo do Vitest
├── App.tsx
├── index.css           # tokens e typographies
└── main.tsx
```

## Design system

Baseado no Custom Editing Kit do War (cores 60/30/10). Os tokens ficam em `src/index.css`.

### Cores

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#1b1919` | Fundo |
| `primary` | `#f5e8c7` | Títulos e elementos de marca |
| `accent` | `#c6d3f5` | CTAs e destaques |
| `text` | `#f5f4f0` | Texto de apoio |

### Typographies

| Classe | Fonte | Tamanho / peso |
|---|---|---|
| `text-display` | Jersey 25 | 72px / 400 |
| `text-headline` | Raleway | 48px / 700 |
| `text-body` | Raleway | 18px / 500 |
| `text-caption` | Raleway | 14px / 600 |
| `text-label` | Raleway, caixa alta | 12px / 700 |

### Breakpoints

| Faixa | Largura | O que muda |
|---|---|---|
| base (mobile) | < 768px | Layout empilhado (texto acima do vídeo). Nav principal vira barra fixa no rodapé, com "Let's talk" em destaque. Display em 48px. CTA do Hero oculto (a barra já tem o CTA). |
| `md` (tablet) | 768px a 1023px | Uma coluna, com mais respiro lateral. Display em 72px. Barra fixa no rodapé centralizada, com 480px. CTA do Hero oculto. |
| `lg` (laptop) | 1024px a 1279px | Nav volta ao topo, em linha. CTA do Hero visível. Ainda em uma coluna. |
| `xl` (desktop) | ≥ 1280px | Duas colunas: texto à esquerda, vídeo à direita (largura fixa), alinhados ao centro. |

### Motion

Sensação stop-motion e controlada, sem bounce.

- **Título:** entra palavra por palavra (intervalo de 80ms) em 4 passos; "watch" dá um salto e muda para a cor de destaque.
- **Parágrafo:** fade suave.
- **CTA:** entra com ease-out depois que o título termina.
- **Fonte:** o texto só aparece quando a Jersey 25 carrega, ou após 1,5s.
- **Acessibilidade:** com "reduzir movimento" ativo no sistema, os deslocamentos são desativados; os fades continuam.

## Design

Protótipo no Penpot: link em breve.
