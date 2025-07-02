import React, { useState } from 'react'
import song1 from "./Vazhithunaiye.mp3";

const UseRef = () => {
    const[name,setname]=useState()
    const useref=UseRef()
  return (
    <div>
    <h1>RefDemo</h1>  
    <hr />
    <input type="text" name='name' ref={useref} />
<audio controls ref={useref}>
    <source src={song1}>

    </source>
</audio>

    </div>
  )
}

export default UseRef
