import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Text from "../components/ui/Text";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="text-center">
        <Text type="main-title">Reset Password.</Text>
      </h1>

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

      <div className="">
        <Button type="submit" active={true}>
          Send a recovery code
        </Button>
        <p className="text-center mt-2">
          <Text type="text-regular">
            You have a account?{" "}
            <Link to="/" className="text-blue-500 underline">
              Sign In
            </Link>
          </Text>
        </p>
      </div>
    </Form>
  );
}
