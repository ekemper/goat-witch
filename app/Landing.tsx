import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "next/image";

const videoSource = '/trees.mp4';


const brand = 'GoatWitch Tattoo'
const description = 'Dope Human'
const callToAction = 'Book a session'

const Jumbotron = () => {
    return (
        <div className='bg-black/[.1] relative p-4 md:px-30 flex-col'>

            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img className="w-full mt-12" src={'/IMG_0302_transparent.png'} alt='Goat Witch' />

            <div className="grid justify-items-center  w-full">
                <h3 className="text-white">{description}</h3>
                <Button className="mx-auto black">{callToAction}</Button>
            </div>

        </div>
    )
}

const Landing = () => {
    return (
        <div>
            <video 
                src={videoSource} 
                autoPlay muted loop 
                className="video-bg max-w-7xl md:max-w-full absolute t-0" 
                // playbackRate={0.5}  // TODO: EK WTF?
                 />
            {/* <div className="bg-overlay"> */}
                <Jumbotron />
            {/* </div> */}
        </div>
    )
}

export default Landing;