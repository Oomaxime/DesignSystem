import Form from '../components/ui/Form'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Name: ${name}, Password: ${password}`)
      }}
    >
      <h1 className="text-3xl font-bold">Can't remember your password ?</h1>
      <label htmlFor="">Email</label>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => {}} active={true}>
        Submit
      </Button>
      <p className="text-center">Do you have a Account ? <Link to={"login"} className="text-blue-500 hover:underline">Login</Link></p>
    </Form>
  )
}
