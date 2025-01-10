import Form from "./Form";
import { action } from "@storybook/addon-actions";

// Définir les métadonnées de la story
export default {
  title: "Components/Form",
  component: Form,
};

// Story par défaut
export const Default = () => (
  <Form onSubmit={action("form-submitted")}>
    <input type="text" placeholder="Enter text" />
  </Form>
);

// Story avec un titre personnalisé
export const WithCustomTitle = () => (
  <Form onSubmit={action("form-submitted")} h1="Custom Title" h2="Subtitle">
    <input type="text" placeholder="Enter text" />
  </Form>
);

// Story avec un lien
export const WithLink = () => (
  <Form
    onSubmit={action("form-submitted")}
    link={{ text: "Click here", url: "/some-path", pretext: "Need help? " }}
  >
    <input type="text" placeholder="Enter text" />
  </Form>
);

// Story avec un chemin de navigation personnalisé
export const WithCustomPath = () => (
  <Form onSubmit={action("form-submitted")} path="/custom-path">
    <input type="text" placeholder="Enter text" />
  </Form>
);
