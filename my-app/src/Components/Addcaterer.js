import React, { useEffect, useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import axios from "axios";
import "./Assets/managecaterer.css"

const Addcaterer = () => {
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


  const [caterer, setCaterer] = useState([""]);
  const getCaterer = async () => {
    await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllCaterers.php",
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
        setCaterer(data);
      });
  };

  const deleteCaterer = async (CAID) => {
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
      if (data == "success") {
        window.alert("Caterer deleted successfully !!");
        window.location.reload();
      }
    }
  };

  let temp;
  const [cid, setCId] = useState(caterer?.CId);
  useEffect(() => {
    setCId(caterer?.CId);
  }, [caterer?.CId]);

  const changeCaterer = (e) => {
    temp = city[e.target.selectedIndex - 1].CId;
    getCaterer();
  };
  
  if (caterer!=undefined && caterer.length>0 && caterer[0]!=undefined && caterer[0].Name!=null) {
    var catererData = caterer.map((val, i) => (
      <tr key={i} className="table-light">
        <td key={val.CaId} className="clm1">
          {i + 1}
        </td>
        <td className="clm2">{val.Name}</td>
        <td className="clm3">{val.Line1},{val.Line2}</td>
        <td className="clm4">{val.Landmark}</td>
        <td className="clm5">{val.Email}</td>
        <td className="clm6">{val.Contact}</td>
        <td className="clm7">{val.OwnerName}</td>
        <td className="clm8">
          <button className="btn btn-danger" onClick={(e) => { deleteCaterer(val.CaId) }}>Delete</button>
        </td>
      </tr>
    ));
  } else {
    var catererData = (
      <tr>
        <td colSpan="8" className="clm1"><center>No Records Found</center></td>
      </tr>
    );
  }


  return (
    <div className="container-managecaterer">
      <br /><br /><center><h1 className="label4">All Caterers</h1></center>
      <br /><br />
      <div>
        <center>
          <select
            id="select1"
            value={cid}
            onChange={(e) => {
              if (e.target.selectedIndex != 0) {
                setCId(city[e.target.selectedIndex - 1].CId);
                changeCaterer(e);
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
                <th className="clm5" scope="col">Email</th>
                <th className="clm6" scope="col">Contact</th>
                <th className="clm7" scope="col">OwnerName</th>
                <th className="clm8" scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{catererData}</tbody>
          </table>
          <br /><br />
      {/* <button className="btn btn-success btn-lg" onClick={requestedcaterers}>Requested Caterers</button> */}
        </center>
      </div>
      <section className="back4">
        <center> <NavLink to="/adminhome" className="back4">Back</NavLink></center>
        <br />
      </section>
    </div>
  );
};
export default Addcaterer