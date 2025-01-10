import Form from '../components/ui/Form'
import Input from '../components/ui/Input'
import { useState } from 'react'

export default function UserForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      h1="Edit Profil."
      h2="Change your personal data."
      buttonText="Save"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Input
              id="username"
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Input
              id="rpassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={rpassword}
              onChange={(e) => setRpassword(e.target.value)}
            />
          </div>
        </div>
      </div>
    </Form>
  )
}
