import React from "react";
import Form from "../../../components/ui/Form";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default {
  title: "Components/form/Form",
  component: Form,
};

export const DefaultForm = () => (
  <Form onSubmit={(e) => e.preventDefault()}>
    <Input label="Nom" placeholder="Entrez votre nom" />
    <Input label="Email" type="email" placeholder="Entrez votre email" />
    <Button label="Soumettre" type="submit" />
  </Form>
);

export const ProfileForm = () => (
  <Form onSubmit={(e) => e.preventDefault()}>
    <Input label="Nom" placeholder="Entrez votre nom" />
    <Input label="Prénom" placeholder="Entrez votre prénom" />
    <Input label="Email" type="email" placeholder="Entrez votre email" />
    <Button label="Mettre à jour" type="submit" />
  </Form>
);

export const ForgotPasswordForm = () => (
  <Form onSubmit={(e) => e.preventDefault()}>
    <Input label="Email" type="email" placeholder="Entrez votre email" />
    <Button label="Réinitialiser le mot de passe" type="submit" />
  </Form>
);
