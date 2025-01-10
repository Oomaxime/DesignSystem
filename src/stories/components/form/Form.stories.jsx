import Form from "../../../components/ui/Form";
import Input from "../../../components/ui/Input";

export default {
  title: "Components/Form/Form",
  component: Form,
  argTypes: {
    h1: { control: "text", description: "Main title for the form" },
    h2: { control: "text", description: "Subtitle or tagline for the form" },
    buttonText: { control: "text", description: "Text for the submit button" },
    link: {
      control: "object",
      description: "Optional link with text and URL",
    },
    onSubmit: { action: "submitted", description: "Callback on form submission" },
  },
};

const Template = (args) => (
  <Form {...args}>
    <div className="flex flex-col gap-3">
      <Input id="email" label="Email" type="email" placeholder="Enter your email" />
      <Input id="password" label="Password" type="password" placeholder="Enter your password" />
    </div>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  h1: "Welcome Back 👋",
  h2: "Let’s make big things together!",
  buttonText: "Sign in",
  link: { text: "Forgot Password?", url: "/forgotpassword" },
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  h1: "Reset password.",
  h2: "",
  buttonText: "Send a recovery code",
  link: { text: "You have a account?", url: "/signin" },
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  h1: "Reset Password",
  h2: "Enter your email to receive a recovery code",
  buttonText: "Send Recovery Code",
  link: null,
};
