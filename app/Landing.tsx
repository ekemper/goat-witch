import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "next/image";

const videoSource = '/trees.mp4';
const description = 'Dope Human'
const callToAction = 'Book a session'

const Jumbotron = () => {

    // TODO EK: why does the hover color not work??
    const callToActionClasses = `
        w-3/4 
        mx-auto 
        rounded-none 
        bg-green-900
        text-white
        uppercase
        p-2`

    return (
        <div className='p-4 md:px-30 flex-col md:flex-row'>

            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img 
                className="w-full md:w-1/2" 
                src={'/IMG_0302_transparent.png'} 
                alt='Goat Witch'/>

            <div className="flex flex-col w-full my-10">
                <h3 className="m-6 text-white text-center">{description}</h3>
                <button className={callToActionClasses}>{callToAction}</button>
            </div>

        </div>
    )
}

const Landing = () => {
    return (
        <div className="h-screen grid content-center  md:max-w-full">
            <video 
                src={videoSource} 
                autoPlay muted loop 
                className="hidden lg:block video-bg max-w-7xl md:max-w-full absolute" 
                // playbackRate={0.5}  // TODO: EK WTF?
                 />

            {/* <div className="bg-overlay"> */}
                <Jumbotron />
            {/* </div> */}
        </div>
    )
}

export default Landing;