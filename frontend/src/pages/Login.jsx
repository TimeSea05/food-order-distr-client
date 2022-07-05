import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setName }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const submit = async (event) => {
    event.preventDefault()

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })

    const content = await response.json()
    alert(content.message)

    if (content.message === 'success') {
      setName(content.name)
      return navigate('/')
    }
  }

  return (
    <form onSubmit={submit}>
      <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

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

      <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
    </form>
  )
}

export default Login
