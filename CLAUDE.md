# CLAUDE.md — Hub Bruno Luiz

Documento de contexto pro projeto. Mantém o estado de tudo que foi decidido,
feito e o que falta. Atualizar este arquivo sempre que houver mudança
estrutural (paleta, tipografia, deploy, identidade, conteúdo).

---

## 1. Visão geral do projeto

**O quê:** landing page minimalista que serve como hub de direcionamento de
tráfego do Instagram (`@obruno.luiz`) entre os dois trabalhos do Bruno:

1. **Musicoterapia / improvisação terapêutica** → `https://www.brunoluizmt.com.br`
2. **Criação de sites / portfólio** → `https://www.brunoluisportfolio.com.br`

**Conceito:** *"Do que você sente ao que o mundo vê."* — verbo único que une
as duas potências (sentimentos viram som / ideias viram site = ambos viram
**forma**).

**Tom:** editorial sofisticado / luxo terapêutico. Não corporativo, não
linktree-genérico. Pouco texto, alta intenção.

---

## 2. URLs e endereços

| Recurso | URL |
|---------|-----|
| Domínio principal (produção) | https://brunoluiz.com.br |
| Alias Vercel | https://bruno-luiz-hub.vercel.app |
| Repositório | https://github.com/osoriobrunoluis/bruno-luiz-hub |
| Painel Vercel | https://vercel.com/brunoluizs-projects-681913e5/bruno-luiz-hub |
| Página interna (templates) | https://brunoluiz.com.br/templates |
| Instagram | https://instagram.com/obruno.luiz |

**DNS configurado:** `brunoluiz.com.br` (apex) + `www.brunoluiz.com.br`,
ambos apontando pra Vercel. `brunoluiz.com.br` faz 307 → `www.brunoluiz.com.br`.

---

## 3. Arquitetura técnica

Site **100% estático** (HTML + CSS + favicon SVG inline). Sem build, sem
JavaScript, sem dependências em produção. `package.json` existe apenas pra
servir `npm run dev` local via `http-server`.

```
.
├── index.html              # Hub (página principal)
├── styles.css              # Estilos do hub
├── package.json            # Só pro npm run dev
├── README.md
├── CLAUDE.md               # Este arquivo
├── .gitignore
└── templates/              # Página interna (uso pessoal)
    ├── index.html          # 4 cards de template + paleta + tipografia
    └── styles.css
```

**Animação de entrada:** 100% CSS (`@keyframes` + `animation-fill-mode: both`).
NÃO depender de JS — crawlers e o screenshot service da Vercel renderizam
sem JS. Animações JS deixam a página em branco no card do painel da Vercel.

**Responsivo:** mobile-first. Botões empilham no mobile, lado a lado em ≥720px.

**Acessibilidade:** `prefers-reduced-motion` respeitado, `prefers-color-scheme`
forçado em `light` (a paleta creme é a identidade).

---

## 4. Sistema de identidade visual

### Paleta (4 primárias + 2 acentos opcionais)

| Cor | Hex | Uso |
|-----|-----|-----|
| Creme | `#f3ede1` | Fundo (sempre) |
| Preto aquecido | `#1a1714` | Texto principal |
| Ouro terroso | `#b89968` | Acentos, linhas, ◆ |
| Ink soft | `#4a443c` | Texto secundário |
| Verde-musgo (acento) | `#2a3f33` | Variação ocasional |
| Bordô profundo (acento) | `#5a3537` | Variação ocasional |

**Regras:**
- Fundo: SEMPRE creme. Nunca branco puro nem preto.
- Texto: SEMPRE preto aquecido. Nunca preto puro.
- Ouro: APENAS em detalhes pequenos (linhas, ◆, primeira letra).
- Foto: aplicar filtro warm pra harmonizar com o creme.

### Tipografia (3 fontes do Google Fonts)

| Fonte | Função | Variações usadas |
|-------|--------|------------------|
| **Cinzel** | Display: nomes, títulos, "marca" — sempre maiúsculas, tracking 0.18-0.22em | 400, 500, 600 |
| **Fraunces** | Itálico: tagline, citações, frases conceituais | italic 300, 400 |
| **Inter Tight** | Corpo: descrições, datas, legendas longas | 300, 400, 500 |

**Cinzel** é display all-caps inspirado em inscrições romanas. NÃO usar em
texto longo (cansa o olho). Botões no hub estão em Cinzel uppercase porque
labels são curtos ("VIVER A EXPERIÊNCIA", "CRIAR UM SITE").

### Ornamentos

- `─ ◆ ─` em ouro entre nome e tagline (hub) e em capas (citação, conceito)
- `─ BL ─` no topo do hub (linhas finas dos dois lados do monograma BL em Cinzel)
- Textura de grão sutil sobre o fundo (SVG filter `fractalNoise`, opacidade ~0.4, multiply)

### Voz / tom da copy

- 1ª pessoa, próxima, sem "transformando" (gerúndio corporativo)
- Frases curtas e conceituais > parágrafos descritivos
- Verbo central: **dar forma** (ao que se sente, à ideia, à presença)
- Hub tagline (atemporal): *"Do que você sente ao que o mundo vê."*
- Bio do Instagram (atemporal): *"Da expressão à forma."*

---

## 5. Estado atual do hub (homepage)

```
─ BL ─                         ← monograma Cinzel + linhas
presença · escuta · criação    ← eyebrow Inter Tight uppercase
BRUNO LUIZ                     ← Cinzel grande
─ ◆ ─                          ← ornamento dourado
"Do que você sente ao que o    ← Fraunces italic (tagline)
 mundo vê"
Música, terapia e criação      ← lead Inter Tight
digital.

[ MUSICOTERAPIA ]              ← tag Cinzel small
[ ━━ Viver a experiência → ]   ← botão primário, contorno ouro 2px

[ CRIAÇÃO DIGITAL ]            ← tag Cinzel small
[ ━ Criar um site → ]          ← botão secundário, contorno escuro 1.5px

© Bruno Luiz · 2026 — Instagram   ← footer
```

**Hover dos botões:** preenche em ouro, texto preto, leve elevação,
brilho deslizante e seta avança 4px à direita.

---

## 6. Instagram (estado atual)

**Handle:** `@obruno.luiz` (trocado de `@brunoluiz.musicoterapia`)

**Nome:** `Bruno Luiz | Música • Terapia • Criação digital`

**Categoria:** Artista

**Bio (≤150 chars, cabe sem `...mais`):**
```
Música • Terapia • Criação digital
Da expressão à forma.
Improvisos, vibroacústica e sites.
↓ dois caminhos
```

**Link único:**
- URL: `https://brunoluiz.com.br`
- Título: `Os dois Caminhos`

> **Nota:** no desktop do Instagram, mesmo com título configurado, ele
> exibe a URL embaixo do botão. No app mobile, mostra só o botão. Não
> há solução pelo IG — solução foi comprar o domínio próprio
> (`brunoluiz.com.br` em vez de `bruno-luiz-hub.vercel.app`).

---

## 7. Página `/templates` (uso interno)

**Acesso:** `https://brunoluiz.com.br/templates`
(noindex, não aparece em buscas, não está linkada do hub)

Sistema visual unificado pro feed do Instagram. **4 templates de capa** em
proporção 1:1 (post quadrado de feed):

| # | Nome | Quando usar |
|---|------|-------------|
| 01 | Retrato + assinatura | Fotos pessoais, apresentações, momentos íntimos |
| 02 | Citação · Reflexão | Pensamento, frase de impacto, conteúdo profundo |
| 03 | Convite · Vivência | Eventos, agendas, vivências terapêuticas (substitui Kalimba) |
| 04 | Conceito · Categoria | Categorias do feed (Inspirações, Reflexões) — substitui Inspirações |

A página inclui também **referências visuais** completas:
- 4 swatches da paleta (com hex codes prontos pra copiar)
- 3 cards de tipografia (com fonte renderizada + uso recomendado + link Google Fonts)

---

## 8. Passo a passo — recriar capas no CapCut Pro

Guia para o Bruno usar a página `/templates` como referência ao montar
posts reais. Documentado pra ele continuar sozinho.

### Pré-requisito (uma vez só): instalar as 3 fontes

1. Baixar de:
   - https://fonts.google.com/specimen/Cinzel → "Get font" → "Download all"
   - https://fonts.google.com/specimen/Fraunces
   - https://fonts.google.com/specimen/Inter+Tight
2. Descompactar os ZIPs
3. Para cada `.ttf`: duplo clique → **Instalar fonte**
4. Reiniciar o CapCut Pro

### Parte 1 — Preparação (no navegador)

1. Abrir `brunoluiz.com.br/templates` no Safari/Chrome (computador)
2. Rolar até o template desejado (ex: 03 Convite · Vivência pro Kalimba)
3. **Cmd + Shift + 4** → arrastar SÓ sobre o quadrado do template
4. Salvar o print (ex: `template-kalimba.png`)
5. Separar a foto real que vai usar (ex: `foto-kalimba.png`) — pode ser
   sua ou de banco livre como [Unsplash](https://unsplash.com)

### Parte 2 — CapCut Pro (configuração)

1. Novo projeto → **Aspect Ratio 1:1 (1080×1080)** — sempre quadrado pra feed
2. Renomear o projeto (ex: `kalimba-post`)

### Parte 3 — Montar o post (exemplo: Kalimba)

1. **Importar template como referência:**
   - Mídia → arrastar `template-kalimba.png` pra timeline
   - Esticar pra ocupar 1080×1080
   - Opacidade: **30%**
   - Bloquear a camada (cadeado)

2. **Importar a foto real:**
   - Arrastar `foto-kalimba.png` ACIMA do template na timeline
   - Posicionar/redimensionar pra cobrir só os ~65% de cima

3. **Filtro warm na foto** (Ajustar):
   - Temperatura: +15
   - Saturação: -10
   - Vinheta: leve

4. **Faixa creme em baixo** (~35% de altura):
   - Estoque → Cor sólida
   - Cor: `#f3ede1`
   - Posicionar na parte inferior

5. **Texto principal** (Cinzel):
   - Texto: `KALIMBA` ↵ `AO NASCER DO SOL`
   - Fonte: Cinzel · Tamanho: ~80–100pt
   - Cor: `#1a1714` · Letter-spacing: 4–6
   - Alinhamento: centro · Posição: parte alta da faixa creme

6. **Ornamento ◆:**
   - Texto: `◆`
   - Tamanho: ~24pt · Cor: `#b89968` (ouro)
   - Posição: centralizado abaixo do título

7. **Subtítulo** (Fraunces italic):
   - Texto: `vivência terapêutica`
   - Fonte: Fraunces italic · Tamanho: ~36pt
   - Cor: `#4a443c`

8. **Data e local** (Inter Tight):
   - Texto: `18 mai · 06h · Cuiabá`
   - Fonte: Inter Tight regular · Tamanho: ~28pt
   - Cor: `#8a8275` (mute) · Letter-spacing: 2

9. **Apagar a camada de referência** (template-kalimba.png)
10. **Exportar:** 1080p · PNG · qualidade alta

### Alternativa mais simples: Canva

Pra capas estáticas, [Canva](https://canva.com) é mais visual e rápido que
CapCut Pro. Mesmos passos, interface arrastar-e-soltar:

1. Criar design → "Post para Instagram (1080×1080)"
2. Importar print do template como camada de fundo
3. Construir por cima
4. Exportar PNG

CapCut Pro é melhor reservar pra **vídeo / Reels** (a parte que ele faz bem).

---

## 9. Comandos úteis

```bash
# Servir o site localmente em http://localhost:5173
npm run dev

# Deploy preview (testa antes de produção)
vercel deploy

# Deploy produção
vercel deploy --prod --yes

# Ver logs do último deploy
vercel logs <deployment-url>

# Forçar redeploy sem mudanças (regenera screenshot do painel)
vercel deploy --prod --yes --force
```

**Auto-deploy ativo:** cada `git push origin main` deploya automaticamente
em produção via integração GitHub ↔ Vercel. PRs e branches geram URLs de
preview isoladas.

---

## 10. Decisões importantes (e por quê)

| Decisão | Razão |
|---------|-------|
| Site estático, sem framework | Página de 1 dobra, 1 hero, 2 CTAs. Next/React seria overkill. |
| Animação 100% CSS (sem JS) | Screenshot service da Vercel e crawlers renderizam sem JS — JS-based animação deixa o card branco no painel. |
| Domínio próprio `brunoluiz.com.br` | Único jeito de esconder a URL feia `bruno-luiz-hub.vercel.app` no Instagram desktop. Patrimônio de marca. |
| Cinzel + Fraunces italic + Inter Tight | Cinzel = monumental atemporal. Fraunces italic = fluido para o que toca. Inter Tight = legibilidade técnica. Os 3 cobrem qualquer hierarquia. |
| Botão preto sólido → contorno ouro/escuro fino | Cinzel + preto sólido = pesado demais. Contornos finos deixam a tipografia respirar e dão ar editorial. |
| Hover dourado nos dois botões | Coerência com o site da musicoterapia. Recompensa visual. |
| Tema claro fixo (`color-scheme: light`) | A identidade pede creme. Modo escuro descaracterizaria. |
| Logo do site da musicoterapia NÃO foi usada no hub | A logo carrega "Música Terapêutica e Intuitiva" — fecha uma das duas portas. Hub precisa ser neutro entre as duas potências. PNGs ficam em local (`logo.png`, `LogoBlue.png`) com `.gitignore`. |

---

## 11. Pendências / próximos passos

### Identidade do feed do IG
- [ ] Refazer o post **Kalimba** usando o Template 03 (capa creme + Cinzel + ornamento ouro)
- [ ] Refazer o post **Inspirações** usando o Template 04 (foto + overlay creme + Cinzel)
- [ ] Substituir gradativamente os outros posts pelo sistema de templates
- [ ] Criar o **story de aviso da troca de handle** (do `@brunoluiz.musicoterapia` pro `@obruno.luiz`)

### Conteúdo
- [ ] Alinhar conteúdo programático (tipos de post, frequência)
- [ ] Começar a gravar Reels com a tipografia/paleta unificada

### Site (melhorias possíveis, não urgentes)
- [ ] Adicionar **Vercel Analytics** (saber qual caminho — música ou dev — está convertendo mais)
- [ ] Considerar `vercel.json` com headers de cache mais agressivos pra CSS/JS
- [ ] OG image custom (atualmente o card de compartilhamento usa screenshot automático)

### Decisões em aberto
- [ ] Logo: redesenhar em SVG ou seguir sem logo (BL monograma)
- [ ] Tornar os PNGs `logo.png` e `LogoBlue.png` versionados ou deletar de vez

---

## 12. Histórico resumido das decisões visuais

1. **Início:** botão verde-musgo + Fraunces como display
2. **Refinamento 1:** monograma `─ BL ─`, ornamento `─ ◆ ─` em ouro, textura de grão
3. **Refinamento 2:** Cinzel substitui Fraunces no nome → ar monumental
4. **Refinamento 3:** botão sólido → contornado fino (ouro 2px no primário, escuro 1.5px no secundário); hover preenche dourado
5. **Refinamento 4:** Cinzel também nos labels dos botões → labels encurtados ("VIVER A EXPERIÊNCIA", "CRIAR UM SITE")
6. **Refinamento 5:** animação convertida pra CSS-only (problema do screenshot da Vercel)
7. **Tentativa de logo:** testou logo PNG do Bruno (mix-blend-mode + mask) → revertido pro BL por enquanto
