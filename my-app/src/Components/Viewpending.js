import React from "react";
import { NavLink } from "react-router-dom";
import RequestedVenues from "./RequestedVenues";
import RequestedCaterers from "./RequestedCaterers";
import "./Assets/viewpending.css"

const Viewpending = () => {
    const [showVenue,setShowVenue]=React.useState(false);
    const [showCaterer,setShowCaterer]=React.useState(false);
    
    var x1=0,x2=0;
    const viewvenuerequests = async (e) => {
     if(x1==0)
     {
        setShowVenue(true);
        x1=1;
     } 
      else if(x1==1)
      {
        setShowVenue(false);
        x1=0;
      }
    }
    const viewcatererrequests = async (e) => {    
    if(x2==0)
     {
        setShowCaterer(true);
        x2=1;
     } 
      else if(x2==1)
      {
        setShowCaterer(false);
        x2=0;
      }
    }

    return(
    <div className="container-viewpending">
      <center>
       <br /><br /><center><h1 className="label7">Pending Requests</h1></center>
      <br /><br />
        <div>
         <button className="btn btn-primary" id = "btnfrompending" onClick={viewvenuerequests}>Requested Venues</button>
         {showVenue ? <RequestedVenues/> : null }
         <br/><br/>

         <button className="btn btn-warning" id = "btnfrompending" onClick={viewcatererrequests}>Requested Caterers</button>
         {showCaterer ? <RequestedCaterers/> : null }
         </div>

      <section className="back7">
        <center> <NavLink to="/adminhome" className="back4">Back</NavLink></center>
        <br />
      </section>
      </center>
    </div>
    );
}
export default Viewpending;
