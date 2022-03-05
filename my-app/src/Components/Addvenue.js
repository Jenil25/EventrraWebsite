import React, { useEffect, useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import axios from "axios";
import "./Assets/managevenue.css"

const Addvenue = () => {
  const navigate = useNavigate();

  const requestedvenues = async (e) => {
    navigate('/RequestedVenues');
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

  const [eventtype, setEventType] = useState([[""]]);
  const getEventType = async () => {
    console.log("CID from eventtype: "+temp);
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllVenueEventType.php",
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
        console.log("From Eventtype : ");
        console.log(data);
        setEventType(data);
        
      });
  };
  
  const deleteVenue = async (VID) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const res1 = await fetch(
        "https://eventrra.000webhostapp.com/Admin/deleteVenue.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            VId: VID,
          }),
        }
      )
      const data = await res1.text();
      if (data == 0) {
        window.alert("Venue deleted successfully !!");
        window.location.reload();
      }
    }
  };


  let temp;
  const [cid, setCId] = useState(venue?.CId);
  useEffect(() => {
    setCId(venue?.CId);
  }, [venue?.CId]);

  const changeVenue = (e) => {
    temp = city[e.target.selectedIndex - 1].CId;
    getVenue();
    getEventType();
  };
  
  if (venue.length>1) {
    var venueData = venue.map((val, i) => (
      <tr key={i} className="table-light">
        <td key={val.VId} className="clm1">
          {i + 1}
        </td>
        <td className="clm2">{val.Name}</td>
        <td className="clm3">{val.Line1},{val.Line2}</td>
        <td className="clm4">{val.Landmark}</td>
        <td className="clm5">{val.Capacity}</td>
        <td className="clm6">{val.Email}</td>
        <td className="clm7">{val.Contact}</td>
        <td className="clm8">{val.OwnerName}</td>
        <td className="clm9">
        
            {eventtype.map((val1, j) => (
            // console.log(j),
          <select id="select2"
          value={ eventtype }>
             {
            val1.map((val2,k) => (
                <option value={k}>{val2}</option>
              ))
            }
              </select>             
            ))
              
            }
   
          </td>
        <td className="clm10">
          <button className="btn btn-danger" onClick={(e) => { deleteVenue(val.VId) }}>Delete</button>
        </td>
      </tr>
    ));
  } else {
   var venueData = (
      <tr className="table-light">
        <td className="clm1" colSpan="10"><center>No Records Found</center></td>
      </tr>
    );
  }


  return (
    <div className="container-managevenue">
      <br /><br /><center><h1 className="label3">All Venues</h1></center>
      <br /><br />
      <div>
        <center>
          <b>City :</b>&emsp;
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
      <br />
      <div>
        <br/>
        <center>
          <table bordered className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th className="clm1" scope="col">#</th>
                <th className="clm2" scope="col">Name</th>
                <th className="clm3" scope="col">Address</th>
                <th className="clm4" scope="col">Landmark</th>
                <th className="clm5" scope="col">Capacity</th>
                <th className="clm6" scope="col">Email</th>
                <th className="clm7" scope="col">Contact</th>
                <th className="clm8" scope="col">OwnerName</th>
                <th className="clm9" scope="col">EventType</th>
                <th className="clm10" scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{venueData}</tbody>
          </table>
          <br /><br />
         {/* <button className="btn btn-success btn-lg" onClick={requestedvenues}>Requested Venues</button> */}
        </center>
      </div>
      <section className="back3">
        <center> <NavLink to="/adminhome" className="back3">Back</NavLink></center>
        <br />
      </section>
    </div>
  );
};
export default Addvenue