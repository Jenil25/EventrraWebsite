import React, { useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { useNavigate } from "react-router-dom";
import './Assets/card.css';

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
            <div className="adminHome">
            <Card className= "card" className= "card" style={{
            width: '20rem',
            height: '20rem',
            marginLeft: '180px',
            }}>
            <img src="/images/bg7.jpg" height="200" width="400"></img>
            
                <button onClick={addcity}>Manage Cities</button>
            
            </Card>
            <br/><br/>
            <Card className= "card" className= "card" style={{
            width: '20rem',
            height: '20rem',
            marginLeft: '600px',
            marginTop: '-370px'
            }}>
            <img src="/images/bg7.jpg" height="200" width="400"></img>
            <button onClick={addaddress}>Manage Addresses</button>
            </Card>
            <br/><br/>
            <Card className= "card" className= "card" style={{
            width: '20rem',
            height: '20rem',
            marginLeft: '1000px',
            marginTop: '-370px'
            }}>
            <img src="/images/bg7.jpg" height="200" width="400"></img>
            <button onClick={addvenue}>Manage Venues</button>
            </Card>
            <br/><br/>
            <Card className= "card" className= "card" style={{
            width: '20rem',
            height: '20rem',
            marginLeft: '180px',
            }}>
            <img src="/images/bg7.jpg" height="200" width="400"></img>
            <button onClick={addcaterer}>Manage Caterers</button>
            </Card>
            <br/><br/>
            <Card className= "card" className= "card" style={{
            width: '20rem',
            height: '20rem',
            marginLeft: '600px',
            marginTop: '-370px'
            }}>
            <img src="/images/bg7.jpg" height="200" width="400"></img>
            <button onClick={adddecorator}>Manage Decorators</button>
            </Card>
            <br/><br/>
            <Card className= "card" className= "card" style={{
            width: '20rem',
            height: '20rem',
            marginLeft: '1000px',
            marginTop: '-370px'
            }}>
            <img src="/images/bg7.jpg" height="200" width="400"></img>
            <button onClick={addorchestra}>Manage Orchestras</button>
            </Card>
        </div>
        </div>
        
    );
};
export default Adminhome 