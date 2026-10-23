# 4. Design: a cara

**Leitura (taste):** site de serviço técnico B2B para síndicos e administradoras, linguagem precisa, segura e calma, inclinando para "editorial técnico" (laudo de engenharia bem diagramado). Botões: variância 6 · movimento 5 · densidade 4.

**Metáfora do negócio:** *a descida pela fachada.* Uma corda laranja desce pela lateral no PC e termina em "0 m · no chão" no contato. Sem jogos nem enfeites: a página é direta, focada em serviço e orçamento.

**Visual (revisão de 23/10, pedido do Gabriel: mais focado e mais moderno; 2ª melhoria no mesmo dia: foto maior no topo, faixa de credenciais NBR/NR-35/corda, números grandes nas etapas, bloco escuro em "Obras e bastidores" e contato em laranja, como chegada ao chão):** topo escuro com brilho laranja e grade sutil, cartões grandes em formato de bento (4 serviços, 4 células), cantos arredondados (20 a 24 px, botões em pílula), cabeçalho de vidro escuro. Seções: topo, serviços, etapas, segurança, Instagram, dúvidas, contato.

| Item | Regra |
|---|---|
| Fundo | concreto `#E4E3DF`; superfície `#EFEEEA`; linhas `#C9C8C3` |
| Texto | grafite `#17181A`; secundário `#55575B` |
| Destaque (único) | laranja da marca `#E2731F` (preenchimento, com texto grafite); laranja escuro `#A8500E` para texto pequeno (contraste AA) |
| Blocos escuros | cabeçalho, topo, segurança e rodapé, em `#1C1D1F` |
| Fontes | Archivo (títulos 600, tracking negativo; corpo 400) + JetBrains Mono (rótulos técnicos curtos, caixa-alta) |
| Tamanhos | título herói 42 px celular / 80 px PC; títulos de seção 32 / 52; corpo 16-17 / 18-20 |
| Cantos | cartões e fotos 20 a 24 px; botões e ícones em pílula/círculo (um sistema só) |
| Botões | principal: laranja + texto grafite + seta; secundário: contorno grafite. Altura mínima 48 px |
| Espaço | lateral 20 px celular / 96 px PC; seções 64 px / 128 px |
| Movimento | título palavra a palavra (TextEffect), revelação ao entrar na tela (InView), corda de rolagem (TracingBeam adaptado). Tudo com `prefers-reduced-motion` |
| Acabamento nativo | barra de rolagem, seleção, foco, `<details>` estilizados; sem `alert/confirm` |
| Mobile primeiro | CSS base é o celular; PC por `min-width` |

Esboço: arquivo Figma `Ötzi Soluções Prediais · Site (esboço)` criado na conta do Gabriel, mas o limite de chamadas do plano Starter acabou antes de desenhar; o esboço foi entregue como imagem (`docs/esboco/`).
