import React, { useState } from "react";

const FormData = () => {
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
    select: "",
    extracourse: "",
  });
  const [issubmited, setissubmited] = useState(false);
  const [submision, setsubmision] = useState("");
  const [clicked, setClicked] = useState(false);
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
      //  setmsg("vaild email address")
      //  setTimeout(() => {
      setsubmision("");
      setissubmited("true");
      // alert("Action complete!");
      //   setClicked(false);
      // }, 2000);
    } else if (!emailregex.test(userdata.email)) {
      setmsg("invaild gmail");
    } else if (userdata.password === "") {
      alert("enter email");
    } else if (passwordregex.test(userdata.password)) {
      //  setmsg("strong password")
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

    if (userdata.select === "other" && userdata.extracourse === "") {
      alert("enter a value");
    }
  };

  const handleselect = (e) => {
    setuserdata({ ...userdata, select: e.target.value });
    console.log(e.target.value);
  };

  const extracourse = (e) => {
    setuserdata({ ...userdata, extracourse: e.target.value });
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
    <div>
      <form action="" onSubmit={handleClick}>
        <div className="">
          <input
            type="text"
            name="userdata.email"
            value={userdata.email}
            placeholder="email"
            onChange={handleemail}
            disabled={issubmited}
          />
          <input
            type="text"
            name="userdata.password"
            value={userdata.password}
            placeholder="password"
            onChange={handlepassword}
            disabled={issubmited}
          />
        </div>
        <select
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
        {userdata.select === "other" && (
          <div>
            <input
              type="text"
              value={userdata.extracourse}
              onChange={extracourse}
              disabled={issubmited}
            />
          </div>
        )}
        {/* {setClicked &&
   (<FontAwesomeIcon icon={faReact} spin size="3x" style={{ color: "#61DBFB" }}></FontAwesomeIcon>)} */}
        <button>Submit</button>
        {issubmited && (
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
        )}

        {
          msg && <p>{msg}</p>
        }
        
      </form>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FormData;
