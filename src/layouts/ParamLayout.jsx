import { Outlet, Link } from "react-router-dom";
import imgWebp from "../assets/images/bg.webp";
import img from "../assets/images/bg.avif";
import { useState } from "react";
import Toggle from "../components/ui/Toggle";
import Text from "../components/ui/Text";

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
    <main className="flex flex-col h-screen px-5 py-10 md:px-0 md:flex-row ">
      <aside className="flex flex-col justify-between items-center text-center min-w-52 w-1/10 ">
        <div className="flex items-center w-full flex-col gap-0">
          <picture>
            <source srcSet={img} type="image/avif" />
            <source srcSet={imgWebp} type="image/webp" />
            <img
              src={img}
              alt="Illustration du formulaire"
              className="rounded-full w-[96px] h-[96px] object-cover"
            />
          </picture>
          <p className="py-3">
            <Text type="text-accent" className="font-bold py-2">
              John Doe
            </Text>
          </p>
          <Link to="/logout" className="underline">
            Logout
          </Link>
        </div>
        <div className="w-min md:w-auto">
          <Link to="/privacy-policy" className="hidden underline block md:block">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="hidden underline block md:block">
            Terms & Conditions
          </Link>
        </div>
      </aside>

      <div className="my-4 bg-black w-px h-auto"></div>

      <div className="w-screen flex flex-col items-center">
        <div className="fixed top-4 md:flex justify-between w-full px-10">
          <Link to=".." className="underline hidden md:block">
            Back
          </Link>
          <Toggle isToggled={isDarkMode} onToggle={handleToggleChange} />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
