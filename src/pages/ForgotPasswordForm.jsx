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
      <h1 className="text-5xl font-bold text-center">Reset password</h1>
      <div className='flex flex-col gap-1'>
        <div>
          <label htmlFor="">Email</label>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='pt-10'>
          <Button onClick={() => {}} active={true}>
            Send a recovery code
          </Button>
          <p className="text-center mt-2">
            You have an Account?{' '}
            <Link to={"../"} className="text-blue-500 underline">
              Sign in.
            </Link>
          </p>
        </div>
      </div>
    </Form>
  )
}
