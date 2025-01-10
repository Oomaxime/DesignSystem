import { useState } from "react";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-8 cursor-pointer">
        <label className="relative inline-flex cursor-pointer" htmlFor="theme-toggle">
          <input
            id="theme-toggle"
            type="checkbox"
            className="sr-only peer"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div className="w-14 h-8 bg-gray-800 rounded-full peer-checked:bg-blue-400 transition-colors duration-300 flex items-center justify-between px-1">
            <div className="flex items-center justify-center w-6 h-6">
              <img
                src={sunIcon}
                alt="Sun Icon"
                className={`w-6 h-6 transition-opacity duration-1000 ${
                  isToggled ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div
              className={`absolute w-6 h-6 bg-blue-200 rounded-full transition-transform duration-300 transform flex items-center justify-center ${
                isToggled ? "translate-x-0 bg-gray-800" : "translate-x-6"
              }`}
            >
            </div>
            <div className=" flex items-center justify-center w-6 h-6">
              <img
                src={moonIcon}
                alt="Moon Icon"
                className={`w-4 h-4 transition-opacity ${
                  isToggled ? "opacity-100" : "opacity-0"
                }`}
              />
              </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;