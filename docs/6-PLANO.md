# 6. Plano: ordem de construção

1. Base Vite + React + Tailwind + Motion, tokens de cor/tipo, CSS mobile primeiro. **Teste:** `npm run build` sem erro.
2. Componentes do 21st em `src/components/ui/` (TextEffect, InView, Marquee, corda). **Teste:** abrir com movimento reduzido e ver tudo parado e visível.
3. Seções na ordem: menu, herói, faixa, percussão, serviços, processo, segurança, trabalhos, dúvidas, contato, rodapé, CTA fixo. **Teste:** captura 390 px e 1440 px a cada bloco.
4. Pré-renderização + páginas de apoio (obrigado, política, 404), robots, sitemap, og-image, JSON-LD. **Teste:** página legível com JS desligado.
5. QA: `checar-20-itens.sh dist`, `auditar-codigo.sh .`, grep de caixas nativas, contraste, zero tracinho longo.
6. Commit + push. Deploy na Vercel (Gabriel importa o repositório) + `auditar-site.sh URL`. Backup semanal configurado e restauração testada.
