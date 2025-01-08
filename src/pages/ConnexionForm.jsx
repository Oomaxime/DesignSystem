import Form from '../components/ui/Form'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useState } from 'react'

export default function ConnexionForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Name: ${name}, Password: ${password}`)
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
  )
}
