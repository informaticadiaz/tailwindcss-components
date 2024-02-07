import Tailwind from "../../assets/tailwind.svg"
// import Github from "../../assets/github.svg"
// import Instagram from "../../assets/instagram.svg"
// import Facebook from "../assets/facebook.svg"
// import Youtube from "../../assets/youtube.svg"
// import X from "../../assets/x.svg"
import X from "./X"
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import Github from "./GitHub"
import Youtube from "./Youtube"


export default function Footer() {

  return (
    <>
      <div className="bg-slate-800 text-slate-300 p-10">
        <div className="flex flex-col lg:flex-row">
          <div className="mr-10">
            <div>
              <img className="w-10 mb-8" src={Tailwind} />
            </div>
            <div>
              <p className="mb-8">Making the world a better place through constructing elegant hierarchies.</p>
              {/* titulo footer */}
            </div>
            <div className="flex gap-6 mb-10 [&>img]:w-8">
              {/* redes sociales */}
              <a href="">
                <Facebook />
              </a>
              <a href="https://instagram.com">
                <Instagram />
              </a>
              <a href="">
                <X />
              </a>
              <a href="https://github.com">
                <Github />
              </a>
              <a href="https://youtube.com">
                <Youtube />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-[80%]  mr-8">
            <ul className="space-y-4 basis-2/4 lg:basis-1/4 mt-8">
              <li className="font-bold mb-6">Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
            </ul>
            <ul className="space-y-4 basis-2/4 lg:basis-1/4 mt-8">
              <li className="font-bold mb-6">Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
            </ul>
            <ul className="space-y-4 basis-2/4 lg:basis-1/4 mt-8">
              <li className="font-bold mb-6">Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
            </ul>
            <ul className="space-y-4 basis-2/4	lg:basis-1/4 mt-8">
              <li className="font-bold mb-6">Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
              <li>Hola Mundo</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 my-10 w-90"></div>
        <div>
          <p className=" text-gray-400 text-sm">@ Copyright © 2022 - All right reserved by Hola Mundo</p>
        </div>
      </div>
    </>
  )
}