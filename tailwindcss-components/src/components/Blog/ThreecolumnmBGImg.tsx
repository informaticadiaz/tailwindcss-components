export default function ThreecolumnmBGImg() {
  return (
    <div className="py-24 bg-white sm:py-32">      
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute inset-0">
                  From the blog
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                  Learn how to grow your business with expert advice
                  </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8">
                  <article className="pt-80 pb-8 px-8 bg-gray-900 rounded-2xl overflow-hidden justify-end flex-col flex isolate relative ">
                      <img src="./work.webp" alt="" className="w-full h-full object-cover -z-10 " />
                      <div className="bg-gradient-to-t from-blue-900 to-transparent-z-10 inset-0 absolute">
                          
                      </div>
                  </article>
              </div>
          </div>
    </div>
  )
}