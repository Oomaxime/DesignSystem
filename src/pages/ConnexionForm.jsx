import Form from '../components/ui/Form'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
      <div>
        <h1 className="font-bold text-center text-5xl">Welcome Back👋</h1>
        <h2 className="font-light text-center text-xl mt-4">
          Let's make big things together!
        </h2>
      </div>

      <div className='flex flex-col gap-1'>
        <div className="flex flex-col">
          <label>Email</label>
          <Input
            type="text"
            placeholder="your@mail.com"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col pb-10">
          <label>Password</label>
          <Input
            type="password"
            placeholder="................"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={() => {}} active={true}>
            Sign in
          </Button>

          <p className="text-end underline mt-2">
            <Link to={"forgotpassword"} className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </Form>
  )
}
