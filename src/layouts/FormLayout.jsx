import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.png";

export default function FormLayout() {
  return (
    <main className="flex flex-col-reverse md:min-h-screen md:grid md:grid-cols-2">
      <aside className="flex justify-center items-center md:h-screen md:w-full p-6">
        <Outlet/>
      </aside>
      <aside className="h-3/10 md:w-full md:h-screen md:p-6">
        <img
          src={img}
          className="w-full max-h-40 rounded-xl object-cover md:h-full md:max-h-full"
        />
      </aside>
    </main>
  )
}