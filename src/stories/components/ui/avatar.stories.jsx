import Avatar from "../../../components/ui/Avatar";

export default {
  title: "Components/ui/Avatar",
  component: Avatar,
  argTypes: {
    img: {
      control: { type: "text" },
      description: "The image URL of the avatar.",
    },
    imgWebp: {
      control: { type: "text" },
      description: "The WebP image URL of the avatar.",
    },
    pseudo: {
      control: { type: "text" },
      description: "The pseudo of the avatar.",
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const ProfileAvatar = Template.bind({});
ProfileAvatar.args = {
  img: "https://via.placeholder.com/150",
  imgWebp: "https://via.placeholder.com/150",
  pseudo: "John Doe",
};
