import React, { useEffect, useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
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
  
    if (city) {
      var cityData = city.map((val, i) => (
        <tr key={i}>
          <td key={val.CId} className="clm1">
            {i + 1}
          </td>
          <td className="clm2">{val.Name}</td>
          <td className="clm3">{val.Location}</td>
          <td className="clm4">{val.Pincode}</td>
          <td className="clm5">{val.State}</td>
          <td className="clm6">
            <button className="btn btn-primary">Edit</button>&ensp;
            <button className="btn btn-danger">Delete</button>
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
  
  
    return(
        <div className="container-managecity">
            <br/><br/><center><h1>All Cities</h1></center>
                <div><br/><br/>
                <center>
                <table bordered className="table-city">
                <thead>
                <tr>
                    <th className="clm1">#</th>
                    <th className="clm2">Name</th>
                    <th className="clm3">Location</th>
                    <th className="clm4">Pincode</th>
                    <th className="clm5">State</th>
                    <th className="clm6">Action</th>
                </tr>
                </thead>
                <tbody>{cityData}</tbody>
                </table>
                <br/><br/>
                <button className="btn btn-light btn-lg" onClick={addcitydetails}>Add New City</button>

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