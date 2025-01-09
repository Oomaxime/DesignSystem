import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.avif";
import imgWebp from "../assets/images/illustre_auth_form.webp";


export default function MainLayout() {
  return (
    <main className="flex h-screen">
      <aside className="flex flex-col justify-between items-center w-1/5 text-center p-5 w-min-content">
          <div className="w-24 mt-10">
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
            <a href ="../auth/login" className="underline">Logout</a>
            <p className="underline mt-5">Help</p>
          </div>
        <div>
          <p className="underline">Privacy Policy Terms & Conditions</p>
        </div>
      </aside>

      <div className="w-1 bg-black my-10 h-4/5 "></div>
      
      <div className="w-3/5 mt-10">
        <a href="user" className="ml-2 underline">Back</a>
        <div className="ml-5 mt-14 w-/5">
          <Outlet/>
        </div>
      </div>
      
      <div className="flex flex-col w-1/5 pt-20 items-center">
        <p className="font-bold">Notification</p>
        <div className="h-1 bg-black w-4/5"></div>
        <p className="text-red-500 my-2">None</p>
      </div>
    </main>
  )
}
