import React from 'react'
import Head from 'next/head'
import { UsernameContext } from './_app'
import MyNavbar from '../components/MyNavbar'
import UserInfotable from '../components/UserInfoTable/UserInfoTable'

export default function Home () {
  const { username } = React.useContext(UsernameContext)

  return (
    <div>
      <MyNavbar />
      <Head><title>Home</title></Head>
      <main>
        <div style={{ margin: '50px 50px' }}>
          {username ? <UserInfotable /> : 'You are not authenticated'}
        </div>
      </main>
    </div>
  )
}
