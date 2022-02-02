import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Adddecorator = () => {
    const navigate = useNavigate();
    const adddecoratordetails = async (e) => {
        navigate('/Adddecoratordetails');
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

   
    const [decorator, setdecorator] = useState([""]);
    const getdecorator = async () => {
      console.log("TEMP:");
      console.log(temp);
      const res = await fetch(
        "https://eventrra.000webhostapp.com/Admin/getAllDecorators.php",
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
          setdecorator(data);
        });
    };
  
    let temp;
    const [cid, setCId] = useState(decorator?.CId);
    useEffect(() => {
      setCId(decorator?.CId);
    }, [decorator?.CId]);
  
    const changedecorator = (e) => {
      temp = city[e.target.selectedIndex - 1].CId;
      getdecorator();
    };
  
    if (decorator) {
      var decoratorData = decorator.map((val, i) => (
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
      decoratorData = (
        <tr>
          <td colSpan="4">No Records Found</td>
        </tr>
      );
    }
  
  
    return(
        <div>
            <header>Add Decorator</header>
            <br/><br/>
            <div>
            <center>
              <select
                id="select1"
                value={cid}
                onChange={(e) => {
                  if (e.target.selectedIndex != 0) {
                    setCId(city[e.target.selectedIndex - 1].CId);
                    changedecorator(e);
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
                <tbody>{decoratorData}</tbody>
                </table>
                </center>
        </div>
        <br/><br/>
        <button onClick={adddecoratordetails}>Add New decorator</button>
        </div>
    );
};
export default Adddecorator