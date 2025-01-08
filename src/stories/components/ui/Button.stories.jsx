import Button from "../../../components/ui/Button";

export default {
  title: "Components/ui/Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    active: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  children: "Inactive Button",
  active: false,
};