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
      description: "Le titre principal (H1) du formulaire.",
    },
    h2: {
      control: { type: "text" },
      description: "Le sous-titre (H2) du formulaire.",
    },
    buttonText: {
      control: { type: "text" },
      description: "Texte du bouton de soumission.",
    },
    link: {
      control: { type: "object" },
      description: "Lien affiché sous le bouton, avec un texte et une URL.",
    },
    onSubmit: {
      action: "submitted",
      description: "Callback appelé lors de la soumission du formulaire.",
    },
    path: {
      control: { type: "text" },
      description: "Chemin vers la page de destination après la soumission.",
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
