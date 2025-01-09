import Form from '../components/ui/Form'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordForm() {
  const [name, setName] = useState('') // Supprimé password et setPassword

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Name: ${name}`)
      }}
    >
      <h1 className="text-3xl font-bold text-center">Can&apos;t remember your password?</h1>
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
      <p className="text-center">
        Do you have an Account?{' '}
        <Link to={"login"} className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </Form>
  )
}
