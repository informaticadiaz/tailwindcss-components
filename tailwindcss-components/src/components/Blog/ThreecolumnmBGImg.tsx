// https://tailwindui.com/components/marketing/sections/blog-sections#component-7c4bcd0e50e14e855d55d20b6cd445d1
export default function ThreecolumnmBGImg() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-3 lg:max-w-none lg:mx-0 sm:mt-20">
          <article className="pt-80 pb-8 px-8 bg-gray-900 rounded-2xl overflow-hidden justify-end flex-col flex isolate relative lg:pt-80 sm:pt-48">
            <img src="./work.webp" alt="" className="w-full h-full object-cover -z-10 inset-0 absolute max-w-full" />
            <div className="bg-gradient-to-t from-gray-900  to-transparent from-0% to-60% -z-10 inset-0 absolute"></div>
            <div className=""></div>
            <div className="text-gray-300 text-sm leading-6 overflow-hidden flex-wrap gap-y-1 items-center flex mt-8">
              <time dateTime="2020-03-16" className="mr-4">
                Mar 16, 2020
              </time>
              <div className="gap-x-4 items-center flex mr-4">
                {/* svg */}
                .
              </div> 
                <div className="flex gap-x-2.5">
                  <img src="./user.webp" alt="" className="w-6 h-6 rounded-full max-w-full flex-none" />
                  Michael Foster
                </div>
              
            </div>
            <h3 className="text-white text-lg leading-6 font-semibold mt-3">
              <a href="">
                <span className="absolute inset-0" />
                Boost your conversion rate
              </a>
            </h3>
          </article>
          <article className="pt-80 pb-8 px-8 bg-gray-900 rounded-2xl overflow-hidden justify-end flex-col flex isolate relative">
            <img src="./work.webp" alt="" className="w-full h-full object-cover -z-10 inset-0 absolute max-w-full" />
            <div className="bg-gradient-to-t from-gray-900  to-transparent from-0% to-60% -z-10 inset-0 absolute"></div>
            <div className=""></div>
            <div className="text-gray-300 text-sm leading-6 overflow-hidden flex-wrap gap-y-1 items-center flex mt-8">
              <time dateTime="2020-03-16" className="mr-4">
                Mar 16, 2020
              </time>
              <div className="gap-x-4 items-center flex mr-4">
                {/* svg */}
                .
              </div> 
                <div className="flex gap-x-2.5">
                  <img src="./user.webp" alt="" className="w-6 h-6 rounded-full max-w-full flex-none" />
                  Michael Foster
                </div>
              
            </div>
            <h3 className="text-white text-lg leading-6 font-semibold mt-3">
              <a href="">
                <span className="absolute inset-0" />
                Boost your conversion rate
              </a>
            </h3>
          </article>
          <article className="pt-80 pb-8 px-8 bg-gray-900 rounded-2xl overflow-hidden justify-end flex-col flex isolate relative">
            <img src="./work.webp" alt="" className="w-full h-full object-cover -z-10 inset-0 absolute max-w-full" />
            <div className="bg-gradient-to-t from-gray-900  to-transparent from-0% to-60% -z-10 inset-0 absolute"></div>
            <div className=""></div>
            <div className="text-gray-300 text-sm leading-6 overflow-hidden flex-wrap gap-y-1 items-center flex mt-8">
              <time dateTime="2020-03-16" className="mr-4">
                Mar 16, 2020
              </time>
              <div className="gap-x-4 items-center flex mr-4">
                {/* svg */}
                .
              </div> 
                <div className="flex gap-x-2.5">
                  <img src="./user.webp" alt="" className="w-6 h-6 rounded-full max-w-full flex-none" />
                  Michael Foster
                </div>
              
            </div>
            <h3 className="text-white text-lg leading-6 font-semibold mt-3">
              <a href="">
                <span className="absolute inset-0" />
                Boost your conversion rate
              </a>
            </h3>
          </article>
        </div>
      </div>
    </div>
  )
}