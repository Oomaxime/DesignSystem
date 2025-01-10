import Toggle from "../../../components/ui/Toggle";
import { useState } from "react";

export default {
  title: "Components/ui/Toggle",
  component: Toggle,
  argTypes: {
    isToggled: {
      control: { type: "boolean" },
      description: "State of the toggle (true or false).",
    },
    onToggle: { action: "toggled" },
  },
};

const Template = (args) => {
  const [isToggled, setIsToggled] = useState(args.isToggled);

  return (
    <Toggle
      {...args}
      isToggled={isToggled}
      onToggle={() => {
        setIsToggled(!isToggled);
        args.onToggle();
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isToggled: false,
};
