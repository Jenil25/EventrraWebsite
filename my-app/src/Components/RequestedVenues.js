import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import './Assets/requestedvenue.css'


const RequestedVenues = () => {
    
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

  const [rvenue, setRVenue] = useState([""]);
  const getRVenue = async () => {
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllRequestedVenue.php",
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
        setRVenue(data);
      });
  };

  let temp;
  const [cid, setCId] = useState(rvenue?.CId);
  useEffect(() => {
    setCId(rvenue?.CId);
    // getRVenue();
  }, [rvenue?.CId]);


  const changeVenue = (e) => {
    temp = city[e.target.selectedIndex - 1].CId;
    getRVenue();
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

  const acceptVenue = async (AVID) => {
      const res2 = await fetch(
        "https://eventrra.000webhostapp.com/Admin/updateRequestedVenue.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            VId: AVID,
          }),
        }
      )
      const data = await res2.text();
      // console.log(data);
      if (data == "success") {
        window.alert("Venue accepted successfully !!");
        window.location.reload();
      }
  };

    if (rvenue.length >1) {
        var rvenueData = rvenue.map((val, i) => (
          <tr key={i} className="table-light">
            <td key={val.VId} className="clm1">
              {i + 1}
            </td>
            <td className="clm2">{val.Name}</td>
            <td className="clm3">{val.OwnerName}</td>
            <td className="clm4">{val.Line1},{val.Line2}</td>
            <td className="clm5">{val.Landmark}</td>
            <td className="clm6">{val.Capacity}</td>
            <td className="clm7">{val.Email}</td>
            <td className="clm8">{val.Contact}</td>
            <td className="clm9">
              <button className="btn btn-primary" onClick={(e) => { acceptVenue(val.VId) }}>Accept</button>&ensp;
              <button className="btn btn-danger" onClick={(e) => { deleteVenue(val.VId) }}>Decline</button>
            </td>
          </tr>
        ));
      } else {
        var rvenueData = (
          <tr>
            <td className="clm1" colSpan="9"><center>No Records Found</center></td>
          </tr>
        );
      }
    
    
 
    return (
        <div className="container-requestedvenue">
        <br /><br /><center><h1 className="label5">Requested Venues</h1></center>
        <br/><br/>
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
        <div><br />
          <center>
            <table bordered className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th className="clm1" scope="col">#</th>
                  <th className="clm2" scope="col">Name</th>
                  <th className="clm3" scope="col">OwnerName</th>
                  <th className="clm4" scope="col">Address</th>
                  <th className="clm5" scope="col">Landmark</th>
                  <th className="clm6" scope="col">Capacity</th>
                  <th className="clm7" scope="col">Email</th>
                  <th className="clm8" scope="col">Contact</th>
                  <th className="clm9" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{rvenueData}</tbody>
            </table>
          </center>
        </div>
        {/* <section className="back5">
          <center> <NavLink to="/addvenue" className="back5">Back</NavLink></center>
          <br />
        </section> */}
      </div>
        );
}
export default RequestedVenues;