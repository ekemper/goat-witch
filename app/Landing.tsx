import React from "react";
import './Landing.css'
import Button from 'react-bootstrap/Button';
import Image from "next/image";

const videoSource = '/trees.mp4';


const brand = 'GoatWitch Tattoo'
const description = 'Dope Human'
const callToAction = 'Book a session'

const Jumbotron = () => {
    return (
        <div className='bg-black/[.1] relative p-24 md:px-30 flex'>

            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img className="w-1/2" src={'/IMG_0302_transparent.png'} alt='Goat Witch' />

            <div className="py-36 flex justify-end w-full">
                <h3 className="text-white">{description}</h3>
                <Button className="mx-auto black">{callToAction}</Button>
            </div>

        </div>
    )
}

const Landing = () => {
    return (
        <div className="landing">

            <video 
                src={videoSource} 
                autoPlay muted loop 
                className="video-bg" 
                playbackRate={0.5}
                 />
            <div className="bg-overlay">
                <Jumbotron />

            </div>


        </div>
    )
}

export default Landing;