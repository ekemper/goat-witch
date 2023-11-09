import React from "react";

const videoSource = '/trees.mp4';

const Landing = () => {

    const callToActionClasses = `
        w-3/4 
        mx-auto 
        rounded-none 
        bg-green-900
        text-white
        uppercase
        p-2
        md:w-1/2`

    const JumbotronContainerDesktopClasses = `
        md:flex-row
        md:relative 
        md:max-w-6xl
        md:mx-auto`
        
    const description = 'Dope Human'
    const callToAction = 'Book a session'

    return (
        <div className="h-screen">
            <video
                src={videoSource}
                autoPlay muted loop
                className="hidden lg:block mx-auto max-w-7xl absolute"
            // playbackRate={0.5}  // TODO: EK WTF?
            />
            <div className={`p-4 flex flex-col ${JumbotronContainerDesktopClasses}`}>

                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    className="w-full md:w-1/2"
                    src={'/IMG_0302_transparent.png'}
                    alt='Goat Witch Tatoo' />

                <div className={`
                    flex flex-col w-full my-10 
                    md:w-1/2 md:grid md:content-center md:my-0
                    `}>
                    <h3 className="m-6 text-white text-center">{description}</h3>
                    <button className={callToActionClasses}>{callToAction}</button>
                </div>

            </div>
        </div>
    )
}

export default Landing;