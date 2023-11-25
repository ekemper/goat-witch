import React from "react";

const videoSource = '/trees.mp4';

const Landing = () => {

    const callToActionClasses = `
        w-3/4 
        mx-auto 
        rounded-none 
        text-white
        bg-black
        uppercase
        p-2
        md:w-1/2`

    const JumbotronContainerDesktopClasses = `
        md:flex-row
        md:relative 
        md:mx-auto
        md:mt-10
        lg:h-[32rem]
        xl:h-[38rem]
        2xl:h-[50rem]
        lg:mb-16
        xl:mb-40
        2xl:mb-60
        `
   
    const CallToAction = () => {
        const description = 'Dope Human'
        const callToAction = 'Book a session'

        return (
            <div className={`
                flex flex-col w-full my-10 
                md:w-1/2 md:grid md:content-center md:my-0
                `}>
                <h3 className="m-6 text-white text-center">{description}</h3>
                <button 
                    onClick={() => window.location.hash = 'booking'} 
                    className={callToActionClasses}>
                    {callToAction}
                </button>

            </div>
        )
    }

    return (
        <div className=" flex justify-center">
            <video
                src={videoSource}
                autoPlay muted loop
                className="hidden lg:block absolute"
            // playbackRate={0.5}  // TODO: EK WTF?
            />
            <div className={`p-4 flex flex-col mt-20 mb-10 ${JumbotronContainerDesktopClasses}`}>

                <img
                    className="w-full md:w-1/2 md:mt-10 md:ml-10"
                    src={'/IMG_0302_transparent.png'}
                    alt='Goat Witch Tatoo' />

                <CallToAction />

            </div>
        </div>
    )
}

export default Landing;