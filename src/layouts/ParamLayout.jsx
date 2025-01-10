import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Toggle from "../components/ui/Toggle";
import Avatar from "../components/ui/Avatar";
import Back from "../assets/icons/arrow_back.svg";

export default function MainLayout() {
  const [ isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleChange = (newState) => {
    setIsDarkMode(newState);
    if (newState) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <main className="pl-52 flex flex-col h-screen py-10 md:flex-row">
      <aside className="fixed top-0 left-0 h-full flex flex-col justify-between items-center w-1/10 text-center min-w-52 border-r">
        <Avatar/>
        <div>
          <Link to="/privacy-policy" className="text-black underline hidden md:block">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="text-black underline hidden md:block">
            Terms & Conditions
          </Link>
        </div>
      </aside>

      <div className="w-screen flex flex-col gap-20 items-center">
        <div className="absolute top-4 flex justify-between w-full px-6 md:px-8 md:relative">
          <Link to=".." className="underline">
            <span className="hidden md:block">Back</span>
            <span className="block md:hidden"><img src={Back} className='w-8 h-8 transition-opacity'/></span>
          </Link>
          <Toggle isToggled={isDarkMode} onToggle={handleToggleChange} />
        </div>
        <div className="pt-10 md:pt-0">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
