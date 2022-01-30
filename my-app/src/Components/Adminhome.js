import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Adminhome = () => {
    const navigate = useNavigate();
    const addcity = async (e) => {
        navigate('/addcity');
    } 
    const addaddress = async (e) => {
        navigate('/addaddress');
    }   

    const addvenue = async (e) => {
        navigate('/addvenue');
    }   
    return(
        <div>
            <header>Admin Home</header>
            <button onClick={addcity}>Manage Cities</button>
            <br/>
            <button onClick={addaddress}>Manage Addresses</button>
            <br/>
            <button onClick={addvenue}>Manage Venues</button>
        </div>
    );
};
export default Adminhome 