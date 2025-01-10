import React from "react";
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
    onSubmit: { action: "submitted", description: "Callback appelé lors de la soumission du formulaire." },
  },
};

// Template de base pour les Stories
const Template = (args) => (
  <Form {...args}>
    <Input
      label="Nom d'utilisateur"
      id="username"
      type="text"
      placeholder="Entrez votre nom d'utilisateur"
      onChange={() => {}}
    />
    <Input
      label="Mot de passe"
      id="password"
      type="password"
      placeholder="Entrez votre mot de passe"
      onChange={() => {}}
    />
  </Form>
);

// Story : Formulaire de connexion
export const LoginForm = Template.bind({});
LoginForm.args = {
  h1: "Connexion",
  h2: "Veuillez entrer vos identifiants",
  buttonText: "Se connecter",
  link: {
    text: "Créer un compte",
    url: "/register",
    pretext: "Pas encore inscrit ? ",
    align: "start",
  },
};

// Story : Formulaire d'inscription
export const RegisterForm = Template.bind({});
RegisterForm.args = {
  h1: "Inscription",
  h2: "Créez un nouveau compte",
  buttonText: "S'inscrire",
  link: {
    text: "Se connecter",
    url: "/login",
    pretext: "Déjà inscrit ? ",
    align: "end",
  },
};

// Story : Formulaire sans lien
export const FormWithoutLink = Template.bind({});
FormWithoutLink.args = {
  h1: "Formulaire simple",
  h2: "Sous-titre facultatif",
  buttonText: "Envoyer",
  link: null,
};
