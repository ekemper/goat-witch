import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "next/image";

const videoSource = '/trees.mp4';
const description = 'Dope Human'
const callToAction = 'Book a session'

const Jumbotron = () => {
    return (
        <div className='bg-black/[.1] relative p-4 md:px-30 flex-col md:flex-row'>

            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img 
                className="w-full mt-12 md:w-1/2" 
                src={'/IMG_0302_transparent.png'} 
                alt='Goat Witch' />

            <div className="flex flex-col w-full my-10">
                <h3 className="m-6 text-white text-center">{description}</h3>
                <Button className="mx-auto black uppercase">{callToAction}</Button>
            </div>

        </div>
    )
}

const Landing = () => {
    return (
        <div className="max-w-7xl md:max-w-full">
            <video 
                src={videoSource} 
                autoPlay muted loop 
                className="hidden lg:block video-bg max-w-7xl md:max-w-full absolute" 
                // playbackRate={0.5}  // TODO: EK WTF?
                 />
            <img src={'/mob-bg.jpg'} className="lg:hidden"/>     
            {/* <div className="bg-overlay"> */}
                <Jumbotron />
            {/* </div> */}
        </div>
    )
}

export default Landing;