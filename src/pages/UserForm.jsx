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
      <div>
        <h1 className="text-5xl font-bold text-center">Edit Profil</h1>
        <br/>
        <h2 className="font-light text-xl text-center">Change your personal data</h2>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2'>
          <div className="flex flex-col gap-1 ">
            <label>Username</label>
            <Input
              type="text"
              placeholder="Enter text here"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <Input
              type="text"
              placeholder="Enter text here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <Input
              type="password"
              placeholder="................"
              value={name}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <Input
              type="password"
              placeholder="................"
              value={name}
              onChange={(e) => setRpassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <Button onClick={() => {}} active={true}>
          Save
        </Button>
      </div>
    </Form>    
  )
}
