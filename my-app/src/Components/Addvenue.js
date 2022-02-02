import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Addvenue = () => {
    const navigate = useNavigate();
    const addvenuedetails = async (e) => {
        navigate('/Addvenuedetails');
    } 

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

   
    const [venue, setVenue] = useState([""]);
    const getVenue = async () => {
      console.log("TEMP:");
      console.log(temp);
      const res = await fetch(
        "https://eventrra.000webhostapp.com/Admin/getAllVenues.php",
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
          setVenue(data);
        });
    };
  
    let temp;
    const [cid, setCId] = useState(venue?.CId);
    useEffect(() => {
      setCId(venue?.CId);
    }, [venue?.CId]);
  
    const changeVenue = (e) => {
      temp = city[e.target.selectedIndex - 1].CId;
      getVenue();
    };
  
    if (venue) {
      var venueData = venue.map((val, i) => (
        <tr key={i}>
          <td key={val.VId} className="clm1">
            {i + 1}
          </td>
          <td className="clm2">{val.Name}</td>
          <td className="clm3">{val.AId}</td>
          <td className="clm4">{val.Capacity}</td>
          <td className="clm5">{val.Email}</td>
          <td className="clm6">{val.Contact}</td>
          <td className="clm7">{val.OwnerName}</td>
          <td className="clm8">
            <button className="btn btn-primary">Edit</button>&ensp;
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ));
    } else {
      venueData = (
        <tr>
          <td colSpan="4">No Records Found</td>
        </tr>
      );
    }
  
  
    return(
        <div>
            <header>Add Venue</header>
            <br/><br/>
            <div>
            <center>
              <select
                id="select1"
                value={cid}
                onChange={(e) => {
                  if (e.target.selectedIndex != 0) {
                    setCId(city[e.target.selectedIndex - 1].CId);
                    changeVenue(e);
                  }
                }}
              >
                <option value="-1">Select City</option>
                {city.map((val, i) => (
                  <option value={val.CId}>{val.Name}</option>
                ))}
              </select>
            </center>
          </div>
          <br/>
                <div>
                <center>
                <table bordered className="table-city">
                <thead>
                <tr>
                    <th className="clm1">#</th>
                    <th className="clm2">Name</th>
                    <th className="clm3">AId</th>
                    <th className="clm4">Capacity</th>
                    <th className="clm5">Email</th>
                    <th className="clm6">Contact</th>
                    <th className="clm7">OwnerName</th>
                    <th className="clm8">Action</th>
                </tr>
                </thead>
                <tbody>{venueData}</tbody>
                </table>
                </center>
        </div>
        <br/><br/>
        <button onClick={addvenuedetails}>Add New Venue</button>
        </div>
    );
};
export default Addvenue