import Toggle from "../../../components/ui/Toggle";

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

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  isToggled: false,
};
