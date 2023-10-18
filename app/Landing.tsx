import React from "react";
import './Landing.css'
import Button from 'react-bootstrap/Button';

const videoSource = '/trees.mp4';


const brand = 'GoatWitch Tattoo'
const description = 'the best tatoos, the dopest human on the planet'
const callToAction = 'Book a session'

const Jumbotron = () => {
    return (
        <div className='bg-black/[.1] relative top-1/3'>
            <h1 className='text-6xl'>{brand}</h1>
            <h3>{description}</h3>
            <div className="container mx-auto">
                <Button>{callToAction}</Button>
            </div>
        </div>
    )
}

const Landing = () => {
    return (
        <div className="landing">

            <video src={videoSource} autoPlay muted loop className="video-bg" />
            <div className="bg-overlay">
                <Jumbotron/>

            </div>


        </div>
    )
}

export default Landing;