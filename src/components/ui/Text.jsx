import PropTypes from "prop-types";

const defaultClasses = "";

const typeClasses = {
  h1: "text-2xl",
  h2: "text-xl",
  h3: "text-lg",
  h4: "text-base",
  h5: "text-sm",
  h6: "text-xs",
};

export default function Text({ children, type }) {
  return (
    <span
      className={`${defaultClasses} ${typeClasses[type]}`}
    >
      {children}
    </span>
  );
}