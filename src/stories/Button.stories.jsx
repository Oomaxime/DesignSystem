import React from "react";
import Button from "../components/ui/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button label="Soumettre" onClick={() => alert("Clique !")} />;
