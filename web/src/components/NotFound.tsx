import Head from 'next/head'
import ExportedImage from 'next-image-export-optimizer'

import CallToAction from '@/components/CallToAction'
import Hero from '@/components/Hero'

import NotFoundImage from '../../public/atlantis.png'
import Books from './Books'
import MissionStatement from './MissionStatement'
import Packages from './Packages'
import Provisions from './Provisions'
import Testimonials from './Testimonials'

const NotFound = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <div className="bg-wavegray">
      <Hero>
        <div className="mx-12 md:mx-24 text-white relative text-center">
          <div className="flex items-center flex-col 2xl:justify-center md:flex-row px-0 md:pr-12 lg:pr-12 xl:pr-24 2xl:pr-64 lg:pt-8">
            <ExportedImage src={NotFoundImage} alt="Mermaid" loading="eager" />
            <div className="flex flex-col max-w-2xl order-first md:order-last w-full md:w-1/2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal mb-2 m:mb-4 text-center md:text-left">
                We couldn&apos;t find Atlantis either...
              </p>
              <p className="text-lg font-semibold md:text-xl tracking-normal mb-4 m:mb-8 lg:mb-12 text-center md:text-left">
                Check out our landing page for more information.
              </p>
              <span className="mb-4 flex flex-col md:flex-row items-center lg:justify-start">
                <span>
                  <CallToAction
                    title="Head back to port"
                    href="/"
                    primary
                    hero
                    dataTestId="hero-primary-cta"
                    includePhone={false}
                    includeArrow
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Hero>
      <section
        className="relative bg-wavegray"
        style={{ zIndex: 2, marginTop: '-1px', height: '5px' }}
      ></section>
      <Provisions />
      <Testimonials />
      <MissionStatement />
      <Packages />
      <Books initialSubmissionMessage={''} />
    </div>
  </>
)

export default NotFound
