import React from "react";
import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="bg-white p-6 rounded-lg shadow-md space-y-4"
  >
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
