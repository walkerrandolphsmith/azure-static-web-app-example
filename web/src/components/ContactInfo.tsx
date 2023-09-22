import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContactInfoProps = {
  icon: IconProp
  info: string
  href?: string
  title?: string
}

const ContactInfo = (props: ContactInfoProps) => (
  <div className="text-blue-1000 break-words flex justify-center text-center md:justify-start md:text-left">
    {props.href ? (
      <a
        className="flex items-center"
        href={props.href}
        rel="noopener"
        target="_blank"
        title={props.title}
      >
        <>
          <div className="text-xs p-4 pl-0">
            <FontAwesomeIcon
              size="sm"
              width={16}
              height={16}
              icon={props.icon}
            />
          </div>
          <p className="">{props.info}</p>
        </>
      </a>
    ) : (
      <div className="flex items-center">
        <div className="text-xs p-4 pl-0">
          <FontAwesomeIcon size="sm" width={16} height={16} icon={props.icon} />
        </div>
        <p className="">{props.info}</p>
      </div>
    )}
  </div>
)

export default ContactInfo
