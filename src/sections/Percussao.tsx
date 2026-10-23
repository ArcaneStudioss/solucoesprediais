import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowCounterClockwise, SpeakerHigh, SpeakerSlash, MapTrifold } from '@phosphor-icons/react'
import { InView } from '@/components/ui/in-view'
import { revelar } from '@/sections/motion'

const COLS = 7
const ROWS = 8
const TOTAL = COLS * ROWS
// Placas "descoladas" desta simulação: um bolsão perto do canto e uma faixa vertical
const CAVAS = new Set([11, 12, 18, 19, 20, 26, 36, 43, 44])
const tom = (i: number) => {
  const v = ((i * 9301 + 49297) % 233280) / 233280
  const l = 92 + Math.round(v * 4)
  return `hsl(48 6% ${l}%)`
}

type Estado = 'cheio' | 'cavo' | undefined

let ctx: AudioContext | null = null
function bater(cavo: boolean) {
  try {
    ctx = ctx || new (window.AudioContext || (window as any).webkitAudioContext)()
    const t = ctx.currentTime
    const g = ctx.createGain()
    g.connect(ctx.destination)
    const o = ctx.createOscillator()
    o.type = 'sine'
    o.frequency.setValueAtTime(cavo ? 190 : 1100, t)
    o.frequency.exponentialRampToValueAtTime(cavo ? 120 : 700, t + (cavo ? 0.28 : 0.05))
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(cavo ? 0.5 : 0.35, t + 0.004)
    g.gain.exponentialRampToValueAtTime(0.0001, t + (cavo ? 0.32 : 0.07))
    o.connect(g)
    o.start(t)
    o.stop(t + 0.35)
    // estalo do martelo
    const n = ctx.createBuffer(1, ctx.sampleRate * 0.03, ctx.sampleRate)
    const d = n.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 3
    const s = ctx.createBufferSource()
    s.buffer = n
    const f = ctx.createBiquadFilter()
    f.type = 'bandpass'
    f.frequency.value = cavo ? 700 : 2600
    const gn = ctx.createGain()
    gn.gain.value = 0.25
    s.connect(f).connect(gn).connect(ctx.destination)
    s.start(t)
  } catch {
    /* sem áudio no navegador: segue só o visual */
  }
}

export function Percussao() {
  const [estado, setEstado] = useState<Estado[]>(() => Array(TOTAL).fill(undefined))
  const [som, setSom] = useState(true)
  const [foco, setFoco] = useState(0)
  const [batida, setBatida] = useState<{ i: number; k: number } | null>(null)
  const [aviso, setAviso] = useState('')
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const testadas = estado.filter(Boolean).length
  const achadas = estado.filter(e => e === 'cavo').length

  function testar(i: number) {
    const cavo = CAVAS.has(i)
    if (som) bater(cavo)
    setEstado(prev => {
      const n = [...prev]
      n[i] = cavo ? 'cavo' : 'cheio'
      return n
    })
    setBatida(b => ({ i, k: (b?.k ?? 0) + 1 }))
    const r = Math.floor(i / COLS) + 1
    const c = (i % COLS) + 1
    setAviso(`Linha ${r}, placa ${c}: ${cavo ? 'som cavo, revestimento descolado' : 'som cheio, placa firme'}.`)
  }

  function mover(e: React.KeyboardEvent, i: number) {
    const passo: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: COLS, ArrowUp: -COLS }
    if (!(e.key in passo)) return
    e.preventDefault()
    const j = Math.min(TOTAL - 1, Math.max(0, i + passo[e.key]))
    setFoco(j)
    refs.current[j]?.focus()
  }

  function mapaCompleto() {
    setEstado(Array.from({ length: TOTAL }, (_, i) => (CAVAS.has(i) ? 'cavo' : 'cheio')))
    setAviso(`Mapa completo: ${CAVAS.size} placas com som cavo em ${TOTAL}.`)
  }

  function recomecar() {
    setEstado(Array(TOTAL).fill(undefined))
    setAviso('Fachada limpa. Pode testar de novo.')
  }

  return (
    <section id="percussao" aria-labelledby="percussao-titulo" className="py-16 md:py-24 lg:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <InView variants={revelar} viewOptions={{ once: true, margin: '0px 0px -15% 0px' }}>
            <p className="rotulo text-acc-tinta">Teste de percussão · NBR 13.755</p>
            <h2 id="percussao-titulo" className="mt-4 text-[34px] leading-[1.02] md:text-5xl lg:text-[52px]">
              A gente bate em cada placa e escuta.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-tinta-2 lg:text-lg">
              O som cavo denuncia o revestimento que descolou, antes que ele caia na calçada. Toque nas placas da fachada e veja como nasce o mapa que entregamos ao síndico.
            </p>
            <dl className="mt-8 grid max-w-sm grid-cols-2 border-y border-junta">
              <div className="py-4 pr-4">
                <dt className="rotulo text-tinta-2">Testadas</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums">{testadas}<span className="text-base font-normal text-tinta-2"> / {TOTAL}</span></dd>
              </div>
              <div className="border-l border-junta py-4 pl-4">
                <dt className="rotulo text-tinta-2">Som cavo</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums text-acc-tinta">{achadas}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <button type="button" onClick={mapaCompleto} className="inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-junta decoration-2 underline-offset-4 hover:decoration-acc">
                <MapTrifold size={18} weight="bold" aria-hidden /> Ver o mapa completo
              </button>
              <button type="button" onClick={recomecar} className="inline-flex min-h-11 items-center gap-2 text-tinta-2 hover:text-tinta">
                <ArrowCounterClockwise size={18} aria-hidden /> Recomeçar
              </button>
              <button type="button" onClick={() => setSom(s => !s)} aria-pressed={som} className="inline-flex min-h-11 items-center gap-2 text-tinta-2 hover:text-tinta">
                {som ? <SpeakerHigh size={18} aria-hidden /> : <SpeakerSlash size={18} aria-hidden />} Som {som ? 'ligado' : 'desligado'}
              </button>
            </div>
          </InView>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[4px] bg-junta p-2 md:p-3">
            <div role="group" aria-label="Fachada de demonstração: toque nas placas para testar" className="grid grid-cols-7 gap-1 md:gap-1.5">
              {estado.map((e, i) => (
                <button
                  key={i}
                  ref={el => { refs.current[i] = el }}
                  type="button"
                  tabIndex={i === foco ? 0 : -1}
                  onFocus={() => setFoco(i)}
                  onKeyDown={ev => mover(ev, i)}
                  onClick={() => testar(i)}
                  data-estado={e}
                  aria-label={`Placa linha ${Math.floor(i / COLS) + 1}, coluna ${(i % COLS) + 1}${e ? (e === 'cavo' ? ', som cavo' : ', som cheio') : ''}`}
                  className="placa"
                  style={{ ['--tom' as string]: tom(i) }}
                >
                  <AnimatePresence>
                    {batida?.i === i && (
                      <motion.span
                        key={batida.k}
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[2px] border-2 border-tinta"
                        initial={{ opacity: 0.7, scale: 0.6 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-5 text-xs text-tinta-2">
              <span className="inline-flex items-center gap-2"><i className="block size-3.5 rounded-[2px] border border-junta bg-[#f7f6f2]" />Som cheio</span>
              <span className="inline-flex items-center gap-2"><i className="block size-3.5 rounded-[2px] bg-acc" />Som cavo</span>
            </div>
            <p className="text-xs text-tinta-2">Simulação para entender o teste.</p>
          </div>
          <p aria-live="polite" className="sr-only">{aviso}</p>
        </div>
      </div>
    </section>
  )
}
