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
import { NavLink,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <>
        <Home1 />
      </> */}
      <Routes>
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/adminhome" element={<Adminhome />} />
      <Route path="/addcity" element={<Addcity />} />
      <Route path="/addcitydetails" element={<Addcitydetails />} />
      <Route path="/editcity" element={<Editcity />} />
      <Route path="/addvenue" element={<Addvenue />} />
      <Route path="/addcaterer" element={<Addcaterer />} />
      <Route path="/requestedvenues" element={<RequestedVenues />} />
      <Route path="/requestedcaterers" element={<RequestedCaterers />} />
      </Routes>
    </div>
  );
};

export default App;
