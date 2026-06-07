import { ChartCandlestick, ShieldCheck, Users, Brain } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const benefits = [
  {
    icon: ChartCandlestick,
    title: 'Strategia Meccanica',
    text: "Impara la stessa strategia ed i modelli d'ingresso meccanici che utiliziamo ogni giorno per strutturare i nostri ingressi. Abbandona dubbi e domande quando sei a grafico tramite un semplice set di regole che ti accompagnerà tutte le volte che sei a grafico.",
  },
  {
    icon: ShieldCheck,
    title: 'Corso Step-By-Step',
    text: "Un Corso completo di oltre 30h+ che ti guiderà passo passo fino a comprendere pienamente la strategia ed i modelli d'ingresso che utilizziamo tra video teorici, video pratici, slide ed esempi a mercato live.",
  },
  {
    icon: Brain,
    title: 'Accesso Analisi Live',
    text: "Ottieni accesso alle mie analisi personali in tempo reale per apprendere al meglio la strategia su esempi a mercato reale in modo da iniziare a guadagnare mentre stai imparando.",
  },
  {
    icon: Users,
    title: 'Community & Supporto',
    text: "Ottieni accesso alla community dovrei potrai confrontarti con altri studenti e trader esperti che utilizzano la strategia e ricevere supporto per qualsiasi tipo di dubbio e domanda.",
  },

]

export default function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionTitle
          eyebrow="Perchè Eclipse"
          title="un sistema completo  e strutturato per farti ottenere dei risultati"
          // subtitle="Everything is designed to give you structure, clarity and a repeatable process."
        />

        <div className="benefits-grid">
          {benefits.map((item) => {
            const Icon = item.icon

            return (
              <article className="benefit-card" key={item.title}>
                <Icon size={32} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}