import React, { useEffect, useState } from "react";
import axios from "axios";
import './Assets/requestedcaterer.css'

const RequestedCaterers = () => {
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

  const [rcaterer, setRcaterer] = useState([""]);
  const getRcaterer = async () => {
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllRequestedCaterer.php",
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
        setRcaterer(data);
      });
  };

  let temp;
  const [cid, setCId] = useState(rcaterer?.CId);
  useEffect(() => {
    setCId(rcaterer?.CId);
  }, [rcaterer?.CId]);


  const changecaterer = (e) => {
    temp = city[e.target.selectedIndex - 1].CId;
    getRcaterer();
  };

  const deletecaterer = async (CAID) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const res1 = await fetch(
        "https://eventrra.000webhostapp.com/Admin/deleteCaterer.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            CaId: CAID,
          }),
        }
      )
      const data = await res1.text();
      if (data == 0) {
        window.alert("caterer deleted successfully !!");
        window.location.reload();
      }
    }
  };

  const acceptcaterer = async (ACAID) => {
      const res2 = await fetch(
        "https://eventrra.000webhostapp.com/Admin/updateRequestedCaterer.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            CaId: ACAID,
          }),
        }
      )
      const data = await res2.text();
      if (data == "success") {
        window.alert("caterer accepted successfully !!");
        window.location.reload();
      }
  };

    if (rcaterer!=undefined && rcaterer.length>0 && rcaterer[0]!=undefined && rcaterer[0].Name !=null) {
        var rcatererData = rcaterer.map((val, i) => (
          <tr key={i} className="table-light">
            <td key={val.CaId} className="clm1">
              {i + 1}
            </td>
            <td className="clm2">{val.Name}</td>
            <td className="clm3">{val.OwnerName}</td>
            <td className="clm4">{val.Line1},{val.Line2}</td>
            <td className="clm5">{val.Landmark}</td>
            <td className="clm6">{val.Email}</td>
            <td className="clm7">{val.Contact}</td>
            <td className="clm8">
              <button className="btn btn-primary" onClick={(e) => { acceptcaterer(val.CaId) }}>Accept</button>&ensp;
              <button className="btn btn-danger" onClick={(e) => { deletecaterer(val.CaId) }}>Decline</button>
            </td>
          </tr>
        ));
      } else {
        var rcatererData = (
          <tr>
            <td className="clm1" colSpan="8"><center>No Records Found</center></td>
          </tr>
        );
      }
    
    
 
    return (
        <div className="container-requestedcaterer">
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
                changecaterer(e);
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
                  <th className="clm6" scope="col">Email</th>
                  <th className="clm7" scope="col">Contact</th>
                  <th className="clm8" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{rcatererData}</tbody>
            </table>
          </center>
        </div>
      </div>
        );
}
export default RequestedCaterers;