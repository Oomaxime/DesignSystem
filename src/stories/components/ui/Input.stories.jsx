import React, { useState } from "react";
import Input from "../../../components/ui/Input";

// Configuration de la Story pour le composant Input
export default {
  title: "Components/ui/Input",
  component: Input,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label affiché au-dessus de l'input.",
    },
    id: {
      control: { type: "text" },
      description: "ID unique pour l'input.",
    },
    type: {
      control: { type: "select", options: ["text", "password"] },
      description: "Type de l'input (texte ou mot de passe).",
    },
    placeholder: {
      control: { type: "text" },
      description: "Texte affiché en tant que placeholder.",
    },
    value: {
      control: { type: "text" },
      description: "Valeur actuelle de l'input.",
    },
    onChange: { action: "changed", description: "Callback pour les changements de valeur." },
  },
};

// Template de base pour les Stories
const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

// Story : Input texte
export const TextInput = Template.bind({});
TextInput.args = {
  label: "Nom d'utilisateur",
  id: "username",
  type: "text",
  placeholder: "Entrez votre nom",
  value: "",
};

// Story : Input mot de passe
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Mot de passe",
  id: "password",
  type: "password",
  placeholder: "Entrez votre mot de passe",
  value: "",
};

// Story : Input avec valeur initiale
export const InputWithValue = Template.bind({});
InputWithValue.args = {
  label: "Email",
  id: "email",
  type: "text",
  placeholder: "Entrez votre email",
  value: "example@example.com",
};
