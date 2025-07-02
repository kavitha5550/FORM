import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    const loc=useLocation()
  return (
    <div>
      <center>
        <h1>welcome!{loc.state.user}</h1>
      </center>
    </div>
  )
}

export default Dashboard
