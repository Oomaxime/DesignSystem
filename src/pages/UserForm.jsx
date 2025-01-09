import Form from '../components/ui/Form'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserForm() {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')

  return (
    <Form
        onSubmit={(e) => {
          e.preventDefault()
          alert(`Username: ${username}, Name: ${name}, Password: ${password} , RepeatPassword: ${rpassword}`)
        }}
    >

      <div className="flex flex-col gap-1">
        <label>Username</label>
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Email</label>
        <Input
          type="text"
          placeholder="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Password</label>
        <Input
          type="password"
          placeholder="Password"
          value={name}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Confirm Password</label>
        <Input
          type="password"
          placeholder="Confirm password"
          value={name}
          onChange={(e) => setRpassword(e.target.value)}
        />
      </div>

      <Button onClick={() => {}} active={true}>
        Save change
      </Button>
    </Form>    
  )
}
