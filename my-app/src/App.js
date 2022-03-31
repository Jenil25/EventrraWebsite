import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Adminlogin from "./Components/Adminlogin";
import Adminhome from "./Components/Adminhome";
import Addvenue from "./Components/Addvenue";
import Addcaterer from "./Components/Addcaterer";
import RequestedVenues from "./Components/RequestedVenues";
import RequestedCaterers from "./Components/RequestedCaterers";
import Viewpending from "./Components/Viewpending";
import {Routes, Route,Navigate } from "react-router-dom";

const App = () => {
  
  return (
     
    <div>
  
      <Routes>
      <Route path="/" element={<Adminlogin />} />    
      <Route path="/adminlogin" element={<Adminlogin />} />
      
      <Route path="/adminhome" element={
        localStorage.getItem('email') == "" || localStorage.getItem('email') == undefined ?
        <Navigate to="/adminlogin"/> : <Adminhome /> 
      } />

      <Route path="/addvenue" element={
       localStorage.getItem('email') == "" || localStorage.getItem('email') == undefined ?
        <Navigate to="/adminlogin"/> : <Addvenue /> 
      } />
      
      <Route path="/addcaterer" element={
       localStorage.getItem('email') == "" || localStorage.getItem('email') == undefined ?
        <Navigate to="/adminlogin"/> : <Addcaterer /> 
      } />
      
      <Route path="/requestedvenues" element={
       localStorage.getItem('email') == "" || localStorage.getItem('email') == undefined ?
        <Navigate to="/adminlogin"/> : <RequestedVenues /> 
      } />
      
      <Route path="/requestedcaterers" element={
       localStorage.getItem('email') == "" || localStorage.getItem('email') == undefined ?
        <Navigate to="/adminlogin"/> : <RequestedCaterers /> 
      } />
      
      <Route path="/viewpending" element={
       localStorage.getItem('email') == "" || localStorage.getItem('email') == undefined ?
        <Navigate to="/adminlogin"/> : <Viewpending /> 
      } />
      
      </Routes>
    </div>
  );
};

export default App;
