import React from 'react'
import logout from '../utilities/logout'
import deleteAccount from '../utilities/deleteAccount'
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
        <li className='nav-item'>
          <Link to='/' className='nav-link active' onClick={() => deleteAccount(resetName)}>Delete My Account</Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Home</Link>
        <div className='collapse navbar-collapse'>
          {menu}
        </div>
      </div>
    </nav>
  )
}

export default Nav
