import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addaddressdetails = () => {
    const navigate = useNavigate();
    
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [landmark, setLandmark] = useState("");
    const [cid, setCId] = useState("");
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

    
  const addaddress = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/uploadAddress.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            'line1': line1,
            'line2': line2,
            'landmark': landmark,
            'cid' : parseInt(cid)
        })
      }
    );
    const data = await res.text();
    console.log(data);
    if (data == "success") {
      window.alert("Address Added successfully !!");
      navigate('/addaddress');
    } else {
      window.alert("Error !! Please Reenter the details !! ");
    } 
  };

  return (
    <div class="addaddressdetail-form">
      <section className="addressdetail">
        <div className="container" id="cont-box">
          <header>Add Address Details</header>
          <form method="POST">
            <br />
            <select
              id="city"
              value={cid}
              onChange={(e) => {
                if (e.target.selectedIndex != 0) {
                  setCId(city[e.target.selectedIndex - 1].CId);
                }
              }}
            >
              <option value="-1">Select City</option>
              {city.map((val, i) => (
                <option value={val.CId}>{val.Name}</option>
              ))}
            </select>
            <br />
              <input
                type="text"
                name="line1"
                id="line1"
                autoComplete="off"
                placeholder="Enter Line1"
                value={line1}
                onChange={(e) => setLine1(e.target.value)}
              />
            <br />
              <input
                type="text"
                name="line2"
                id="line2"
                autoComplete="off"
                placeholder="Enter Line2"
                value={line2}
                onChange={(e) => setLine2(e.target.value)}
              />
            <br />
            <input
                type="text"
                name="landmark"
                id="landmark"
                autoComplete="off"
                placeholder="Enter Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            <br />
              <input
                type="submit"
                name="add"
                id="add"
                value="ADD"
                onClick={addaddress}
              ></input>
          </form>
          <br />
        </div>
      </section>
    </div>
  );

}
export default Addaddressdetails