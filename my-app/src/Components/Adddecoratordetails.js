import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Adddecoratordetails = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [aid, setAId] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [ownername, setOwnerName] = useState("");
  let temp;
  const [city, setCity] = useState([""]);
  useEffect(() => {
    const getCity = async () => {
      const res = await axios.post(
        "https://eventrra.000webhostapp.com/Admin/getAllCity.php"
      );
      setCity(res.data);
    };
    getCity();
  }, []);
  
  const [address, setAddress] = useState([""]);
  const getAddress = async () => {
    console.log("TEMP:");
    console.log(temp);
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllAddress.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          CId: temp,
        }),
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setAddress(data);
      });
  };
  const [cid, setCId] = useState(address?.CId);
  useEffect(() => {
    setCId(address?.CId);
  }, [address?.CId]);

  const changeAddress = (e) => {
    temp = city[e.target.selectedIndex - 1].CId;
    getAddress();
  };


  const adddecorator = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/uploadDecorators.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: name,
          aid: parseInt(aid),
          email: email,
          contact: parseInt(contact),
          ownername: ownername,
        }),
      }
    );
    const data = await res.text();
    if (data == "success") {
      window.alert("Decorator Added successfully !!");
      navigate("/adddecorator");
    } else {
      console.log("Data:",res)
      window.alert("Error !! Please Reenter the details !! ");
    }
  };

  return (
    <div class="adddecoratordetail-form">
      <section className="decoratordetail">
        <div className="container" id="cont-box">
          <header>Add decorator Details</header>
          <form method="POST">
            <br />
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Enter decorator Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <select
              id="city"
              value={cid}
              onChange={(e) => {
                if (e.target.selectedIndex != 0) {
                  setCId(city[e.target.selectedIndex - 1].CId);
                  changeAddress(e);
                }
              }}
            >
              <option value="-1">Select City</option>
              {city.map((val, i) => (
                <option value={val.CId}>{val.Name}</option>
              ))}
            </select>
            <br />
            <select
              id="address"
              value={aid}
              onChange={(e) => {
                if (e.target.selectedIndex != 0) {
                  setAId(address[e.target.selectedIndex - 1].AId);
                }
              }}
            >
              <option value="-1">Select Address</option>
              {address.map((val, i) => (
                <option value={val.AId}>{val.Line1}</option>
              ))}
            </select>
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
              placeholder="Enter decorator contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="ownername"
              id="ownername"
              autoComplete="off"
              placeholder="Enter decorator owner"
              value={ownername}
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <br />
            <input
              type="submit"
              name="add"
              id="add"
              value="ADD"
              onClick={adddecorator}
            ></input>
          </form>
          <br />
        </div>
      </section>
    </div>
  );
};
export default Adddecoratordetails;
