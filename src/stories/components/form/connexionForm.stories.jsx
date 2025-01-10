import Form from "../../../components/ui/Form";
import Input from "../../../components/ui/Input";

export default {
  title: "Components/ui/ConnexionForm",
  component: ConnexionForm,
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
    <Input
      label="Password"
      id="password"
      type="password"
      placeholder="********"
      onChange={() => {}}
    />
  </Form>
);

export const ConnexionForm = Template.bind({});
ConnexionForm.args = {
  h1: "Welcome Back 👋",
  h2: "Sign in to access your account",
  buttonText: "Sign In",
  link: {
    text: "Forgot Password?",
    url: "/forgotpassword",
    align: "end",
  },
  path: "/param/user",
};
