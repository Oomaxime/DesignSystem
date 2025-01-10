import PropTypes from "prop-types";

const Text = ({ type = "text-regular", children, className = "" }) => {
  return (
    <span className={`${type} ${className}`}>
      {children}
    </span>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf([
    "main-title",
    "tagline",
    "text-button",
    "text-accent",
    "text-large",
    "text-regular",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;
