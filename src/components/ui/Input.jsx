import PropTypes from "prop-types";
import Text from "./Text";

const defaultClasses = "input";

export default function Input({ label = "", id = "input", type = "text", placeholder = "", value = "", onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id}>
          <Text type="text-button">{label}</Text>
        </label>
      )}
      <input
        id={id}
        className={`${defaultClasses}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
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
