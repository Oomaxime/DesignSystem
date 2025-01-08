import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.avif";
import imgWebp from "../assets/images/illustre_auth_form.webp";

export default function FormLayout() {
  return (
    <main className="min-h-screen grid grid-cols-2">
      <aside className="w-full h-screen flex justify-center items-center">
        <Outlet/>
      </aside>
      <aside className="w-full h-screen p-2">
        <picture className="w-full h-full">
          <source srcSet={imgWebp} type="image/webp" />
          <source srcSet={img} type="image/avif" />
          <img
            src={img}
            alt="Illustration du formulaire"
            className="w-full h-full object-cover rounded-xl"
          />
        </picture>
      </aside>
    </main>
  )
}
