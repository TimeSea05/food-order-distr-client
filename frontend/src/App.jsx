import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App () {
  const [name, setName] = React.useState('')

  React.useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })

        const content = await response.json()
        if (content.name !== undefined) setName(content.name)
      }
    )()
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className='form-signin w-100 m-auto'>
          <Routes>
            <Route path='/' element={<Home name={name} />} />
            <Route path='/login' element={<Login setName={setName} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
