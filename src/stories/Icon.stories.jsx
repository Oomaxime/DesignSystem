import Icon from "../components/ui/Icon";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";
import { MdDashboardCustomize } from "react-icons/md";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "text",
    },
    icon: {
      control: false,
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "md",
  color: "font-default",
  icon: TfiLayoutWidthDefaultAlt,
};

export const Customizable = Template.bind({});
Customizable.args = {
  size: "lg",
  color: "text-red-500",
  icon: MdDashboardCustomize,
};
