import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Home1 from "./Components/demo";
import Adminlogin from "./Components/Adminlogin";
import Adminhome from "./Components/Adminhome";
import Addcity from "./Components/Addcity";
import Addvenue from "./Components/Addvenue";
import Addaddress from "./Components/Addaddress";
import Addcaterer from "./Components/Addcaterer";
import Adddecorator from "./Components/Adddecorator";
import Addorchestra from "./Components/Addorchestra";
import Addaddressdetails from "./Components/Addaddressdetails";
import Addcitydetails from "./Components/Addcitydetails";
import Addvenuedetails from "./Components/Addvenuedetails";
import Addcatererdetails from "./Components/Addcatererdetails";
import Adddecoratordetails from "./Components/Adddecoratordetails";
import Addorchestradetails from "./Components/Addorchestradetails";
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
      <Route path="/addvenue" element={<Addvenue />} />
      <Route path="/addvenuedetails" element={<Addvenuedetails />} />
      <Route path="/addaddress" element={<Addaddress />} />
      <Route path="/addaddressdetails" element={<Addaddressdetails />} />
      <Route path="/addcaterer" element={<Addcaterer />} />
      <Route path="/addcatererdetails" element={<Addcatererdetails />} />
      <Route path="/adddecorator" element={<Adddecorator />} />
      <Route path="/adddecoratordetails" element={<Adddecoratordetails />} />
      <Route path="/addorchestra" element={<Addorchestra />} />
      <Route path="/addorchestradetails" element={<Addorchestradetails />} />
      </Routes>
    </div>
  );
};

export default App;
