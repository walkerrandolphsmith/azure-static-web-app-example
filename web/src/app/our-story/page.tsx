import ExportedImage from 'next-image-export-optimizer'

import Hero from '@/components/Hero'

import FamilyImage from '../../../public/family.png'

const Page = () => (
  <div className="bg-wavegray mt-20 md:mt-0">
    <Hero>
      <div className="mx-12 md:mx-24 text-white relative text-center">
        <div className="flex items-center flex-col 2xl:justify-center md:flex-row px-0 md:pr-24 lg:pr-24 xl:pr-32 2xl:pr-64 lg:pt-8">
          <ExportedImage
            src={FamilyImage}
            alt="Mermaid"
            loading="eager"
            className="self-end animate-reveal"
          />
          <div className="flex flex-col max-w-2xl order-first md:order-last w-full md:w-1/2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal mb-2 m:mb-4 text-center md:text-left">
              Family owned, community focused, small business.
            </p>
            <p className="text-lg font-semibold md:text-xl tracking-normal mb-4 m:mb-8 lg:mb-12 text-center md:text-left">
              Creating community one magical moment at a time.
            </p>
          </div>
        </div>
      </div>
    </Hero>
    <section className="section-card bg-wavegray mt-20">
      <div className="container px-5 py-24 mx-auto flex items-center flex-col">
        <h1 className="mb-16 font-semibold mx-4 md:mx-0 text-blue-1000 text-5xl text-left">
          Our Story
        </h1>
        <p className="text-zinc-800 leading-relaxed text-2xl mx-4 md:mx-0 max-w-2xl">
          My Mermaid Tales was born out of our daughter&apos;s pure joy of
          creating magic for children in our close-knit community by pretending
          to be a mermaid. We have invested in our daughters excitement and as a
          family come together to give life to this passion. As a locally owned
          business, our roots run deep within the community we serve. We believe
          in the power of fostering strong connections with our customers, and
          treating them like an extended family. Our mission to ignite the spark
          of imagination and inspire dreams to take flight is not just a
          business goal; it is a personal mission that reflects our deep-rooted
          values.
        </p>
      </div>
    </section>
  </div>
)

export default Page
