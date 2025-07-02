import React, { useState } from 'react'

const Count = () => {
    
    const[count,SetCount]=useState(0)
   
    const handleClick=()=>{
     SetCount(count+1)
    }
    const handleClick2=()=>{
     SetCount(count-1)

    }
  return (
    <div>
    <p>count:{count}</p>
   <button onClick={handleClick} >increment</button>
   <button onClick={handleClick2} >Decrement</button>

    </div>
  )
}

export default Count
