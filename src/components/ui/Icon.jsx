import PropTypes from "prop-types";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";


const defaultClasses = "inline-flex w-4 h-4";

function Icon({ color = "font-default", children }) {
  return (
    <span
      className={`${defaultClasses} text-${color}`}
    >
      {children || <TfiLayoutWidthDefaultAlt />}
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Icon;
