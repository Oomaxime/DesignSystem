import { MemoryRouter } from "react-router-dom";
import Form from "../../../components/ui/Form";
import Input from "../../../components/ui/Input";

export default {
  title: "Components/ui/Form",
  component: Form,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    h1: {
      control: { type: "text" },
      description: "The main title (H1) of the form.",
    },
    h2: {
      control: { type: "text" },
      description: "The subtitle (H2) of the form.",
    },
    buttonText: {
      control: { type: "text" },
      description: "Submit button text.",
    },
    onSubmit: {
      action: "submitted",
      description: "Callback called when the form is submitted.",
    },
    path: {
      control: { type: "text" },
      description: "Path to destination page after submission.",
    },
  },
};

const Template = (args) => (
  <Form {...args}>
    <Input
      label="Username"
      id="username"
      type="text"
      placeholder="Enter your username"
      onChange={() => {}}
    />
    <Input
      label="Email"
      id="email"
      type="email"
      placeholder="votre@mail.com"
      onChange={() => {}}
    />
    <Input
      label="Password"
      id="password"
      type="password"
      placeholder="********"
      onChange={() => {}}
    />
    <Input
      label="Confirm Password"
      id="confirmPassword"
      type="password"
      placeholder="********"
      onChange={() => {}}
    />
  </Form>
);

// Story : Formulaire de connexion
export const ProfileForm = Template.bind({});
ProfileForm.args = {
  h1: "Edit Profile.",
  h2: "Change your personal data.",
  buttonText: "Save",
  path: "/param/user",
};
