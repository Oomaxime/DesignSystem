import PropTypes from "prop-types";

const sizeClasses = {
  sm: "w-4 h-4", // 16px
  md: "w-6 h-6", // 24px
  lg: "w-8 h-8", // 32px
};

const defaultClasses = "inline-flex";

function Input({ size = "md", type = "text", placeholder = "", value = "", }) {
  return (
    <>
      <input
        className={`${defaultClasses} ${sizeClasses[size]}`}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

Input.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
