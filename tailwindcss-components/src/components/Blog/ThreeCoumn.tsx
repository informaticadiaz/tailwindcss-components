{
  /* 
direccion del componente a clonar
https://tailwindui.com/components/marketing/sections/blog-sections#component-69c177c9d4921026ce3ddd0c3f6846b0 
nombre del componente rhree column with images
*/
}

export default function ThreeCoumn() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 lg:max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-gray-900 tracking-tight font-bold text-3xl sm:text-4xl">From the blog</h2>
          <p className="text-gray-600 leading-8 text-lg mt-2">Learn how to grow your business with expert advice</p>
        </div>
        {/* div grid */}
        <div className="grid gap-y-20 gap-x-8 grid-cols-1 max-w-2xl mt-16 mx-auto lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {/* article flex */}
          <article className="flex justify-between items-start flex-col">
            {/* Contenedor */}
            <div className="w-full relative">
              {/* img rounded */}
              <img src="./work.webp" alt="" className="object-cover rounded-2xl w-full aspect-[16/9] max-w-full h-auto" />
            </div>
            {/* conenedor */}
            <div className="max-w-xl">
              {/* flex - data link */}
              <div className="text-xs gap-x-4 items-center flex mt-8 ">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a href="#" className="text-gray-600 font-medium px-3">
                  Marketing
                </a>
              </div>
              <div className="relative">
                {/* titulo y parrafo */}
                <h3 className="text-gray-900 font-semibold leading-6 text-lg mt-3">
                  <a href="#">
                    <span className=""></span>Boost your conversion rate
                  </a>
                </h3>
                {/* parrafo */}
                <p className="mt-5 text-gray-600 text-sm">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </div>
            </div>
            {/* flex -container */}
            <div className="flex items-center relative mt-8 gap-x-4">
              {/* photo profile */}
              <img src="./user.webp" alt="" className="rounded-full w-10 h-10  "/>
              <div className="text-sm leading-6">
                <p className="text-gray-900 font-semibold ">
                  <a href="#">
                    <span></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600">Co-Founder / CTO</p>
              </div>
            </div>
          </article>
          <article className="flex justify-between items-start flex-col">
            {/* Contenedor */}
            <div className="w-full relative">
              {/* img rounded */}
              <img src="./work.webp" alt="" className="object-cover rounded-2xl w-full aspect-[16/9] max-w-full h-auto" />
            </div>
            {/* conenedor */}
            <div className="max-w-xl">
              {/* flex - data link */}
              <div className="text-xs gap-x-4 items-center flex mt-8 ">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a href="#" className="text-gray-600 font-medium px-3">
                  Marketing
                </a>
              </div>
              <div className="relative">
                {/* titulo y parrafo */}
                <h3 className="text-gray-900 font-semibold leading-6 text-lg mt-3">
                  <a href="#">
                    <span className=""></span>Boost your conversion rate
                  </a>
                </h3>
                {/* parrafo */}
                <p className="mt-5 text-gray-600 text-sm">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </div>
            </div>
            {/* flex -container */}
            <div className="flex items-center relative mt-8 gap-x-4">
              {/* photo profile */}
              <img src="./user.webp" alt="" className="rounded-full w-10 h-10  "/>
              <div className="text-sm leading-6">
                <p className="text-gray-900 font-semibold ">
                  <a href="#">
                    <span></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600">Co-Founder / CTO</p>
              </div>
            </div>
          </article>
          <article className="flex justify-between items-start flex-col">
            {/* Contenedor */}
            <div className="w-full relative">
              {/* img rounded */}
              <img src="./work.webp" alt="" className="object-cover rounded-2xl w-full aspect-[16/9] max-w-full h-auto" />
            </div>
            {/* conenedor */}
            <div className="max-w-xl">
              {/* flex - data link */}
              <div className="text-xs gap-x-4 items-center flex mt-8 ">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a href="#" className="text-gray-600 font-medium px-3">
                  Marketing
                </a>
              </div>
              <div className="relative">
                {/* titulo y parrafo */}
                <h3 className="text-gray-900 font-semibold leading-6 text-lg mt-3">
                  <a href="#">
                    <span className=""></span>Boost your conversion rate
                  </a>
                </h3>
                {/* parrafo */}
                <p className="mt-5 text-gray-600 text-sm">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </div>
            </div>
            {/* flex -container */}
            <div className="flex items-center relative mt-8 gap-x-4">
              {/* photo profile */}
              <img src="./user.webp" alt="" className="rounded-full w-10 h-10  "/>
              <div className="text-sm leading-6">
                <p className="text-gray-900 font-semibold ">
                  <a href="#">
                    <span></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600">Co-Founder / CTO</p>
              </div>
            </div>
          </article>
        </div>
        
      </div>
    </div>
  );
}
