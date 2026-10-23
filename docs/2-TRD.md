# 2. TRD: com que peças

| Peça | Escolha | Por quê (uma frase) |
|---|---|---|
| Front | Vite + React + Tailwind 4 + Motion | Os componentes de animação do 21st.dev são React/Motion; o Vite gera site estático leve. |
| Animações | Componentes da biblioteca 21st.dev (TextEffect e InView da Motion Primitives, Marquee da Magic UI, TracingBeam da Aceternity adaptado como "corda") | Pedido do Gabriel; código aberto (MIT), copiado para `src/components/ui/`. |
| HTML pronto | Pré-renderização no build (`scripts/prerender.mjs`) | Google e quem está sem JavaScript recebem a página inteira. |
| Banco / login / pagamento | Nenhum | Site de apresentação; contato vai para o WhatsApp. |
| Hospedagem | Vercel Pro (cliente básico, sem backend) | Regra da base: site estático de cliente na Vercel; o plano grátis não vale para cliente. |
| Domínio / DNS | Registro.br em nome do cliente, DNS na Cloudflare | Padrão Arcane. |
| Analytics | GA4 com consentimento (`arcane-analytics.js`) | Item 19; desligado até colar o ID. |
| Backup | Repositório GitHub + espelho semanal criptografado (`backup-repo.js`) | Site estático: o código é o dado. |
| Segurança | Cabeçalhos no `vercel.json` (CSP, nosniff, frame), auditoria `auditar-codigo.sh` e `auditar-site.sh` | `playbooks/seguranca.md`. |
