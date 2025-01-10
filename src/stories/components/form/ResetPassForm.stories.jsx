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
    link: {
      control: { type: "object" },
      description: "Link displayed below the button, with text and URL.",
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
      label="Email"
      id="email"
      type="email"
      placeholder="votre@mail.com"
      onChange={() => {}}
    />
  </Form>
);

// Story : Formulaire de connexion
export const ResetPassForm = Template.bind({});
ResetPassForm.args = {
  h1: "Reset Password.",
  buttonText: "Send a recovery code",
  link: {
    text: "Sign In.",
    url: "/",
    align: "end",
  },
  path: "/",
};
