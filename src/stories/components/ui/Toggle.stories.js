import React, { useState } from "react";
import Toggle from "../../../components/ui/Toggle"; // Ajuste le chemin si nécessaire

export default {
  title: "Components/ui/Toggle", // Titre dans la barre latérale de Storybook
  component: Toggle,
  argTypes: {
    isToggled: {
      control: { type: "boolean" },
      description: "L'état du toggle (activé ou non)",
    },
    onToggle: { action: "toggled" },
  },
};

const Template = (args) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (newState) => {
    setIsToggled(newState); // Met à jour l'état du toggle
  };

  return <Toggle {...args} isToggled={isToggled} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  isToggled: false, // Valeur initiale du toggle (désactivé)
};
