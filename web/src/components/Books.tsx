import ExportedImage from 'next-image-export-optimizer'

import BookImage from '../../public/book-one-optimized.png'
import ContactForm from './ContactForm'

type ContactFormProps = {
  initialSubmissionMessage: string
}
const Books = (props: ContactFormProps) => (
  <section className="section-card bg-wavegray px-0 md:pt-24 pt-12 pb-0">
    <div className="flex flex-col mx-auto my-0 w-full max-w-7xl">
      <h2
        id="books"
        className="tracking-tight font-semibold mx-4 md:mx-0 text-blue-1000 text-5xl text-center"
      >
        Relive the Memory
      </h2>
      <div className="container px-5 py-24 mx-auto flex flex-col flex-wrap items-center">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <p className="text-zinc-800 text-lg leading-relaxed">
            Pre-order your copy today to explore the enchanting world of{' '}
            <span className="tracking-tight font-semibold mx-4 md:mx-0">
              &quot;Chloe the Mermaid&quot;
            </span>{' '}
            with our captivating collection of books that will keep the magic
            alive long after your unforgettable mermaid experience. Cherish the
            memories you have created with our mermaid performances and dive
            into these remarkable stories, where every turn of the page
            reignites the sparkle of those precious moments.
          </p>
        </div>
        <ExportedImage src={BookImage} alt="Chloe the Mermaid" loading="lazy" />
        <ContactForm
          initialSubmissionMessage={props.initialSubmissionMessage}
        />
      </div>
    </div>
  </section>
)

export default Books
