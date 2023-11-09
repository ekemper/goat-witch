import React from "react";
import Jumbotron from "./JumboTron";

const videoSource = '/trees.mp4';

const Landing = () => {
    return (
        <div className="h-screen">
            <video
                src={videoSource}
                autoPlay muted loop
                className="hidden lg:block mx-auto max-w-7xl absolute"
            // playbackRate={0.5}  // TODO: EK WTF?
            />
            <Jumbotron />
        </div>
    )
}

export default Landing;