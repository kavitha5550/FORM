import React,{useState} from 'react'


const FormData = () => {
     const[userdata,setuserdata]=useState({
       email:'',
       password:'',
       select:'',
       extracourse:''
      })
      const[clicked,setClicked]=useState(false)
      const [msg,setmsg]=useState()
      const handleemail=(e)=>{
      setuserdata ({...userdata,email:e.target.value})
    
   
      }
      const handlepassword=(e)=>{
       setuserdata({...userdata,password:e.target.value})
   
      }
      const handleClick=(e)=>{
       e.preventDefault();
       const emailregex=/^[a-zA-Z0-9./+%*_]+@gmail.com$/;
       const passwordregex=/^(?=.*[a-zA-Z0-9].-%+-)(?=.*\d)[A-Za-z\d]{6,}$/;
   if(userdata.email===""){
     alert("enter a value")
   }else if(emailregex.test(userdata.email.toLowerCase())){
    //  setmsg("vaild email address")
     setTimeout(() => {
        setmsg("verified")
      // alert("Action complete!");
      setClicked(false);
    }, 2000);
   }else if(!emailregex.test(userdata.email)){
     setmsg("invaild gmail")
   }else if(userdata.password===""){
   alert("enter email")
   }else if(passwordregex.test(userdata.password)){
  //  setmsg("strong password")
   }else if(!passwordregex.test(userdata.password)){
     setmsg("poor password")
   }
     
  
      }
      const handleother=(e)=>{
       e.preventDefault()
      
        if(userdata.select==="other" && userdata.extracourse===""){
           alert("enter a value")
    }
   
      }
      const handleselect=(e)=>{
       setuserdata({...userdata,select:e.target.value})
       console.log(e.target.value)
   
      }
      const extracourse=(e)=>{
        setuserdata({...userdata,extracourse:(e.target.value)})

      }
   const  handleReset=(e)=>{
    e.preventDefault();
    console.log("gqiuwhqiw")
 setuserdata({
    email:"",
    password:""
   })
   }
  return (
    <div>
   <form action="" onSubmit={handleClick}>
    <div className=''>
    <input type="text"  name='userdata.email' value={userdata.email} placeholder='email' onChange={handleemail}/>
    <input type="text" name="userdata.password" value={userdata.password} placeholder='password' onChange={handlepassword}/>
    
 
  </div>
  <select name="select" id="" onChange={handleselect} value={userdata.select} >
    <option value="-">--select your skils</option>
    <option value="React js">React js</option>
    <option value="node js">node js</option>
    <option value="other" >other</option>
   
  </select>
   {userdata.select==="other" &&(<div>
    <input type="text" 
      value={userdata.extracourse}
            onChange={extracourse}/>
    </div>
    )}
  {/* {setClicked &&
   (<FontAwesomeIcon icon={faReact} spin size="3x" style={{ color: "#61DBFB" }}></FontAwesomeIcon>)} */}
  <button>Submit</button>
 
   <p>{msg}</p>
   </form>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FormData
