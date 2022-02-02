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
    const addcaterer = async (e) => {
        navigate('/addcaterer');
    }
    const adddecorator = async (e) => {
        navigate('/adddecorator');
    }
    const addorchestra = async (e) => {
        navigate('/addorchestra');
    }

    return(
        <div>
            <header>Admin Home</header>
            <button onClick={addcity}>Manage Cities</button>
            <br/><br/>
            <button onClick={addaddress}>Manage Addresses</button>
            <br/><br/>
            <button onClick={addvenue}>Manage Venues</button>
            <br/><br/>
            <button onClick={addcaterer}>Manage Caterers</button>
            <br/><br/>
            <button onClick={adddecorator}>Manage Decorators</button>
            <br/><br/>
            <button onClick={addorchestra}>Manage Orchestras</button>
        </div>
    );
};
export default Adminhome 