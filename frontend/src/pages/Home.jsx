import React from 'react'

const Home = ({ name }) => {
  return (
    <div>
      {name ? 'Hi ' + name : 'You are not authenticated'}
    </div>
  )
}

export default Home
