import type { Variants } from 'motion/react'

export const EASE = [0.2, 0.8, 0.2, 1] as const

// Revelação padrão ao entrar na tela (InView do 21st): sobe 24 px e aparece.
export const revelar: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const emCascata: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export const vista = { once: true, margin: '0px 0px -12% 0px' } as const
