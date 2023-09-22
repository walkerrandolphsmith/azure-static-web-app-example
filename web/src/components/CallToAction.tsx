import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CallToActionProps = {
  title: string
  href: string
  primary?: boolean
  hero?: boolean
  dataTestId: string
  includePhone?: boolean
  includeArrow?: boolean
}
const CallToAction = (props: CallToActionProps) => (
  <div
    className={`group flex min-w-max ${
      props.hero ? 'justify-start' : 'justify-center'
    }`}
  >
    <a
      className={`${
        props.primary
          ? 'text-white bg-blue-1000 border-blue-1000'
          : props.hero
          ? 'text-white bg-transparent border-transparent'
          : 'text-blue-1000 bg-transparent border-blue-1000'
      } ${
        props.hero ? 'py-2 px-4 pr-6' : 'py-1 px-3'
      } flex items-center cta font-medium text-base transition-opacity transition-colors inline-block border outline-0 hover:opacity-70 rounded-2xl`}
      data-test={props.dataTestId}
      href={props.href}
    >
      {props.includePhone && (
        <span className="mr-2 ml-1">
          <FontAwesomeIcon size="sm" width={16} height={16} icon={faPhone} />
        </span>
      )}
      <span className="text-lg">{props.title}</span>
      {props.includeArrow && (
        <svg
          className="arrow ml-1 relative inline fill-none stroke-2 top-px stroke-current"
          style={{ marginTop: '-2px' }}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <g fillRule="evenodd">
            <path
              className="arrow-line transition-opacity ease-in-out opacity-0 group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="arrow-tip transition-transform ease-in-out transform translate-x-0 group-hover:translate-x-3px"
              d="M1 1l4 4-4 4"
            ></path>
          </g>
        </svg>
      )}
    </a>
  </div>
)

export default CallToAction
