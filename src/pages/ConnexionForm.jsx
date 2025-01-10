import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Text from "../components/ui/Text";

export default function ConnexionForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="text-3xl font-bold text-center">
        <Text type="main-title">Welcome Back 👋</Text>
      </h1>
      <h2 className="text-center">
        <Text type="tagline">
          Let’s make big things together!
        </Text>
      </h2>

      <div className="flex flex-col gap-3">
        <Input
          id="email"
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

      <div className="flex flex-col gap-3">
        <Button type="submit" active={true}>
          Submit
        </Button>
        <p className="text-end">
          <Link to="/forgotpassword" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </Form>
  );
}
