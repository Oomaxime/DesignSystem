import Text from "../../../components/ui/Text";

// Définit les métadonnées pour Storybook
export default {
  title: "Components/Typographie/Text",
  component: Text,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "main-title",
        "tagline",
        "text-button",
        "text-accent",
        "text-large",
        "text-regular",
      ],
    },
    children: { control: "text" },
    className: { control: "text" },
  },
};

// Template de base
const Template = (args) => <Text {...args} />;

export const MainTitle = Template.bind({});
MainTitle.args = {
  type: "main-title",
  children: "This is the Main Title",
};

export const Tagline = Template.bind({});
Tagline.args = {
  type: "tagline",
  children: "This is the Tagline",
};

export const TextButton = Template.bind({});
TextButton.args = {
  type: "text-button",
  children: "Click Me",
};

export const TextAccent = Template.bind({});
TextAccent.args = {
  type: "text-accent",
  children: "Important Text",
};

export const TextLarge = Template.bind({});
TextLarge.args = {
  type: "text-large",
  children: "Large Text Content",
};

export const TextRegular = Template.bind({});
TextRegular.args = {
  type: "text-regular",
  children: "Regular Text Content",
};
