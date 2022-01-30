import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addvenuedetails = () => {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [aid, setAId] = useState("");
    const [capacity, setCapacity] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [ownername, setOwnerName] = useState("");
    
    const addvenue = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/uploadVenue.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            'name': name,
            'aid': '1',
            'capacity': capacity,
            'email': email,
            'contact': contact,
            'ownername': ownername
        })
      }
    );
    const data = await res.text();
    if (data == "success") {
      window.alert("Venue Added successfully !!");
      navigate('/addvenue');
    } else {
      window.alert("Error !! Please Reenter the details !! ");
    } 
  };

  return (
    <div class="addvenuedetail-form">
      <section className="venuedetail">
        <div className="container" id="cont-box">
          <header>Add Venue Details</header>
          <form method="POST">
            <br />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Enter Venue Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            <br />
              <input
                type="text"
                name="capacity"
                id="capacity"
                autoComplete="off"
                placeholder="Enter Venue Capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            <br />
            <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            <br />
            <input
                type="text"
                name="contact"
                id="contact"
                autoComplete="off"
                placeholder="Enter venue contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            <br />
            <input
                type="text"
                name="ownername"
                id="ownername"
                autoComplete="off"
                placeholder="Enter venue owner"
                value={ownername}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            <br />
              <input
                type="submit"
                name="add"
                id="add"
                value="ADD"
                onClick={addvenue}
              ></input>
          </form>
          <br />
        </div>
      </section>
    </div>
  );

}
export default Addvenuedetails