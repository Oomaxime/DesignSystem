import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, type = "button", onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700"
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
