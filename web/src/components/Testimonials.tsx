const Testimonials = () => (
  <section
    className="relative bg-wavegray"
    style={{ zIndex: 2, marginTop: '-1px' }}
  >
    <div className="bg-top-wave h-16 flex overflow-hidden w-full bg-wavegray"></div>
    <div className="bg-wave flex flex-col justify-center mx-auto w-full py-16">
      <h2
        id="testimonials"
        className="tracking-tight font-semibold mx-4 md:mx-0 text-blue-1000 text-5xl text-center"
      >
        Past Adventures
      </h2>
      <div className="text-gray-600 body-font">
        <div className="container px-5 pt-12 pb-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Mermaid Tales truly made our little one&apos;s birthday party an
              enchanting experience beyond our wildest dreams! From the moment
              the mermaid arrived, our backyard was transformed into an
              underwater fairytale. We can&apos;t thank Mermaid Tales enough for
              making our child&apos;s birthday party an extraordinary event that
              will be cherished for a lifetime. The professionalism, attention
              to detail, and genuine passion displayed by the entire Mermaid
              Tales team were truly remarkable. We highly recommend them to
              anyone seeking to create magical, unforgettable memories for their
              little ones!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-blue-1000 mt-8 mb-6"></span>
            <p className="text-gray-900 font-medium title-font tracking-wider text-xl">
              Jones Family
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-bottom-wave h-16 flex overflow-hidden w-full bg-wavegray"></div>
  </section>
)

export default Testimonials
