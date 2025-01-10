import { useEffect } from "react";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";

const Toggle = ({ isToggled, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isToggled]);

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
          <div
            className="w-14 h-8 rounded-full transition-colors duration-300 flex items-center justify-between px-1"
            style={{
              backgroundColor: isToggled
                ? "var(--cta-primary-bg-hover)"
                : "var(--cta-primary-bg-default)",
            }}
          >
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
              className={`absolute w-6 h-6 rounded-full transition-transform duration-300 transform flex items-center justify-center`}
              style={{
                transform: isToggled ? "translateX(0)" : "translateX(24px)",
                backgroundColor: "var(--toggle-pin-bg)",
                boxShadow: "var(--toggle-shadow)",
              }}
            ></div>
            <div className="flex items-center justify-center w-6 h-6">
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
