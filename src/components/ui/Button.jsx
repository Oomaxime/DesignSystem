import PropTypes from "prop-types";

export default function Button({ children, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        active
          ? "bg-cta-primary-default hover:bg-cta-primary-hover"
          : "bg-cta-primary-inactive"
      } btn-primary`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
