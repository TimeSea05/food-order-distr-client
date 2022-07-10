import React from 'react'
import logout from '../utilities/logout'
import { Link } from 'react-router-dom'

const Nav = ({ name, resetName }) => {
  let menu

  if (name === '') {
    menu = (
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item'>
          <Link to='/login' className='nav-link active' aria-current='page'>Login</Link>
        </li>
        <li className='nav-item'>
          <Link to='/register' className='nav-link active' aria-current='page'>Register</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item'>
          <Link to='/login' className='nav-link active' onClick={() => logout(resetName)}>Logout</Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Home</Link>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          {menu}
        </div>
      </div>
    </nav>
  )
}

export default Nav
