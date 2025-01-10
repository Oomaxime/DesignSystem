import PropTypes from "prop-types";
import { useState } from "react";
import Text from "./Text";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const defaultClasses = "input text-regular";

export default function Input({
  label = "",
  id = "input",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id}>
          <Text type="text-button">{label}</Text>
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          className={`${defaultClasses}`}
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
