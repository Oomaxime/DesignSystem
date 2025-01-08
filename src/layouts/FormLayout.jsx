import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.png";

export default function FormLayout() {
  return (
    <main className="min-h-screen grid grid-cols-2">
      <aside className="w-full h-screen flex justify-center items-center">
        <Outlet/>
      </aside>
      <aside className="w-full h-screen p-2">
        <img
          src={img}
          className="w-full h-full object-cover rounded-xl"
        />
      </aside>
    </main>
  )
}
