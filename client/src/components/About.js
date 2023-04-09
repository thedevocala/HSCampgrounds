import React from "react"
import Map from "./Map"

const location = {
    address: '24004 Old Bellamy Road, High Springs, FL.',
    lat: 29.87475,
    lng: -82.5518409,
  };

function About(){
    return(
        <div className="about">
            <h1>About goes here</h1>
            <Map location={location} zoomLevel={17}/>
        </div>
    )
}


export default About