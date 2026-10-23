// Dados do cliente num lugar só. Trocar aqui quando o cliente confirmar.
export const SITE_URL = 'https://solucoesprediais.vercel.app' // [CONFIRMAR] domínio definitivo
export const TELEFONE = '(48) 99165-3526'
export const TEL_LINK = 'tel:+5548991653526'
export const INSTAGRAM = 'https://www.instagram.com/otzisolucoes/'
export const AREA = 'Florianópolis e região' // [CONFIRMAR] Instagram cita Novo Hamburgo

export const whats = (msg = 'Olá! Vim pelo site e gostaria de um orçamento para o meu prédio.') =>
  `https://wa.me/5548991653526?text=${encodeURIComponent(msg)}`
