import { useEffect } from "react";
import PropTypes from "prop-types";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";

export default function Toggle({ isToggled, onToggle }) {
  // Gestion du clic pour inverser l'état
  const handleToggle = () => onToggle(!isToggled);

  // Ajouter ou retirer la classe "dark" sur le body
  useEffect(() => {
    document.body.classList.toggle("dark", isToggled);
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
                alt="Mode Clair"
                className={`w-6 h-6 transition-opacity duration-1000 ${
                  isToggled ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div
              className="absolute w-6 h-6 rounded-full transition-transform duration-300 transform flex items-center justify-center"
              style={{
                transform: isToggled ? "translateX(0)" : "translateX(24px)",
                backgroundColor: isToggled ? "var(--toggle-pin-bg)" : "var(--toggle-bg)",
                boxShadow: "var(--toggle-shadow)",
              }}
            ></div>
            <div className="flex items-center justify-center w-6 h-6">
              <img
                src={moonIcon}
                alt="Mode Sombre"
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
}

Toggle.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
