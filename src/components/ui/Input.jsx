import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Text from "./Text";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import Icon from "./Icon";
import warning from "../../assets/icons/warning.svg";

const defaultClasses = "input text-regular";

export default function Input({
  label = "",
  id = "input",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  error = false,
  errorMessage = "",
  validate,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState(error);
  const [localErrorMessage, setLocalErrorMessage] = useState(errorMessage);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (validate) {
      const { isValid, message } = validate(value);
      setLocalError(!isValid);
      setLocalErrorMessage(message);
    } else {
      setLocalError(error);
      setLocalErrorMessage(errorMessage);
    }
  }, [value, validate, error, errorMessage]);

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
          className={`${defaultClasses} ${
            localError ? "border-[2px] border-error" : ""
          }`}
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {type === "password" && value && (
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
      {localError && (
        <div className="flex items-center gap-1">
          <Icon className="text-error" size="sm" color="error">
            <img src={warning} alt="warning" />
          </Icon>
          <Text type="error" className="text-error">
            {localErrorMessage}
          </Text>
        </div>
      )}
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
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  validate: PropTypes.func,
};
