import HeroTitle from './HeroTitle'

type HeroProps = {
  children: JSX.Element
}

const HeroWaveOne = () => (
  <svg
    className="w-full h-full max-w-full"
    style={{ borderRadius: '0px 0px 64px 64px' }}
    viewBox="0 0 1440 1079"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M530.091 -1058.1C1889.89 -1035.12 3426.27 156.887 2095.29 1173.09C764.301 2189.29 469.998 1344.67 968.839 648.883C1467.68 -46.9004 487.295 433.424 -195.969 474.058C-879.233 514.691 -829.705 -1081.08 530.091 -1058.1Z"
      fill="url(#paint0_linear_2741_19029)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2741_19029"
        x1="1447.5"
        y1="-4.5"
        x2="425.847"
        y2="638.59"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4102F5" />
        <stop offset="1" stopColor="#0069FF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const HeroWaveTwo = () => (
  <svg
    className="w-full h-full max-w-full"
    style={{ borderRadius: '0px 0px 64px 64px' }}
    viewBox="0 0 1440 1079"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1671 896C1236 -218.5 864.5 1685 445.426 511.189C305.166 34.6456 56.3794 842.967 58.5434 315.886C60.7074 -211.195 -364.285 -55.4503 -352.091 185.162C-318.388 850.289 345.516 1835.79 940.2 2042.82C1639.18 2286.16 2086.58 1848.53 1880 1356L1671 896Z"
      fill="url(#paint0_linear_2741_19030)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2741_19030"
        x1="4.49987"
        y1="1085"
        x2="219.5"
        y2="306.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#33CFC8" />
        <stop offset="1" stopColor="#33CFC8" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const Hero = (props: HeroProps) => (
  <div
    className="hero relative pt-20 "
    style={{
      backgroundColor: 'rgb(0, 105, 255)',
      borderRadius: '0px 0px 64px 64px',
    }}
  >
    <div className="h-full w-full absolute right-0 top-0">
      <HeroWaveOne />
    </div>
    <div className="h-full w-full absolute left-0 bottom-0">
      <HeroWaveTwo />
    </div>
    {props.children}
  </div>
)

export { HeroTitle, HeroWaveOne, HeroWaveTwo }
export default Hero
