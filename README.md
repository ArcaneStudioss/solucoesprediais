# Ötzi Soluções Prediais · site

Site da Ötzi (inspeção de fachadas, pintura, hidráulica predial e trabalho em altura). Feito pela Arcane Studios.

- Documentos do projeto (PRD, TRD, fluxo, design, back-end, plano): `docs/`
- Esboço renderizado (celular e PC): `docs/esboco/`

## Rodar
```
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/ com a home pré-renderizada
```

## Peças
- Vite + React + Tailwind 4 + Motion. Componentes de animação da biblioteca 21st.dev em `src/components/ui/` (Text Effect e In View da Motion Primitives, Tracing Beam da Aceternity adaptado como "corda"), todos MIT.
- `scripts/prerender.mjs`: escreve o HTML da home no build (Google e visitante sem JavaScript veem a página inteira).
- Dados do cliente (telefone, área, domínio): `src/content.ts`.
- Páginas de apoio estáticas em `public/` (obrigado, política de privacidade, 404).
- Hospedagem: Vercel (`vercel.json` com cabeçalhos de segurança).
