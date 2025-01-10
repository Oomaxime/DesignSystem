import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  return (
    <Form
      h1="Reset Password"
      buttonText="Send a recovery code"
      link={{
        pretext: "You have a account? ",
        align: "center",
        text: "Sign In",
        url: "/",
      }}
      path="/"
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
      </div>
    </Form>
  );
}
