import { Outlet } from "react-router-dom"
import img from "../assets/images/bg.avif";
import imgWebp from "../assets/images/bg.webp";

export default function FormLayout() {
  return (
    <main className="flex flex-col-reverse md:flex-row md:min-w-screen">
      <aside className="flex justify-center items-center py-12 md:p-24 md:h-screen md:pt-32 md:justify-normal md:block">
        <Outlet/>
      </aside>
      <aside className="h-3/10 md:w-1/2 md:h-screen flex-grow">
        <picture className="w-full h-full">
          <source srcSet={img} type="image/avif" />
          <source srcSet={imgWebp} type="image/webp" />
          <img
            src={img}
            className="w-full max-h-80 object-cover md:p-0 md:h-full md:max-h-full md:rounded-none"
          />
        </picture>
      </aside>
    </main>
  )
}