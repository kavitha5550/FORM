import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Form = () => {
  const[userdata,setUserData]=useState({
    firstname:'',
    lastname:'',
    Gmail:'',
    password:''

  })
    // const[firstname,setFirstName]=useState();
    // const[lastname,setLastName]=useState();
    // const[Gmail,setGmail]=useState();
    // const[password,setpassword]=useState();
   
   const navigate=useNavigate()

   
    
    const handleSubmit=(e)=>{
      e.preventDefault()
    // if(setFirstName=''|| setLastName===''|| setGmail===''|| setpassword==='' ){
    //   alert("invaild")
    //   console.log("gvghgd")
    // }else{
 navigate("/submit",{state:{fn:userdata.firstname,ln:userdata.lastname,em:userdata.Gmail}})
    // }
   
    }
      
      

    
  return (
    <form method="POST" onSubmit={handleSubmit}>
   
        <div className='bg-linear-to-r from-indigo-300 to-pink-200 w-full h-120 '>
              <p className='ms-2 text-5xl text-bold px-5 py-5'>Sign up</p>
         <div className='flex flex-column ms-5 mt-5'>

        <div className='ms-5columns-2 bg-white w-1/2 gap-5 flex flex-col px-3 py-3 rounded'>
           <div className='flex gap-20'>
             <input className='w-1/2 outline-none border-b border-pink-400' type="text" placeholder='firstName' name="userdata.firstname" onChange={(e)=>setUserData({...userdata,firstname:e.target.value})}/>
            <input className='w-1/2 outline-none border-b border-pink-400' type="text" placeholder='LastName' name="userdata.lastname" onChange={(e)=>{setUserData({...userdata,lastname:e.target.value})}}/>
           </div>
             <div className='column-1'>
 <input className='w-full outline-none border-b border-pink-400' type="text" placeholder='Email' name="userdata.Email" onChange={(e)=>{setUserData({...userdata,Gmail:e.target.value})}}/>
        </div>
        <div>
          <input className='w-1/2 outline-none border-b border-pink-400' type="password" placeholder='userdata.Password' name="password" onChange={(e)=>{setUserData({...userdata,password:e.target.value})}}/>

        </div>
        <div className='flex align-center justify-center'>
<button class=' w-1/5 outline-none px-2 py-2 rounded-2xl text-white bg-indigo-500' >Submit</button>
        </div>
        </div>
       
    </div>
    </div>
 {/* {userdata.map((item)=>{
   {item.firstname}
   {item.lastname}
   {item.Gmail}
   {item.password}
 })} */}
    </form>
  )
}

export default Form
