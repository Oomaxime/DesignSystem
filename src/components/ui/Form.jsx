import PropTypes from "prop-types";

const defaultClasses = "form";

export default function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className={defaultClasses}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
