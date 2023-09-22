import { Lobster_Two as Lobster } from 'next/font/google'
import Link from 'next/link'

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
})

type LogoProps = {
  className: string
}

const HeroTitle = (props: LogoProps) => (
  <h1
    className={`${lobster.variable} font-sans font-semibold cursor-pointer ${props.className}`}
  >
    <Link href="/" title="home">
      My Mermaid Tales
    </Link>
  </h1>
)

export default HeroTitle
