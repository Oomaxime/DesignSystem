import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/ui/Form",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Template de base pour les Stories
const Template = (Component, args) => <Component {...args} />;

// Story : Formulaire de connexion avec contrôles
export const ConnexionFormStory = Template.bind({});
ConnexionFormStory.args = {
  h1: "Welcome Back 👋",
  h2: "Sign in to access your account",
  buttonText: "Sign In",
  link: { align: "end", text: "Forgot Password?", url: "/forgotpassword" },
  path: "/param/user",
};
ConnexionFormStory.argTypes = {
  h1: { control: "text" },
  h2: { control: "text" },
  buttonText: { control: "text" },
  link: { control: "object" },
  path: { control: "text" },
};

// Story : Formulaire de réinitialisation de mot de passe avec contrôles
export const ForgotPasswordFormStory = Template.bind({});
ForgotPasswordFormStory.args = {
  h1: "Reset Password",
  buttonText: "Send a recovery code",
  link: {
    pretext: "You have an account? ",
    align: "center",
    text: "Sign In",
    url: "/",
  },
  path: "/",
};
ForgotPasswordFormStory.argTypes = {
  h1: { control: "text" },
  buttonText: { control: "text" },
  link: { control: "object" },
  path: { control: "text" },
};

// Story : Formulaire de modification de profil utilisateur avec contrôles
export const UserFormStory = Template.bind({});
UserFormStory.args = {
  h1: "Edit Profile",
  h2: "Change your personal data.",
  buttonText: "Save",
  path: "/param/user",
};
UserFormStory.argTypes = {
  h1: { control: "text" },
  h2: { control: "text" },
  buttonText: { control: "text" },
  path: { control: "text" },
};
