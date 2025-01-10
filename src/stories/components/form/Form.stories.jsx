import { MemoryRouter } from "react-router-dom";
import Form from "../../../components/ui/Form";
import ConnexionForm from "../../../pages/ConnexionForm";
import ForgotPasswordForm from "../../../pages/ForgotPasswordForm";
import UserForm from "../../../pages/UserForm";

export default {
  title: "Components/ui/Form",
  component: Form,
  argTypes: {
    h1: { control: "text" },
    h2: { control: "text" },
    buttonText: { control: "text" },
    link: { control: "object" },
    path: { control: "text" },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Story : Formulaire de connexion
export const ConnexionFormStory = () => (
  <ConnexionForm
    h1="Welcome Back 👋"
    h2="Sign in to access your account"
    buttonText="Sign In"
    link={{ align: "end", text: "Forgot Password?", url: "/forgotpassword" }}
    path="/param/user"
  />
);

// Story : Formulaire de réinitialisation de mot de passe
export const ForgotPasswordFormStory = () => (
  <ForgotPasswordForm
    h1="Forgot Password?"
    h2="No worries, it happens!"
    buttonText="Reset Password"
    link={{ align: "end", text: "Back to Sign In", url: "/login" }}
    path="/login"
  />
);

// Story : Formulaire de modification de profil utilisateur
export const UserFormStory = () => (
  <UserForm
    h1="Edit Profile"
    h2="Update your information"
    buttonText="Save Changes"
    link={{ align: "end", text: "Back to Profile", url: "/param/user" }}
    path="/param/user"
  />
);
