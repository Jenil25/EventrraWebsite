import React, { useEffect, useState} from "react";
import { NavLink,useNavigate } from 'react-router-dom'


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
    <div class="signin-form">
      <section className="signin">
        <div className="container" id="cont-box">
          <header>Admin-SignIn</header>
          <form method="POST">
            <br />
            <div className="form-group">
              <span className="symbol">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </span>
              &nbsp;&nbsp;&nbsp;
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group space">
              <span className="symbol">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </span>
              &nbsp;&nbsp;&nbsp;
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                name="signin"
                id="signin"
                value="Login"
                onClick={loginUser}
              ></input>
            </div>
          </form>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Adminlogin;
