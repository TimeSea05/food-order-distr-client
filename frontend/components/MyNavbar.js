import React from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'rsuite'

import { UsernameContext } from '../pages/_app'
import logout from '../utilities/logout'
import deleteAccount from '../utilities/deleteAccount'

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  )
})
NavLink.displayName = 'NavLink'

const MyNavbar = () => {
  const { username, setUsername } = React.useContext(UsernameContext)

  let UserOperationBar

  if (username === '') {
    UserOperationBar = (
      <Nav pullRight>
        <Nav.Item as={NavLink} href='/login'>
          Login
        </Nav.Item>
        <Nav.Item as={NavLink} href='/register'>
          Register
        </Nav.Item>
      </Nav>
    )
  } else {
    UserOperationBar = (
      <>
        <Nav pullRight>
          <Nav.Item as={NavLink} href='/login' onClick={() => logout(setUsername)}>
            Logout
          </Nav.Item>
          <Nav.Item as={NavLink} href='/' onClick={() => deleteAccount(setUsername)}>
            Delete Account
          </Nav.Item>
        </Nav>
      </>
    )
  }

  return (
    <Navbar>
      <Navbar.Brand href='/'>Home</Navbar.Brand>
      {UserOperationBar}
    </Navbar>
  )
}

export default MyNavbar
