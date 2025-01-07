import React, { useState } from "react";
import Input from "../components/ui/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Nom"
      placeholder="Entrez votre nom"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
