import { useState } from "react";
import Form from "../../../components/ui/Form";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default {
  title: "Components/form/Form",
  component: Form,
};

// const Template = (args) => <Form {...args} />;

export const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Name: ${name}, Password: ${password}`);
      }}
    >
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => {}} active={true}>
        Submit
      </Button>
    </Form>
  );
};

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Email: ${email}`);
      }}
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => {}} active={true}>
        Submit
      </Button>
    </Form>
  );
};
