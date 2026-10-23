import { MotionConfig, motion } from 'motion/react'
import { ArrowUpRight, WhatsappLogo, Phone, InstagramLogo, Plus, CheckCircle, MagnifyingGlass, PaintRoller, Drop, HardHat } from '@phosphor-icons/react'
import { TextEffect } from '@/components/ui/text-effect'
import { InView } from '@/components/ui/in-view'
import { RopeBeam } from '@/components/ui/rope-beam'
import { revelar, emCascata, vista, EASE } from '@/sections/motion'
import { whats, TELEFONE, TEL_LINK, INSTAGRAM, AREA } from '@/content'

const SERVICOS = [
  {
    Icone: MagnifyingGlass,
    tag: 'NBR 13.755',
    nome: 'Inspeção de fachadas',
    texto: 'Teste de percussão placa por placa, mapa das áreas com som cavo e relatório com fotos para levar à assembleia.',
    msg: 'Olá! Vim pelo site e quero orçar uma inspeção de fachada (teste de percussão).',
  },
  {
    Icone: PaintRoller,
    tag: 'Acesso por corda',
    nome: 'Pintura de fachadas',
    texto: 'Proteção contra intempéries e acabamento profissional, sem andaime ocupando a calçada e a garagem.',
    msg: 'Olá! Vim pelo site e quero orçar a pintura da fachada do prédio.',
  },
  {
    Icone: Drop,
    tag: 'Água e bombas',
    nome: 'Hidráulica predial',
    texto: 'Correção de vazamentos, limpeza de caixas d’água, manutenção de bombas e adequação de redes prediais.',
    msg: 'Olá! Vim pelo site e preciso de um serviço de hidráulica predial.',
  },
  {
    Icone: HardHat,
    tag: 'NR‑35',
    nome: 'Trabalho em altura',
    texto: 'Equipe treinada e segura para os serviços onde o andaime não chega ou não compensa.',
    msg: 'Olá! Vim pelo site e preciso de um serviço em altura no prédio.',
  },
]

const CREDENCIAIS = [
  ['NBR 13.755', 'Inspeção de fachada com teste de percussão'],
  ['NR‑35', 'Equipe treinada para trabalho em altura'],
  ['Acesso por corda', 'Sem andaime na calçada nem na garagem'],
]

const PASSOS = [
  ['Visita técnica', 'Olhamos o prédio, conversamos com o síndico e entendemos a urgência de cada ponto.'],
  ['Diagnóstico e proposta', 'Você recebe o que encontramos, com fotos, e um orçamento por escrito.'],
  ['Execução segura', 'Área isolada, moradores avisados e equipe NR‑35 em cada descida.'],
  ['Entrega', 'Relatório final com o antes e o depois e orientação de manutenção.'],
]

const DUVIDAS = [
  ['De quanto em quanto tempo a fachada precisa de inspeção?', 'Depende da idade do prédio, do tipo de revestimento e das regras da sua cidade. Na visita técnica indicamos o intervalo certo para o seu caso e o que a norma pede.'],
  ['O teste de percussão atrapalha os moradores?', 'Muito pouco. O trabalho é feito por acesso por corda, sem andaime. Isolamos só a área embaixo de quem está descendo e avisamos os moradores antes.'],
  ['Precisa montar andaime?', 'Na maioria dos serviços, não. O acesso por corda é mais rápido de montar, não ocupa calçada nem garagem e costuma sair mais em conta.'],
  ['O que eu recebo depois da inspeção?', 'Um relatório com fotos e o mapa das placas com som cavo, mostrando o que precisa de reparo agora e o que pode ser acompanhado.'],
  ['Como funciona o orçamento?', 'Mande fotos e o endereço do prédio pelo WhatsApp. Marcamos a visita técnica e enviamos a proposta por escrito, sem compromisso.'],
]

function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-noite/95 text-placa backdrop-blur-xl">
      <div className="wrap flex h-[68px] items-center justify-between lg:h-[76px]">
        <a href="/" className="flex items-center gap-3" aria-label="Ötzi Soluções Prediais, início">
          <img src="/img/otzi-logo-light-sm.png" alt="" width="40" height="44" className="h-10 w-auto lg:h-12" />
          <span className="hidden text-[15px] font-semibold leading-tight tracking-tight sm:block">
            Ötzi<br /><span className="font-normal text-noite-txt">Soluções Prediais</span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-9 text-[15px] font-medium lg:flex">
          <a href="#servicos" className="text-noite-txt transition-colors hover:text-placa">Serviços</a>
          <a href="#processo" className="text-noite-txt transition-colors hover:text-placa">Como trabalhamos</a>
          <a href="#seguranca" className="text-noite-txt transition-colors hover:text-placa">Segurança</a>
          <a href="#duvidas" className="text-noite-txt transition-colors hover:text-placa">Dúvidas</a>
        </nav>
        <a href={whats()} className="btn btn-acc !min-h-11 !px-5 text-[15px] max-md:hidden" target="_blank" rel="noopener">
          Pedir orçamento <ArrowUpRight size={18} weight="bold" aria-hidden />
        </a>
      </div>
    </header>
  )
}

function Heroi() {
  return (
    <section className="relative overflow-hidden bg-noite text-placa">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-[-10%] size-[620px] rounded-full bg-acc/25 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_30%_20%,#000,transparent_70%)]" />
      <div className="wrap relative flex flex-col lg:min-h-[calc(100dvh-76px)]">
      <div className="grid flex-1 gap-10 pb-12 pt-10 md:pt-14 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
        <div className="lg:col-span-6">
          <TextEffect
            as="h1"
            per="word"
            preset="fade-in-blur"
            speedReveal={1.1}
            className="text-[44px] leading-[0.98] [font-stretch:104%] sm:text-6xl lg:text-[68px] xl:text-[84px]"
          >
            Fachadas seguras, do topo ao chão.
          </TextEffect>
          <InView variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.7, ease: EASE } } }}>
            <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-noite-txt lg:mt-8 lg:text-xl">
              Inspeção, pintura e manutenção predial com acesso por corda e equipe NR‑35.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
              <a href={whats()} target="_blank" rel="noopener" className="btn btn-acc sm:min-w-[300px]">
                Pedir orçamento no WhatsApp <WhatsappLogo size={22} weight="fill" aria-hidden />
              </a>
              <a href="#servicos" className="btn btn-vidro">
                Ver serviços <ArrowUpRight size={18} weight="bold" aria-hidden className="rotate-90" />
              </a>
            </div>
          </InView>
        </div>
        <motion.figure
          className="relative lg:col-span-6 lg:justify-self-end lg:w-[min(100%,540px)]"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <img
            src="/img/alpinista-teste-percussao-fachada.webp"
            srcSet="/img/alpinista-teste-percussao-fachada-400.webp 400w, /img/alpinista-teste-percussao-fachada.webp 570w"
            sizes="(min-width: 1024px) 540px, 100vw"
            width="570"
            height="712"
            alt="Profissional da Ötzi pendurado por cordas na fachada de um prédio, fazendo teste de percussão no revestimento"
            className="aspect-[4/5] w-full rounded-[28px] object-cover object-[50%_35%] ring-1 ring-white/15 lg:max-h-[calc(100dvh-300px)]"
            {...{ fetchpriority: 'high' }}
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-noite/75 px-4 py-2 text-[13px] font-medium backdrop-blur-md">
            NBR 13.755 · teste de percussão
          </figcaption>
        </motion.figure>
      </div>
      <InView variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.9, duration: 0.8 } } }}>
        <dl className="grid border-t border-white/10 sm:grid-cols-3">
          {CREDENCIAIS.map(([t, d], i) => (
            <div key={t} className={`py-4 sm:py-6 ${i > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0 sm:pl-8' : ''}`}>
              <dt className="text-xl font-semibold tracking-tight text-placa lg:text-2xl">{t}</dt>
              <dd className="mt-1 text-[15px] leading-snug text-noite-txt">{d}</dd>
            </div>
          ))}
        </dl>
      </InView>
      </div>
    </section>
  )
}

function Servicos() {
  const span = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="py-16 md:py-24 lg:py-32">
      <div className="wrap">
        <InView variants={revelar} viewOptions={vista}>
          <h2 id="servicos-titulo" className="max-w-[16ch] text-[34px] leading-[1.02] md:text-5xl lg:text-[56px]">
            O que fazemos pelo seu prédio
          </h2>
        </InView>
        <InView variants={emCascata} viewOptions={vista}>
          <ul className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-12 lg:gap-5">
            {SERVICOS.map(({ Icone, tag, nome, texto, msg }, i) => (
              <motion.li key={nome} variants={revelar} className={span[i]}>
                <a
                  href={whats(msg)} target="_blank" rel="noopener"
                  className={`group relative flex h-full min-h-[260px] flex-col justify-between gap-10 overflow-hidden rounded-[20px] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${i === 0 ? 'bg-noite text-placa' : i === 3 ? 'bg-acc text-tinta' : 'bg-placa text-tinta'}`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`grid size-12 place-items-center rounded-full ${i === 0 ? 'bg-acc text-tinta' : i === 3 ? 'bg-tinta text-placa' : 'bg-concreto text-tinta'}`}>
                      <Icone size={24} weight="duotone" aria-hidden />
                    </span>
                    <span className="rotulo opacity-70">{tag}</span>
                  </div>
                  <div>
                    <h3 className="text-[28px] leading-tight [font-stretch:108%] lg:text-[34px]">{nome}</h3>
                    <p className={`mt-3 max-w-[44ch] leading-relaxed ${i === 0 ? 'text-noite-txt' : i === 3 ? 'text-tinta/80' : 'text-tinta-2'}`}>{texto}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold">
                      Pedir orçamento
                      <ArrowUpRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </span>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </InView>
      </div>
    </section>
  )
}

function Processo() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="py-16 md:py-24 lg:py-32">
      <div className="wrap">
        <InView variants={revelar} viewOptions={vista}>
          <h2 id="processo-titulo" className="max-w-[18ch] text-[34px] leading-[1.02] md:text-5xl lg:text-[52px]">
            Do primeiro contato à entrega da fachada
          </h2>
        </InView>
        <InView variants={emCascata} viewOptions={vista}>
          <div className="relative mt-10 lg:mt-16">
            <motion.span
              aria-hidden
              className="absolute left-0 top-0 hidden h-[2px] w-full origin-left bg-acc lg:block"
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.2, ease: EASE } } }}
            />
            <motion.span
              aria-hidden
              className="absolute left-0 top-0 h-full w-[2px] origin-top bg-acc lg:hidden"
              variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 1.2, ease: EASE } } }}
            />
            <ol className="grid lg:grid-cols-4 lg:gap-8">
            {PASSOS.map(([t, d], i) => (
              <motion.li key={t} variants={revelar} className="relative pb-9 pl-7 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-9">
                <span aria-hidden className="absolute -left-[7px] top-1 block size-4 rounded-full border-2 border-acc bg-concreto lg:-top-[7px] lg:left-0" />
                <p aria-hidden className="text-[56px] font-semibold leading-none tracking-tighter text-acc [font-stretch:110%] lg:text-[72px]">{i + 1}</p>
                <h3 className="mt-3 text-2xl leading-tight"><span className="sr-only">Etapa {i + 1}: </span>{t}</h3>
                <p className="mt-3 max-w-[34ch] leading-relaxed text-tinta-2">{d}</p>
              </motion.li>
            ))}
            </ol>
          </div>
        </InView>
      </div>
    </section>
  )
}

function Seguranca() {
  const itens = ['Dupla ancoragem em toda descida', 'Equipamentos inspecionados antes de cada serviço', 'Equipe treinada conforme a NR‑35']
  return (
    <section id="seguranca" aria-labelledby="seguranca-titulo" className="bg-noite py-16 text-placa md:py-24 lg:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
        <InView variants={revelar} viewOptions={vista}>
          <div className="lg:max-w-[560px]">
            <h2 id="seguranca-titulo" className="text-[34px] leading-[1.02] md:text-5xl lg:text-[56px]">
              Lá em cima, segurança não é detalhe.
            </h2>
            <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-noite-txt lg:text-lg">
              Seu prédio continua funcionando enquanto a gente trabalha. Cada descida é planejada antes, com a área de baixo isolada.
            </p>
            <ul className="mt-8 border-t border-noite-2">
              {itens.map(t => (
                <li key={t} className="flex items-center gap-3 border-b border-noite-2 py-4 text-[17px]">
                  <CheckCircle size={22} weight="fill" className="flex-none text-acc" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
        </InView>
        </div>
        <div className="lg:col-span-5">
        <InView variants={revelar} viewOptions={vista}>
          <figure className="lg:ml-auto lg:max-w-[460px]">
            <img
              src="/img/equipamento-ancoragem-detalhe.webp"
              width="420"
              height="560"
              loading="lazy"
              alt="Detalhe do equipamento de ancoragem e das cordas presos ao cinto do profissional durante o trabalho na fachada"
              className="aspect-[4/5] w-full rounded-[24px] object-cover"
            />
            <figcaption className="rotulo mt-3 text-[11px] text-noite-txt">Equipamento de ancoragem em uso</figcaption>
          </figure>
        </InView>
        </div>
      </div>
    </section>
  )
}

function Trabalhos() {
  return (
    <section id="trabalhos" aria-labelledby="trabalhos-titulo" className="py-16 md:py-24">
      <div className="wrap">
        <InView variants={revelar} viewOptions={vista}>
          <div className="relative isolate grid gap-6 overflow-hidden rounded-[28px] bg-noite p-7 text-placa md:p-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-32 -z-10 size-[420px] rounded-full bg-acc/25 blur-[110px]" />
            <h2 id="trabalhos-titulo" className="text-[30px] leading-tight lg:col-span-5 lg:text-[44px]">Obras e bastidores</h2>
            <p className="leading-relaxed text-noite-txt lg:col-span-4">
              Cada fachada conta uma história. Acompanhe as descidas, os testes e as entregas no nosso Instagram.
            </p>
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="btn btn-vidro lg:col-span-3">
              Ver no Instagram <InstagramLogo size={20} aria-hidden />
            </a>
          </div>
        </InView>
      </div>
    </section>
  )
}

function Duvidas() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="pb-16 pt-4 md:pb-24 lg:pb-32">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="duvidas-titulo" className="text-[34px] leading-[1.02] md:text-5xl lg:sticky lg:top-28 lg:text-[52px]">
            Perguntas que síndicos fazem
          </h2>
        </div>
        <div className="border-t border-junta lg:col-span-8">
          {DUVIDAS.map(([q, r]) => (
            <details key={q} className="faq group border-b border-junta">
              <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-[17px] font-medium lg:text-[19px]">
                {q}
                <Plus size={22} className="mais flex-none text-acc-tinta" aria-hidden />
              </summary>
              <p className="max-w-[62ch] pb-6 leading-relaxed text-tinta-2">{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative overflow-hidden bg-acc py-16 text-tinta md:py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-[14%] hidden w-40 lg:block">
        <motion.span
          className="absolute left-1/2 top-0 block h-[calc(100%-96px)] w-[2px] origin-top bg-tinta"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <span className="absolute bottom-[88px] left-1/2 block size-4 -translate-x-1/2 rounded-full border-2 border-tinta bg-acc" />
        <span className="absolute bottom-[80px] left-0 right-0 block h-px bg-tinta" />
        <span className="rotulo absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap normal-case text-tinta">0 m · no chão</span>
      </div>
      <div className="wrap relative">
        <InView variants={revelar} viewOptions={vista}>
          <h2 id="contato-titulo" className="max-w-[13ch] text-[44px] leading-[0.98] [font-stretch:108%] md:text-6xl lg:text-[92px]">
            Vamos olhar a sua fachada?
          </h2>
          <p className="promessa mt-6 max-w-[42ch] text-lg leading-relaxed text-tinta/80 lg:text-xl" data-resposta>
            Mande uma foto do prédio pelo WhatsApp. Respondemos no mesmo dia útil com os próximos passos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
            <a href={whats()} target="_blank" rel="noopener" className="btn btn-escuro sm:min-w-[280px]">
              Chamar no WhatsApp <WhatsappLogo size={22} weight="fill" aria-hidden />
            </a>
            <a href={TEL_LINK} className="btn btn-linha !border-tinta/70">
              Ligar {TELEFONE} <Phone size={20} aria-hidden />
            </a>
          </div>
          <p className="rotulo mt-10 text-tinta/80" data-sem-mapa>Atendemos {AREA}</p>
        </InView>
      </div>
    </section>
  )
}

function Rodape() {
  return (
    <footer className="bg-noite py-10 text-noite-txt">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/img/otzi-logo-light-sm.png" alt="Ötzi Soluções Prediais" width="44" height="48" loading="lazy" className="h-12 w-auto" />
          <p className="text-sm leading-relaxed">
            Ötzi Soluções Prediais<br />Manutenção predial e trabalho em altura · {AREA}
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-placa">Instagram</a>
          <a href={TEL_LINK} className="hover:text-placa">{TELEFONE}</a>
          <a href="/politica-de-privacidade/" className="hover:text-placa">Política de privacidade</a>
          <span>© <span data-ano>2026</span></span>
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-3 focus:text-placa">
        Pular para o conteúdo
      </a>
      <RopeBeam />
      <Cabecalho />
      <main id="conteudo">
        <Heroi />
                <Servicos />
        <Processo />
        <Seguranca />
        <Trabalhos />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
      <a href={whats()} target="_blank" rel="noopener" className="cta-fixo" aria-label="Pedir orçamento no WhatsApp">
        <WhatsappLogo size={30} weight="fill" aria-hidden />
      </a>
    </MotionConfig>
  )
}
