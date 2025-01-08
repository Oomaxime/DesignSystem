import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.avif";
import imgWebp from "../assets/images/illustre_auth_form.webp";

export default function FormLayout() {
  return (
    <main className="flex flex-col-reverse md:min-h-screen md:grid md:grid-cols-2">
      <aside className="flex justify-center items-center md:h-screen md:w-full p-6">
        <Outlet/>
      </aside>
      <aside className="h-3/10 md:w-full md:h-screen">
        <picture className="w-full h-full">
          <source srcSet={imgWebp} type="image/webp" />
          <source srcSet={img} type="image/avif" />
          <img
            src={img}
            alt="Illustration du formulaire"
            className="w-full max-h-40 rounded-xl p-2 object-cover md:p-0 md:h-full md:max-h-full md:rounded-none"
          />
        </picture>
      </aside>
    </main>
  )
}