import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const RequestedEventType = () => {

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

  const [reventtype, setREventType] = useState([""]);
  const getREventType = async () => {
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllRequestedEventType.php",
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
        console.log(data);
        setREventType(data);
      });
  };

  let temp;
  const [cid, setCId] = useState(reventtype?.CId);
  useEffect(() => {
    setCId(reventtype?.CId);
    // getRVenue();
  }, [reventtype?.CId]);


  const changeVenue = (e) => {
    temp = city[e.target.selectedIndex - 1].CId;
    getREventType();
  };

//   const deleteEventType = async (VEID) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       const res1 = await fetch(
//         "https://eventrra.000webhostapp.com/Admin/deleteVenue.php",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: new URLSearchParams({
//             VId: VEID,
//           }),
//         }
//       )
//       const data = await res1.text();
//       if (data == 0) {
//         window.alert("Venue deleted successfully !!");
//         window.location.reload();
//       }
//     }
//   };

//   const acceptEventType = async (VEID) => {
//       const res2 = await fetch(
//         "https://eventrra.000webhostapp.com/Admin/updateRequestedVenue.php",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: new URLSearchParams({
//             VId: VEID,
//           }),
//         }
//       )
//       const data = await res2.text();
//       // console.log(data);
//       if (data == "success") {
//         window.alert("Venue accepted successfully !!");
//         window.location.reload();
//       }
//   };

    if (reventtype.length >1) {
        var reventtypeData = reventtype.map((val, i) => (
          <tr key={i} className="table-light">
            <td key={val.VEtId} className="clm1">
              {i + 1}
            </td>
            <td className="clm2">{val.Name}</td>
            <td className="clm3">{val.EventType}</td>
            <td className="clm4">
              {/* <button className="btn btn-primary" onClick={(e) => { acceptEventType(val.VEtId) }}>Accept</button>&ensp;
              <button className="btn btn-danger" onClick={(e) => { deleteEventType(val.VEtId) }}>Decline</button> */}
            </td>
          </tr>
        ));
      } else {
        var reventtypeData= (
          <tr>
            <td className="clm1" colSpan="9"><center>No Records Found</center></td>
          </tr>
        );
      }
    
    
 
    return (
        <div className="container-requestedvenue">
        <br /><br /><center><h1 className="label6">Requested Event-Types</h1></center>
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
                  <th className="clm2" scope="col">VenueName</th>
                  <th className="clm3" scope="col">EventType</th>
                  <th className="clm4" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{reventtypeData}</tbody>
            </table>
          </center>
        </div>
      </div>
    );
}
export default RequestedEventType;