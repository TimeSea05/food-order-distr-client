import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App () {
  const [username, setUsername] = React.useState('')

  React.useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })

        const content = await response.json()
        if (content.name !== undefined) setUsername(content.name)
      }
    )()
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav name={username} resetName={setUsername} />
        <main className='form-signin w-100 m-auto'>
          <Routes>
            <Route path='/' element={<Home name={username} />} />
            <Route path='/login' element={<Login setUsername={setUsername} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
