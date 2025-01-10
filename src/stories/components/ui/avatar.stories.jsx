import Avatar from "../../../components/ui/Avatar";

export default {
  title: "Components/ui/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: "https://via.placeholder.com/150",
  imgWebp: "https://via.placeholder.com/150",
  pseudo: "John Doe",
};
