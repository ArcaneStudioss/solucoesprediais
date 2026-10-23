// Adaptado de 21st.dev · Aceternity "Tracing Beam" (MIT).
// Mesma ideia (useScroll + useSpring desenhando uma linha conforme a rolagem),
// trocada pela metáfora da Ötzi: uma corda presa na lateral, o alpinista descendo
// e a altura caindo até 0 m. Só no PC (lg+); no celular não aparece.
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const ALTURA_PREDIO = 42 // metros, só ilustrativo

export function RopeBeam() {
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 500, damping: 90 })
  const top = useTransform(p, v => `calc(${(v * 100).toFixed(3)}% - ${(v * 28).toFixed(2)}px)`)
  const metros = useTransform(p, v => `${Math.max(0, Math.round(ALTURA_PREDIO * (1 - v)))} m`)

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-6 z-30 hidden w-10 lg:block xl:left-9">
      <div className="absolute inset-y-0 left-[7px] w-[2px] rope-fio" />
      <motion.div className="absolute left-[7px] top-0 w-[2px] origin-top bg-acc" style={{ height: top }} />
      <motion.div className="absolute left-0 flex items-center gap-2" style={{ top }}>
        <span className="block size-4 rounded-full border-2 border-acc bg-concreto" />
        <motion.span className="whitespace-nowrap rounded-[2px] bg-concreto/80 px-1 font-mono text-[11px] tracking-[0.12em] text-tinta-2">{metros}</motion.span>
      </motion.div>
    </div>
  )
}
