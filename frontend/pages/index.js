import React from 'react'
import { UsernameContext } from './_app'
import MyNavbar from '../components/MyNavbar'
import Head from 'next/head'

export default function Home() {
  const { username } = React.useContext(UsernameContext)

  return (
    <div>
      <MyNavbar />
      <Head><title>Home</title></Head>
      <main>
        <h1 style={{ margin: '100px' }}>
          {username ? 'Hi, ' + username : 'You are not authenticated'}
        </h1>
      </main>
    </div>
  )
}
