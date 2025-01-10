import PropTypes from "prop-types";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";

const sizeClasses = {
  sm: "w-4 h-4", // 16px
  md: "w-6 h-6", // 24px
  lg: "w-8 h-8", // 32px
};

const defaultClasses = "inline-flex";

function Icon({ size = "md", color = "font-default", children }) {
  return (
    <span
      className={`${defaultClasses} ${sizeClasses[size]} text-${color}`}
    >
      {children || <TfiLayoutWidthDefaultAlt />}
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Icon;
