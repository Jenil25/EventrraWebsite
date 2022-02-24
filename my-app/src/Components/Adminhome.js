import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { useNavigate } from "react-router-dom";
import './Assets/card.css';

const Adminhome = () => {
    const navigate = useNavigate();

    const addcity = async (e) => {
        navigate('/addcity');
    }
    const addvenue = async (e) => {
        navigate('/addvenue');
    }
    const addcaterer = async (e) => {
        navigate('/addcaterer');
    }

    return (
        <div className="adminHome">
            <center><h1 className="label1">Admin Home</h1></center>
            <div className="grid">
                <div className="grid-item">
                    <div className="card" >
                        <img className="card-image" src="/images/city.jpg" height="200" width="400"></img>
                        <button className="card-btn" onClick={addcity}>Manage Cities</button>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img className="card-image" src="/images/venue.jpg" height="200" width="400"></img>
                        <button className="card-btn" onClick={addvenue}>Manage Venues</button>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card" >
                        <img className="card-image" src="/images/caterer.jpg" height="200" width="400"></img>
                        <button className="card-btn" onClick={addcaterer}>Manage Caterers</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Adminhome 