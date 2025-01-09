import PropTypes from "prop-types";

const Text = ({ type, weight, children }) => {
  const classNames = `${type} ${weight}`;

  return (
    <p className={classNames}>
      {children}
    </p>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "body", "label"]).isRequired,
  weight: PropTypes.oneOf(["bold", "regular", "thin"]),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  weight: "regular",
};

export default Text;
