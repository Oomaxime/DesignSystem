import { useState } from "react";
import Toggle from "../../../components/ui/Toggle";

export default {
  title: "Components/ui/Toggle",
  component: Toggle,
  argTypes: {
    isToggled: {
      control: { type: "boolean" },
      description: "L'état du toggle (activé ou non)",
    },
    onToggle: { action: "toggled" },
  },
};



export const Default = {
  isToggled: false,
};
