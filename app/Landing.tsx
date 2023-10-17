import React from "react";
import './Landing.css'

const videoSource = '/trees.mp4';

const Landing = (children: any) => {
    return (
        <div className="landing">

            <video src={videoSource} autoPlay muted loop className="video-bg" /> 
            <div className="bg-overlay"></div>


        </div>
    )
}

export default Landing;