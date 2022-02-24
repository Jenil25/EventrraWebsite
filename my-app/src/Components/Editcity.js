import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Editcity = () => {
    const navigate = useNavigate();

    const query = new URLSearchParams(useLocation().search);
    const cid = query.get("id");
    console.log(cid);
    const [name, setName] = useState("");
    const [pincode, setPinCode] = useState("");
    const [state, setState] = useState("");

    const [city, setCity] = useState([""]);
    useEffect(() => {
        const getCity = async () => {
            const res1 = await fetch(
                "https://eventrra.000webhostapp.com/Admin/getEditCity.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        CId: cid,
                    }),
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setCity(data);
                    setName(data[0].Name);
                    setPinCode(data[0].Pincode);
                    setState(data[0].State);
                });
        };
        getCity();
    }, []);

    
    const editcity = async (e) => {
        e.preventDefault();
        const res = await fetch(
            "https://eventrra.000webhostapp.com/Admin/editCity.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    'cid': cid,
                    'name': name,
                    'pincode': pincode,
                    'state': state
                })
            }
        );
        const data = await res.text();
        if (data == "success") {
            window.alert("City Updated successfully !!");
            navigate('/addcity');
        } else {
            window.alert("Error !! Please Reenter the details !! ");
        }
    };

    return (
        <div class="addcitydetail-box">
            <br /><br /><center><h2>Edit City Information</h2></center><br /><br />
            <div className="container-addcitydetail">
                <section className="addcitydetail">
                    <div className="addcitydetail">
                        <form method="POST">

                            <div className="cityname">
                                <strong>Name : </strong>&emsp;
                                <div classname="addcity-input">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="off"
                                        placeholder="Enter City Name"
                                        defaultValue={city[0].Name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br /><br />

                            <div className="citypincode">
                                <strong>PinCode : </strong>&emsp;
                                <div classname="addcity-input">
                                    <input
                                        type="text"
                                        name="pincode"
                                        id="pincode"
                                        autoComplete="off"
                                        placeholder="Enter City Pincode"
                                        defaultValue={city[0].Pincode}
                                        onChange={(e) => setPinCode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br /><br />

                            <div className="citystate">
                                <strong>State : </strong>&emsp;
                                <div classname="addcity-input">
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        autoComplete="off"
                                        placeholder="Enter State for City"
                                        defaultValue={city[0].State}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br /><br /><br />

                            <div classname="submit">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    name="edit"
                                    id="edit"
                                    value="EDIT"
                                    onClick={editcity}
                                ></input>
                            </div>

                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Editcity 