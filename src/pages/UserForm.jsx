import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import { useState } from "react";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    rpassword: false,
  });

  const validateEmail = (value) => {
    const isValid = /\S+@\S+\.\S+/.test(value);
    return {
      isValid,
      message: isValid ? "" : "Invalid email format",
    };
  };

  const validatePassword = (value) => {
    const isValid = value.length >= 6;
    return {
      isValid,
      message: isValid ? "" : "Password must be at least 6 characters",
    };
  };

  const validateRpassword = (value) => {
    const isValid = value === password;
    return {
      isValid,
      message: isValid ? "" : "Passwords do not match",
    };
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (!touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }));
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      h1="Edit Profil."
      h2="Change your personal data."
      buttonText="Save"
      path="/param/user"
    >
      <div className="flex flex-col gap-10 w-screen px-6 md:w-auto mpd:px-0">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Input
              id="username"
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleInputChange(setUsername, "username")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange(setEmail, "email")}
              validate={touched.email ? validateEmail : undefined}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Input
              id="password1"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange(setPassword, "password")}
              validate={touched.password ? validatePassword : undefined}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="rpassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={rpassword}
              onChange={handleInputChange(setRpassword, "rpassword")}
              validate={touched.rpassword ? validateRpassword : undefined}
            />
          </div>
        </div>
      </div>
    </Form>
  );
}
