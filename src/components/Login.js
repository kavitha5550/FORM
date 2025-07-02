import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, SetPassword] = useState();
  const [message, setMessage] = useState();
  const Navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(username)) {
      if (password == "admin") {
        setMessage("success...redireacting to dashboard");
        setTimeout(() => {
          Navigate("/Dashboard", { state: { user: username } });
        }, 3000);
      } else {
        setMessage("failed");
      }
    } else {
      setMessage("invaild Gmail id");
    }
    setTimeout(() => {
      setMessage("");
      setUserName("");
      SetPassword("");
    }, 3000);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={(item) => setUserName(item.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={(item) => SetPassword(item.target.value)}
      />
      <input type="button" value="Login" onClick={handleClick} />
      {message && <h2>{message}</h2>}
    </div>
  );
};

export default Login;
