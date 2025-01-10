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

const Template = (args) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (newState) => {
    setIsToggled(newState);
  };

  return <Toggle {...args} isToggled={isToggled} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  isToggled: false,
};
