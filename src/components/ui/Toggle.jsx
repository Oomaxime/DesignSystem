import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <label
          className="relative inline-flex"
          htmlFor="theme-toggle"
        >
          <input
            id="theme-toggle"
            type="checkbox"
            className="sr-only peer"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div className="w-14 h-8 bg-gray-800 rounded-full peer-checked:bg-blue-400 transition-colors duration-300 flex items-center">
            <div className={`absolute w-6 h-6 bg-blue-200 rounded-full transition-transform duration-300 transform 
              ${ isToggled ? "translate-x-7 bg-gray-800" : "translate-x-1"}`}
            ></div>
          </div>
        </label>

        <div className="text-2xl">
          {isToggled ? "🌙" : "☀️"}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
