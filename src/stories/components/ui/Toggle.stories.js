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

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  isToggled: false,
};
