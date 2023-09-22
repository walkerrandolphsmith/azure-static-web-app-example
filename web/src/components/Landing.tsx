import ExportedImage from 'next-image-export-optimizer'

import HeroImage from '../../public/hero-beta.png'
import Books from './Books'
import CallToAction from './CallToAction'
import Hero from './Hero'
import MissionStatement from './MissionStatement'
import Packages from './Packages'
import Particle from './Particle'
import Provisions from './Provisions'
import Testimonials from './Testimonials'

type LandingProps = {
  initialSubmissionMessage: string
}

function Landing(props: LandingProps) {
  return (
    <div className="bg-wavegray mt-20">
      <Particle />
      <Hero>
        <div className="mx-12 md:mx-24 text-white relative text-center">
          <div className="flex items-center flex-col 2xl:justify-center md:flex-row px-0 md:pr-12 lg:pr-12 xl:pr-24 2xl:pr-64 lg:pt-8">
            <ExportedImage
              src={HeroImage}
              alt="Mermaid"
              loading="eager"
              className="self-end animate-reveal"
            />
            <div className="flex flex-col max-w-2xl order-first md:order-last w-full md:w-1/2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal mb-2 m:mb-4 text-center md:text-left">
                Enchanting <span className="">mermaid entertainment</span> for
                kids parties.
              </p>
              <p className="text-lg font-semibold md:text-xl tracking-normal mb-4 m:mb-8 lg:mb-12 text-center md:text-left">
                Dive into a world of wonder and make a splash at your next
                event.
              </p>
              <span className="mb-4 flex flex-col md:flex-row items-center lg:justify-start">
                <span>
                  <CallToAction
                    title="Call Today"
                    href="tel:+17065301012"
                    primary
                    hero
                    dataTestId="hero-primary-cta"
                    includePhone
                  />
                </span>
                <span className="mt-2 md:mt-0 md:ml-2">
                  <CallToAction
                    title="Pre-Order Book"
                    href="/#books"
                    hero
                    dataTestId="hero-secondary-cta"
                    includeArrow
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Hero>
      <Provisions />
      <Testimonials />
      <MissionStatement />
      <Packages />
      <Books initialSubmissionMessage={props.initialSubmissionMessage} />
    </div>
  )
}
export default Landing
