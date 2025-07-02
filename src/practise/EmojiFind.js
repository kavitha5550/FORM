import React, { useState } from 'react'

const EmojiFind = () => {
const[userdata,setUserData]=useState({
smile:'you are happy',
sad:'you are sad'
})
const[msg,setmsg]=useState()
const handleClick=()=>{
 setmsg(userdata.smile)
 
}
const handleClick1=()=>{
 setmsg(userdata.sad)
}
  return (
    <div>
     <p onClick={handleClick}>😊</p>

     <p onClick={handleClick1}>😥</p>
{msg}
    </div>
  
  )
}

export default EmojiFind
