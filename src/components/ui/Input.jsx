import PropTypes from "prop-types";

const defaultClasses = "input";

export default function Input({ type = "text", placeholder = "", value = "", onChange }) {
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