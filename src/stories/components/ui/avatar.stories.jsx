import { MemoryRouter } from "react-router-dom";
import Avatar from "../../../components/ui/Avatar";

export default {
  title: "Components/ui/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    pseudo: { control: "text" },
    img: { control: "text" },
    imgWebp: { control: "text" },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  pseudo: "John Doe",
  img: "",
  imgWebp: "",
};
