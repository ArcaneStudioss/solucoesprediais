# 5. Back-end: onde ficam os dados

Não há banco nem formulário que grave dados. O contato vai direto para o WhatsApp do cliente.

| Dado | Onde fica | Quem vê |
|---|---|---|
| Textos, fotos, código | Repositório `ArcaneStudioss/solucoesprediais` (GitHub) + espelho semanal criptografado | Arcane |
| Estatística de visita | GA4 da conta do cliente (Gabriel como editor), só após "Aceitar" | Cliente e Arcane |
| Preferência de cookies | `localStorage` do visitante | Só o visitante |
| Conversa de orçamento | WhatsApp do cliente | Cliente |
