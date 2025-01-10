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
export const ConnexionFormStory = () => <ConnexionForm />;

// Story : Formulaire de réinitialisation de mot de passe
export const ForgotPasswordFormStory = () => <ForgotPasswordForm />;

// Story : Formulaire de modification de profil utilisateur
export const UserFormStory = () => <UserForm />;
