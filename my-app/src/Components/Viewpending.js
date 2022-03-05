import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import RequestedVenues from "./RequestedVenues";
import RequestedCaterers from "./RequestedCaterers";
import RequestedEventType from "./RequestedEventType";

const Viewpending = () => {
    const [showVenue,setShowVenue]=React.useState(false);
    const [showCaterer,setShowCaterer]=React.useState(false);
    const [showEventType,setShowEventType]=React.useState(false);
    var x1=0,x2=0,x3=0;
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
    const vieweventtyperequests = async (e) => {    
        if(x3==0)
         {
            setShowEventType(true);
            x3=1;
         } 
          else if(x3==1)
          {
            setShowEventType(false);
            x3=0;
          }
        }    
    return(
    <div>
         <button className="card-btn" onClick={viewvenuerequests}>Requested Venues</button>
         {showVenue ? <RequestedVenues/> : null }
         <button className="card-btn" onClick={viewcatererrequests}>Requested Caterers</button>
         {showCaterer ? <RequestedCaterers/> : null }
         {/* <button className="card-btn" onClick={vieweventtyperequests}>Requested Event-Types</button>
         {showEventType ? <RequestedEventType/> : null } */}

    </div>
    );
}
export default Viewpending;
