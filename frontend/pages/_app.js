import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'rsuite/dist/rsuite.min.css'
import '../styles/globals.css'

export const UsernameContext = React.createContext()
function MyApp ({ Component, pageProps }) {
  const [userID, setUserID] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })

        const content = await response.json()
        if (content.name !== undefined) {
          setUserID(content.id)
          setUsername(content.name)
          setEmail(content.email)
        }
      }
    )()
  })

  return (
    <UsernameContext.Provider value={{ userID, username, setUsername, email }}>
      <Component {...pageProps} />
    </UsernameContext.Provider>
  )
}

export default MyApp
