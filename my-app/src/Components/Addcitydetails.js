import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import "./Assets/addcitydetails.css"

const Addcitydetails = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [pincode, setPinCode] = useState("");
  const [state, setState] = useState("");

  const addcity = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/uploadCity.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          'name': name,
          'pincode': pincode,
          'state': state
        })
      }
    );
    const data = await res.text();
    if (data == "success") {
      window.alert("City Added successfully !!");
      navigate('/addcity');
    } else {
      window.alert("Error !! Please Reenter the details !! ");
    }
  };

  return (
    <div class="addcitydetail-box">
      <br /><br /><center><h2 className="label3">Add City Information</h2></center><br /><br />
      <div className="container-addcitydetail">
        <section className="addcitydetail">
          <div className="addcitydetail">
            <form method="POST">

              <div className="cityname">
                <strong>Name : </strong>&emsp;
                <div classname="addcity-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Enter City Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <br /><br />

              <div className="citypincode">
                <strong>PinCode : </strong>&emsp;
                <div classname="addcity-input">
                  <input
                    type="text"
                    name="pincode"
                    id="pincode"
                    autoComplete="off"
                    placeholder="Enter City Pincode"
                    value={pincode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
              </div>
              <br /><br />

              <div className="citystate">
                <strong>State : </strong>&emsp;
                <div classname="addcity-input">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="off"
                    placeholder="Enter State for City"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <br /><br /><br />

              <div classname="submit">
                <input
                  type="submit"
                  className="btn btn-success"
                  name="add"
                  id="add"
                  value="ADD"
                  onClick={addcity}
                ></input>
              </div>

            </form>
          </div>
        </section>
      </div>
      <div className="back">
        <center><NavLink to="/addcity" className="back">Back</NavLink></center>
      </div>
      <br /><br />
    </div>
  );

}
export default Addcitydetails