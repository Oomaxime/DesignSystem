import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange, size, variant }) => {
  const baseStyle = "rounded-lg border p-2 focus:outline-none focus:ring-2";
  const sizeStyle = {
    small: "text-sm p-2",
    medium: "text-base p-3",
    large: "text-lg p-4",
  };
  const variantStyle = {
    primary: "border-gray-300 focus:ring-blue-500",
    danger: "border-red-300 focus:ring-red-500",
    success: "border-green-300 focus:ring-green-500",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "danger", "success"]),
};

Input.defaultProps = {
  type: "text",
  placeholder: "Enter text...",
  size: "medium",
  variant: "primary",
};

export default Input;
