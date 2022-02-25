import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Adminlogin from "./Components/Adminlogin";
import Adminhome from "./Components/Adminhome";
import Addcity from "./Components/Addcity";
import Addvenue from "./Components/Addvenue";
import Addcaterer from "./Components/Addcaterer";
import Addcitydetails from "./Components/Addcitydetails";
import Editcity from "./Components/Editcity";
import RequestedVenues from "./Components/RequestedVenues";
import RequestedCaterers from "./Components/RequestedCaterers";
import { NavLink,Routes, Route,Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <>
        <Home1 />
      </> */}
      <Routes>
      <Route path="/adminlogin" element={<Adminlogin />} />

      <Route path="/adminhome" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <Adminhome /> 
      } />

      <Route path="/addcity" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <Addcity /> 
      } />

      <Route path="/addcitydetails" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <Addcitydetails /> 
      } />

      <Route path="/editcity" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <Editcity /> 
      } />
      
      <Route path="/addvenue" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <Addvenue /> 
      } />
      
      <Route path="/addcaterer" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <Addcaterer /> 
      } />
      
      <Route path="/requestedvenues" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <RequestedVenues /> 
      } />
      
      <Route path="/requestedcaterers" element={
        sessionStorage.getItem('email') == "" || sessionStorage.getItem('email') == null ?
        <Navigate to="/adminlogin"/> : <RequestedCaterers /> 
      } />
      
      </Routes>
    </div>
  );
};

export default App;
