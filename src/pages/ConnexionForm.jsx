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
      <h1 className="text-3xl font-bold">Welcome Back !</h1>
      <h2>Today is a new day. It's your day. You shape it.<br />Sign in to start managing your projects.</h2>

      <div className='flex flex-col gap-3'>
        <label>Email</label>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label>Password</label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className="text-end"><Link to={"forgotpassword"} className="text-blue-500 hover:underline">Forgot Password</Link></p>
      <Button onClick={() => {}} active={true}>
        Submit
      </Button>
    </Form>
  )
}
