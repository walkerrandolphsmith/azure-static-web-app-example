import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {
  faLocationDot as faLocation,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

import ContactInfo from '@/components/ContactInfo'

import Logo from '../../public/hero-beta.png'
import HeroTitle from './HeroTitle'

const Footer = () => (
  <footer className="text-gray-600 body-font">
    <div className="bg-wavegray bg-footer-wave flex overflow-hidden w-full h-16"></div>
    <div className="container w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 px-12 md:px-24">
      <div className="p-4 flex flex-col">
        <div className="flex items-center mb-4 justify-center md:justify-start">
          <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <ExportedImage
              src={Logo}
              alt="My Mermaid Tales Logo"
              loading="lazy"
              width={64}
              height={64}
            />
          </span>
          <HeroTitle className="text-2xl text-blue-1000" />
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="tracking-tight text-blue-1000 font-bold text-md text-center md:text-left">
          Contact Us
        </h2>
        <ContactInfo
          info="706 530 1012"
          icon={faPhone}
          href="tel:+17065301012"
        />
        <ContactInfo info="Columbus, GA" icon={faLocation} />
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="tracking-tight text-blue-1000 font-bold text-md text-center md:text-left">
          About Us
        </h2>
        <span className="mb-4 mt-4 flex justify-center md:justify-start">
          <Link href="/our-story" title="Our Story">
            Our Story
          </Link>
        </span>
        <span className="mb-4 flex justify-center md:justify-start">
          <Link href="/terms-of-service" title="Terms of Service">
            Terms of Service
          </Link>
        </span>
        <span className="mb-4 flex justify-center md:justify-start">
          <Link href="/cancellation-policy" title="Cancellation Policy">
            Cancellation Policy
          </Link>
        </span>
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="tracking-tight text-blue-1000 font-bold text-md text-center md:text-left">
          Follow Us
        </h2>
        <ContactInfo
          info="Facebook"
          icon={faFacebook}
          href="https://facebook.com/mymermaidtales"
          title="My Mermaid Tales Facebook Page"
        />
      </div>
    </div>
  </footer>
)

export default Footer
