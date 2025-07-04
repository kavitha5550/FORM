import React, { useState } from "react";

const FormData = () => {
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
    select: "",
   
  });
  const [issubmited, setissubmited] = useState(false);
  

  const [msg, setmsg] = useState();

  const handleemail = (e) => {
    setuserdata({ ...userdata, email: e.target.value });
  };

  const handlepassword = (e) => {
    setuserdata({ ...userdata, password: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const emailregex = /^[a-zA-Z0-9./+%*_]+@gmail.com$/;
    const passwordregex = /^(?=.*[a-zA-Z0-9].-%+-)(?=.*\d)[A-Za-z\d]{6,}$/;
    if (userdata.email === "") {
      alert("enter a value");
    } else if (emailregex.test(userdata.email.toLowerCase())) {
     
     
      setissubmited("true");
      
    } else if (!emailregex.test(userdata.email)) {
      setmsg("invaild gmail");
    } else if (userdata.password === "") {
      alert("enter email");
    } else if (passwordregex.test(userdata.password)) {
   
    } else if (!passwordregex.test(userdata.password)) {
      setmsg("poor password");
    }

    setTimeout(() => {
      setmsg("Form Submitted");
      setissubmited(false)
    }, 3000);
  };

  const handleother = (e) => {
    e.preventDefault();

   
  };

  const handleselect = (e) => {
    setuserdata({ ...userdata, select: e.target.value });
    console.log(e.target.value);
  };



  const handleReset = (e) => {
    e.preventDefault();
    console.log("gqiuwhqiw");
    setuserdata({
      email: "",
      password: "",
      select:""
    });
    setmsg("")
  };

  return (
    <div className=" h-135  w-full">
     <div className="flex align-center justify-center "> 
     <form action="" className="w-135 bg- h-1/2 px-10 py-10  bg-gray-100 rounded-4xl flex gap-5 flex-col " onSubmit={handleClick}>
        <h1 className="font-bold text-3xl text-blue-500">Register</h1>
        <div className="flex align-center justify-center"><hr className="text-black p-2 w-1/2"></hr></div>
          <div className="flex flex-col align-center justify-center gap-2">
          <label className="text-start">Gmail</label><input className="border w-2/3 p-2 outline-none rounded-xl" 
            type="text"
            name="userdata.email"
            value={userdata.email}
            placeholder="email"
            onChange={handleemail}
            disabled={issubmited}
          />

          </div>
          <div>
         <div className="flex flex-col gap-2">
            <label className="text-start">Password</label>
            <input className="border w-2/3 p-2 outline-none rounded-xl"
            type="text"
            name="userdata.password"
            value={userdata.password}
            placeholder="password"
            onChange={handlepassword}
            disabled={issubmited}
          />
          </div>
          </div>
        
       <div>
       <div className="flex align-center justify-center flex-col gap-2"><label className="text-start">Skils</label>
         <select className="border w-2/3 p-2 outline-none rounded-xl"
          name="select"
          id=""
          onChange={handleselect}
          value={userdata.select}
        >
          <option value="-">--select your skils</option>
          <option value="React js">React js</option>
          <option value="node js">node js</option>
          <option value="other">other</option>
        </select>
       </div>
        
         
        </div>
      <div className="flex mt-3 text-start">
          {userdata.select === "other" && (
          <div>
            <input className="border w-2/3 p-2 outline-none rounded-xl"
              type="text"
             
              disabled={issubmited}
            />
          </div>
        )}
        </div>
        <div className="flex align-center justify-center px-5 py-4"> {issubmited && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 animate-spin"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
         
          </div>
        )}</div>
           {
          msg && <p>{msg}</p>
        }
        <div className="flex align-center justify-center gap-5"><button className="border  p-2 outline-none rounded-xl animate-pulse">Submit</button>
       

        
        <div> <button className=" px-6 py-2 border rounded-xl bg-blue-700 mx-auto"onClick={handleReset}>Reset</button></div></div>
      </form></div>
     
    </div>
  );
};

export default FormData;
