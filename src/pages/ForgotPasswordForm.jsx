import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const validateEmail = (value) => {
    const isValid = /\S+@\S+\.\S+/.test(value);
    return {
      isValid,
      message: isValid ? "" : "Invalid email format",
    };
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!touched) {
      setTouched(true);
    }
  };

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
          onChange={handleEmailChange}
          validate={touched ? validateEmail : undefined}
        />
      </div>
    </Form>
  );
}
