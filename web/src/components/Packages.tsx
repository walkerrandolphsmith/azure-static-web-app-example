import CallToAction from './CallToAction'
import Package from './Package'

const Packages = () => (
  <section className="section-card bg-wavegray px-0 md:pt-24 pt-12 pb-0">
    <div className="flex flex-col mx-auto my-0 w-full max-w-7xl">
      <h2
        id="packages"
        className="tracking-tight font-semibold mx-4 md:mx-0 text-blue-1000 text-5xl text-center"
      >
        Embark On Your Journey
      </h2>
      <div className="text-gray-600 body-font overflow-hidden flex flex-row flex-wrap justify-between">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            <Package
              name="Mermaid Enchantment"
              price={'150'}
              rate="flat"
              services={[
                'Personalized consultation',
                'Mermaid appearance',
                'Photo ops',
              ]}
            />
            <Package
              name="Siren Serenade"
              price={'200'}
              rate="flat"
              highlight
              services={[
                'Personalized consultation',
                'Mermaid appearance',
                'Photo ops',
                'Swimming performances',
              ]}
            />
            <Package
              name="Mystical Mermaid"
              price={'350'}
              rate="flat"
              services={[
                'Personalized consultation',
                'Mermaid appearance',
                'Photo ops',
                'Swimming performances',
                'Story telling',
                'Face painting',
              ]}
            />
          </div>
          <span className="flex items-center justify-center mt-12">
            <CallToAction
              href="tel:+17065301012"
              title="Call Today"
              primary
              dataTestId="schedule-call"
              includePhone
            />
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default Packages
