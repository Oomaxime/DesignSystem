import { Outlet } from "react-router-dom"
import img from "../assets/images/bg.avif";
import Toggle from "../components/ui/Toggle";


export default function MainLayout() {
  return (
    <main className="flex h-screen py-10">
      <aside className="flex flex-col justify-between items-center w-1/10 text-center min-w-52">
        <div className="w-24">
          <picture>
            <source srcSet={img} type="image/avif" />
            <img
              src={img}
              alt="Illustration du formulaire"
              className="rounded-full w-[96px] h-[96px] object-cover"
            />
          </picture>
          <p className="font-bold py-2">John Doe</p>
          <a href ="" className="underline">Logout</a>
        </div>
        <div>
          <p className="underline">Privacy Policy <br/> Terms & Conditions</p>
        </div>
      </aside>

      <div className="w-px bg-black"></div>

      <div className="w-screen flex flex-col gap-20 items-center">
        <div className="flex justify-between w-full px-8">
          <a href="../" className="underline">Back</a>
          <Toggle/>
        </div>
        <Outlet/>
      </div>

    </main>
  )
}
