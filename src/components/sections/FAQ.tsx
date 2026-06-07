import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteData'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div className="faq-heading">
          <span className="eyebrow">DOMANDE FREQUENTI</span>
          <h2>
            Prima di iniziare,
            <br />
            facciamo chiarezza.
          </h2>
          <p>
            Le risposte alle domande più comuni sul percorso, sulla strategia e
            sull’accesso alla community.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index

            return (
              <article
                className={`faq-item ${isOpen ? 'open' : ''}`}
                key={item.question}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown />
                </button>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
