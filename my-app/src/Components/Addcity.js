import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import './Assets/managecity.css'

const Addcity = () => {
  const navigate = useNavigate();

  const addcitydetails = async (e) => {
    navigate('/Addcitydetails');
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

  const editCity = (id) => {
    var link = "/editcity?id="+id;
    navigate(link);
  }

  const deleteCity = async (CID) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const res1 = await fetch(
        "https://eventrra.000webhostapp.com/Admin/deleteCity.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            CId: CID,
          }),
        }
      )
      const data = await res1.text();
      if (data == 0) {
        window.alert("City deleted successfully !!");
        window.location.reload();
      }
    }
  };

  if (city.length >1) {
    var cityData = city.map((val, i) => (
      <tr key={i} className="table-light">
        <td key={val.CId} className="clm1">
          {i + 1}
        </td>
        <td className="clm2">{val.Name}</td>
        <td className="clm3">{val.Pincode}</td>
        <td className="clm4">{val.State}</td>
        <td className="clm5">
          <button className="btn btn-primary" onClick={(e) => { editCity(val.CId) }}>Edit</button>&ensp;
          <button className="btn btn-danger" onClick={(e) => { deleteCity(val.CId) }}>Delete</button>
        </td>
      </tr>
    ));
  } else {
    cityData = (
      <tr>
        <td colSpan="4">No Records Found</td>
      </tr>
    );
  }


  return (
    <div className="container-managecity">
      <br /><br /><center><h1 className="label2">All Cities</h1></center>
      <div><br /><br />
        <center>
          <table bordered className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th className="clm1" scope="col">#</th>
                <th className="clm2" scope="col">Name</th>
                <th className="clm3" scope="col">Pincode</th>
                <th className="clm4" scope="col">State</th>
                <th className="clm5" scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{cityData}</tbody>
          </table>
          <br /><br />
          <button className="btn btn-success btn-lg" onClick={addcitydetails}>Add New City</button>

        </center>
      </div>
      <section className="back2">
        <center> <NavLink to="/adminhome" className="back2">Back</NavLink></center>
        <br />
      </section>
    </div>
  );
};
export default Addcity 