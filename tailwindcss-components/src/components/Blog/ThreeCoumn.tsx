{
  /* 
direccion del componente a clonar
https://tailwindui.com/components/marketing/sections/blog-sections#component-69c177c9d4921026ce3ddd0c3f6846b0 
nombre del componente rhree column with images
*/
}

export default function ThreeCoumn() {
  return (
    <div className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-gray-900 tracking-tight font-bold text-3xl">From the blog</h2>
          <p className="text-gray-600 leading-8 text-lg mt-2">Learn how to grow your business with expert advice</p>
        </div>
        {/* div grid */}
        <div className="">
          {/* article flex */}
          <article className="">
            {/* Contenedor */}
            <div className="">
              {/* img rounded */}
              <img src="./work.webp" alt="" className="" />
            </div>
            {/* conenedor */}
            <div>
              {/* flex - data link */}
              <div className="">
                <time dateTime="2020-03-16" className="">
                  Mar 16, 2020
                </time>
                <a href="#" className="ab eg ads aio are arp awd axr bib">
                  Marketing
                </a>
              </div>
              <div className="">
                <h3 className="lf avy awf awo axu brl">
                  <a href="#">
                    <span className="aa ak"></span>Boost your conversion rate
                  </a>
                </h3>
              </div>
              {/* titulo y parrafo */}
              <div>
                <h3>
                  <a href="">
                    <span></span>
                    "Boost your conversion rate"
                  </a>
                </h3>
                <p>
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </div>
            {/* flex -container */}
            <div>
              {/* photo profile */}
              <img src="" alt="" />
              <div>
                <p>
                  <a href="#">
                    <span></span>
                    Michael Foster
                  </a>
                </p>
                <p>Co-Founder / CTO</p>
              </div>
            </div>
          </article>
          <article></article>
          <article></article>
        </div>
      </div>
    </div>
  );
}
