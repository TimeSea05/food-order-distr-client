import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const submit = async (event) => {
    event.preventDefault()

    await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    window.alert('register successfully!')
    return navigate('/login')
  }

  return (
    <form onSubmit={submit}>
      <h1 className='h3 mb-3 fw-normal'>Please register</h1>

      <div className='form-floating'>
        <input
          className='form-control' placeholder='Name'
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor='floatingInput'>Name</label>
      </div>

      <div className='form-floating'>
        <input
          type='email' className='form-control' placeholder='name@example.com'
          onChange={event => setEmail(event.target.value)}
        />
        <label htmlFor='floatingInput'>Email address</label>
      </div>

      <div className='form-floating'>
        <input
          type='password' className='form-control' placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <button className='w-100 btn btn-lg btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default Register
