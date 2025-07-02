import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to="/Register">Register</Link>||
      <Link to="/Login">Login</Link>||
      <Link to="/Count">Count</Link>||
      <Link to="/AppleCount">AppleCount</Link>||
      <Link to="/StudentData">StudentData</Link>||
      <Link to="/Form">Form</Link>||
   

    </div>
  )
}

export default HomePage
