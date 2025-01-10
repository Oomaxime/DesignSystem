import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import { useState } from "react";

export default function ConnexionForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
      }}
      h1="Welcome Back 👋"
      h2="Sign in to access your account"
      buttonText="Sign In"
      link={{ text: "Forgot Password?", url: "/forgotpassword" }}
    >
      <div className="flex flex-col gap-3">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </Form>
  );
}
