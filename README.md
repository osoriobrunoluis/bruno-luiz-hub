# Bruno Luiz — Hub

Landing page minimalista para direcionar o tráfego do Instagram entre dois caminhos:

1. **Experiência de musicoterapia** → `www.brunoluizmt.com.br`
2. **Portfólio de criação de sites** → `www.brunoluisportfolio.com.br`

---

## Estrutura

```
.
├── index.html     # Marcação semântica + textos
├── styles.css     # Tema (cores, tipografia, animações) em :root
├── script.js      # Disparo da animação de entrada
├── package.json   # Apenas para `npm run dev`
└── README.md
```

Site 100% estático. Sem build, sem dependências.

---

## Onde editar

### Textos e links → `index.html`
Procure pelos comentários `<!-- ALTERAR AQUI -->`. Os campos editáveis são:

- Nome (`<h1 class="name">`)
- Frase central (`<p class="tagline">`)
- Descrição curta (`<p class="lead">`)
- Link 1 — experiência (botão verde)
- Link 2 — portfólio (botão contornado)
- Link do Instagram (rodapé)

### Cores e tipografia → `styles.css`
Tudo está concentrado no bloco `:root` no topo do arquivo. Trocar `--green`, `--bg`, `--ink` é suficiente para repaginar a identidade.

---

## Rodar localmente

```bash
npm run dev
```

Abra `http://localhost:5173`.

> Não precisa de `npm install`. O script usa `npx serve` direto — o Node baixa e roda sob demanda.

---

## Deploy na Vercel

```bash
# Uma vez (se ainda não tem o CLI)
npm i -g vercel

# Na pasta do projeto
vercel        # preview
vercel --prod # produção
```

Não há `vercel.json`: a Vercel detecta um site estático e serve `index.html` automaticamente.

Alternativa: arrastar a pasta no painel da Vercel ou conectar o repositório do GitHub.
