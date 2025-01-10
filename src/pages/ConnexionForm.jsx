import { useState } from "react";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";

export default function ConnexionForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      h1="Welcome Back 👋"
      h2="Sign in to access your account"
      buttonText="Sign In"
      link={{ align: "end", text: "Forgot Password?", url: "/forgotpassword" }}
      path="/param/user"
    >
      <div className="flex flex-col gap-3">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="votre@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </Form>
  );
}
