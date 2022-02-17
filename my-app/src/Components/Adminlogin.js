import React, { useEffect, useState} from "react";
import { NavLink,useNavigate } from 'react-router-dom'
import './Assets/adminLogin.css'


const Adminlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/adminlogin.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            'email': email,
            'password': password,
        })
      }
    );
    const data = await res.text();
    if (data == "success") {
      window.alert("Admin Login successfull");
      navigate('/adminhome');
    } else {
      window.alert("Invalid email/password");
    } 
  };

  return (
    <div className="container">
    <div className="header">
      <h1 className="label">Admin SignIn</h1>
    </div>
          <form className="adminSignin_form" method="POST">
            <div className="font">Email</div>  
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            <div className="font font2">Password:</div>  
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          
              <input
                type="submit"
                name="signin"
                id="signin"
                value="Login"
                onClick={loginUser}
              ></input>
          </form>
          <br />
        </div>
  );
};

export default Adminlogin;
