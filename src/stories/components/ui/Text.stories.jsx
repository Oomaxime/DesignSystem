import Text from "../../../components/ui/Text";

export default {
  title: "Components/Typographie/Text",
  component: Text,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "body", "label"],
    },
    weight: {
      control: { type: "select" },
      options: ["bold", "regular", "thin"],
    },
  },
};

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
  type: "h1",
  weight: "regular",
  children: "This is a H1",
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
  weight: "regular",
  children: "This is a H2",
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
  weight: "regular",
  children: "This is a H3",
};

export const H4 = Template.bind({});
H4.args = {
  type: "h4",
  weight: "regular",
  children: "This is a H4",
};

export const Body = Template.bind({});
Body.args = {
  type: "body",
  weight: "regular",
  children: "This is a Body",
};

export const Label = Template.bind({});
Label.args = {
  type: "label",
  weight: "regular",
  children: "This is a Label",
};

export const Bold = Template.bind({});
Bold.args = {
  type: "h1",
  weight: "bold",
  children: "This is a Bold Text",
};

export const Thin = Template.bind({});
Thin.args = {
  type: "h1",
  weight: "thin",
  children: "This is a Thin Text",
};