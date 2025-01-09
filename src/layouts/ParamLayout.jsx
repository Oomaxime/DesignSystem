import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.avif";
import imgWebp from "../assets/images/illustre_auth_form.webp";


export default function MainLayout() {
  return (
    <main className="flex h-screen">
      <aside className="flex flex-col justify-between items-center w-1/5 text-center p-5 w-min-content">
        <div className="w-24 mt-6">
          <picture>
            <source srcSet={imgWebp} type="image/webp" />
            <source srcSet={img} type="image/avif" />
            <img
              src={img}
              alt="Illustration du formulaire"
              className="rounded-full"
            />
          </picture>
          <p className="font-bold h-4">John Doe</p>
          <a href ="" className="underline">Logout</a>
        </div>
      </aside>

      <div className="w-1 bg-black my-10 "></div>
      
      <div className="mt-10">
        <a href="user" className="ml-2 underline">Back</a>
      </div>
      <div className="w-full flex justify-center items-center">
        <Outlet/>
      </div>
      <div>
        <button className="my-10 mr-10">bonsoir</button>
      </div>
    </main>
  )
}
