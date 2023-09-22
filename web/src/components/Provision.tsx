type ProvisionProps = {
  title: string
  description: string
  icon: JSX.Element
}

const Provision = (props: ProvisionProps) => (
  <div className="m-2 p-6 w-full sm:w-5/12 md:w-3/12 flex-col flex items-center">
    <div className={`flex items-center text-blue-1000`}>{props.icon}</div>
    <p className="w-full text-center md:text-left text-zinc-900 font-normal text-xl">
      {props.title}
    </p>
    <p className="w-full text-center md:text-left text-zinc-600 leading-relaxed">
      {props.description}
    </p>
  </div>
)
export default Provision
