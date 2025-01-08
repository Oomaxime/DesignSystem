import PropTypes from "prop-types";

const defaultClasses = "w-full input-bg border border-gray-300 rounded-md p-2 ";

function Input({ type = "text", placeholder = "", value = "", onChange }) {
  return (
    <>
      <input
        className={`${defaultClasses}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
