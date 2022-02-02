import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcaterer = () => {
    const navigate = useNavigate();
    const addcatererdetails = async (e) => {
        navigate('/Addcatererdetails');
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

   
    const [caterer, setCaterer] = useState([""]);
    const getCaterer = async () => {
      console.log("TEMP:");
      console.log(temp);
      const res = await fetch(
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
  
    let temp;
    const [cid, setCId] = useState(caterer?.CId);
    useEffect(() => {
      setCId(caterer?.CId);
    }, [caterer?.CId]);
  
    const changeCaterer = (e) => {
      temp = city[e.target.selectedIndex - 1].CId;
      getCaterer();
    };
  
    if (caterer) {
      var catererData = caterer.map((val, i) => (
        <tr key={i}>
          <td key={val.CaId} className="clm1">
            {i + 1}
          </td>
          <td className="clm2">{val.Name}</td>
          <td className="clm3">{val.AId}</td>
          <td className="clm4">{val.Email}</td>
          <td className="clm5">{val.Contact}</td>
          <td className="clm6">{val.OwnerName}</td>
          <td className="clm7">
            <button className="btn btn-primary">Edit</button>&ensp;
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ));
    } else {
      catererData = (
        <tr>
          <td colSpan="4">No Records Found</td>
        </tr>
      );
    }
  
  
    return(
        <div>
            <header>Add Caterer</header>
            <br/><br/>
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
          <br/>
                <div>
                <center>
                <table bordered className="table-city">
                <thead>
                <tr>
                    <th className="clm1">#</th>
                    <th className="clm2">Name</th>
                    <th className="clm3">AId</th>
                    <th className="clm4">Email</th>
                    <th className="clm5">Contact</th>
                    <th className="clm6">OwnerName</th>
                    <th className="clm7">Action</th>
                </tr>
                </thead>
                <tbody>{catererData}</tbody>
                </table>
                </center>
        </div>
        <br/><br/>
        <button onClick={addcatererdetails}>Add New Caterer</button>
        </div>
    );
};
export default Addcaterer