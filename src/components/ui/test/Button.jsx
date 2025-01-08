import PropTypes from "prop-types";

export default function Button({ children, size = "md" }) {
  // Classes Tailwind conditionnelles pour la taille
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",  // Petites tailles
    md: "px-6 py-3 text-base", // Taille par défaut
    lg: "px-8 py-4 text-lg",   // Grandes tailles
    xl: "px-10 py-5 text-xl",  // Très grandes tailles
  };

  return (
    <button className={`bg-blue-500 text-white rounded ${sizeClasses[size]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};