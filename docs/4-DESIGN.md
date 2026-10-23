# 4. Design: a cara

**Leitura (taste):** site de serviço técnico B2B para síndicos e administradoras, linguagem precisa, segura e calma, inclinando para "editorial técnico" (laudo de engenharia bem diagramado). Botões: variância 6 · movimento 5 · densidade 4.

**Metáfora do negócio:** *a descida pela fachada.* Uma corda laranja desce pela página (no PC, presa à lateral, com o alpinista descendo e a altura em metros caindo até 0 m enquanto se rola) e a seção-chave é uma fachada de placas onde o visitante faz o teste de percussão. Nada de fundo escuro com vídeo (receita repetida dos sites anteriores): aqui é **claro, cor de concreto**.

| Item | Regra |
|---|---|
| Fundo | concreto `#E4E3DF`; superfície `#EFEEEA`; linhas `#C9C8C3` |
| Texto | grafite `#17181A`; secundário `#55575B` |
| Destaque (único) | laranja da marca `#E2731F` (preenchimento, com texto grafite); laranja escuro `#A8500E` para texto pequeno (contraste AA) |
| Bloco escuro | só a faixa de segurança e o rodapé, em `#1C1D1F` |
| Fontes | Archivo (títulos 600, tracking negativo; corpo 400) + JetBrains Mono (rótulos técnicos curtos, caixa-alta) |
| Tamanhos | título herói 42 px celular / 80 px PC; títulos de seção 32 / 52; corpo 16-17 / 18-20 |
| Cantos | 4 px em tudo (um sistema só) |
| Botões | principal: laranja + texto grafite + seta; secundário: contorno grafite. Altura mínima 48 px |
| Espaço | lateral 20 px celular / 96 px PC; seções 64 px / 128 px |
| Movimento | título palavra a palavra (TextEffect), revelação ao entrar na tela (InView), uma faixa corrida (Marquee), corda de rolagem (TracingBeam adaptado), placas com "toque". Tudo com `prefers-reduced-motion` |
| Acabamento nativo | barra de rolagem, seleção, foco, `<details>` estilizados; sem `alert/confirm` |
| Mobile primeiro | CSS base é o celular; PC por `min-width` |

Esboço: arquivo Figma `Ötzi Soluções Prediais · Site (esboço)` criado na conta do Gabriel, mas o limite de chamadas do plano Starter acabou antes de desenhar; o esboço foi entregue como imagem (`docs/esboco/`).
