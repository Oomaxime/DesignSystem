import { useState } from "react";
import Input from "../../../components/ui/Input";

export default {
  title: "Components/ui/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    onChange: {
      action: "changed",
    },
  },
};

const Template = (args) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (args.onChange) {
      args.onChange(e);
    }
  };

  return (
    <Input
      {...args}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder", 
  value: "",
};
