import React from "react";

const Avatar = ({ name }) => {
  // Fonction pour extraire les initiales
  const getInitials = (fullName) => {
    const names = fullName.trim().split(" ");
    const initials = names.map((n) => n[0]?.toUpperCase()).join("");
    return initials.slice(0, 2); // Limiter à deux lettres
  };

  const initials = getInitials(name);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      {/* Fond circulaire */}
      <circle cx="50" cy="50" r="50" fill="#83CFF6" />
      {/* Texte des initiales */}
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#00000"
        fontSize="40"
        fontFamily="Arial, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
};

export default Avatar;
