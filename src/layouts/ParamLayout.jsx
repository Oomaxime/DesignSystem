import { Outlet } from "react-router-dom";
import imgWebp from "../assets/images/bg.webp";
import img from "../assets/images/bg.avif";
import { useState } from "react";
import Toggle from "../components/ui/Toggle";

export default function MainLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleChange = (newState) => {
    setIsDarkMode(newState);
    if (newState) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <main className="flex h-screen py-10">
      <aside className="flex flex-col justify-between items-center w-1/10 text-center min-w-52">
        <div className="w-24">
          <picture>
            <source srcSet={img} type="image/avif" />
            <source srcSet={imgWebp} type="image/webp" />
            <img
              src={img}
              alt="Illustration du formulaire"
              className="rounded-full w-[96px] h-[96px] object-cover"
            />
          </picture>
          <p className="font-bold py-2">John Doe</p>
          <a href="" className="underline">
            Logout
          </a>
        </div>
        <div>
          <p className="underline">
            Privacy Policy <br /> Terms & Conditions
          </p>
        </div>
      </aside>

      <div className="w-px bg-black"></div>

      <div className="w-screen flex flex-col gap-20 items-center">
        <div className="flex justify-between w-full px-8">
          <a href="../" className="underline">
            Back
          </a>
          <Toggle isToggled={isDarkMode} onToggle={handleToggleChange} />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
