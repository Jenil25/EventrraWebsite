import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcitydetails = () => {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
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
            'location': location,
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
    <div class="addcitydetail-form">
      <section className="citydetail">
        <div className="container" id="cont-box">
          <header>Add City Details</header>
          <form method="POST">
            <br />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Enter City Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            <br />
              <input
                type="text"
                name="location"
                id="location"
                autoComplete="off"
                placeholder="Enter City Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            <br />
            <input
                type="text"
                name="pincode"
                id="pincode"
                autoComplete="off"
                placeholder="Enter City Pincode"
                value={pincode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            <br />
            <input
                type="text"
                name="state"
                id="state"
                autoComplete="off"
                placeholder="Enter State for City"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            <br />
              <input
                type="submit"
                name="add"
                id="add"
                value="ADD"
                onClick={addcity}
              ></input>
          </form>
          <br />
        </div>
      </section>
    </div>
  );

}
export default Addcitydetails