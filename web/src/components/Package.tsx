type PackageProps = {
  name: string
  price: string
  services: string[]
  rate: 'flat' | 'hr'
  highlight?: boolean
}

const Package = (props: PackageProps) => (
  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div
      className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden ${
        props.highlight ? 'shadow-lg' : ''
      }`}
    >
      <h3 className="text-sm tracking-widest title-font mb-1 font-medium text-xl">
        {props.name}
      </h3>
      <h4 className="text-5xl text-zinc-900 leading-none flex items-center pb-4 mb-4 border-b border-zinc-200">
        <span>${props.price}</span>
        {props.rate === 'hr' && (
          <span className="text-lg ml-1 font-normal text-zinc-500">/hr</span>
        )}
      </h4>
      {props.services.map(service => (
        <p key={service} className="flex items-center text-zinc-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {service}
        </p>
      ))}
    </div>
  </div>
)

export default Package
