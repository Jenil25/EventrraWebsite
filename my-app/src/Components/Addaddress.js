import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addaddress = () => {
    const navigate = useNavigate();
   
    const addaddressdetails = async (e) => {
        navigate('/Addaddressdetails');
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

    const [address, setAddress] = useState([""]);
  
    const getAddress = async () => {
    console.log(temp);
    const res = await fetch(
      "https://eventrra.000webhostapp.com/Admin/getAllAddress.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            'CId': temp
        })
      }
    );
    console.log(res.data);
    setAddress(res.data);
  }

  let temp ;
    const [cid, setCId] = useState(address?.CId);
    useEffect(() => {
        setCId(address?.CId);
    }, [address?.CId]);
  
    const changeAddress = (e) => {
      // cid = city[e.target.selectedIndex - 1].CId;
      console.log("from change address",city[e.target.selectedIndex - 1].CId);
      temp = city[e.target.selectedIndex - 1].CId;
      getAddress();
     }

    if (address) {
        var addressData = address.map((val, i) => (
          <tr key={i}>
            <td key={val.AId} className="clm1">
              {i + 1}
            </td>
            <td className="clm2">{val.Line1}</td>
            <td className="clm3">{val.Line2}</td>
            <td className="clm4">{val.Landmark}</td>
            <td className="clm5">
              <button className="btn btn-primary">Edit</button>&ensp;
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ));
      } else {
        addressData = (
          <tr>
            <td colSpan="4">No Records Found</td>
          </tr>
        );
      }
    
    return(
        <div>
            <header>Add Address</header>
            <br/><br/>
                <div>
                <center>
                <select id="select1" value={cid}
								onChange={e => { if(e.target.selectedIndex != 0) {setCId(city[e.target.selectedIndex - 1].CId); changeAddress(e)} }}>
									<option value="-1">Select City</option>
								{city.map((val, i) => (
									<option value={val.CId}>{val.Name}</option>
								))
								}
							</select>
                            </center>
                </div>
                <div>
                <center>
                <table bordered className="table-city">
                <thead>
                <tr>
                    <th className="clm1">#</th>
                    <th className="clm2">Line1</th>
                    <th className="clm3">Line2</th>
                    <th className="clm4">Landmark</th>
                </tr>
                </thead>
                <tbody>{addressData}</tbody>
                </table>
                </center>
        </div>
        <br/><br/>
        <button onClick={addaddressdetails}>Add New Address</button>
        </div>
    );
};
export default Addaddress 