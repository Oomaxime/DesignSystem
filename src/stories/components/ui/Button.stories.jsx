import Button from "../../../components/ui/Button";

// Configuration de la Story pour le composant Button
export default {
  title: "Components/ui/Button",
  component: Button,
  argTypes: {
    active: {
      control: { type: "boolean" },
      description: "Détermine si le bouton est actif ou non.",
    },
    children: {
      control: { type: "text" },
      description: "Le contenu affiché à l'intérieur du bouton.",
    },
    onClick: { action: "clicked", description: "Callback lors d'un clic." },
  },
};

// Story pour le bouton actif
export const Active = (args) => <Button {...args} />;
Active.args = {
  active: true,
  children: "Bouton Actif",
};

// Story pour le bouton inactif
export const Inactive = (args) => <Button {...args} />;
Inactive.args = {
  active: false,
  children: "Bouton Inactif",
};
