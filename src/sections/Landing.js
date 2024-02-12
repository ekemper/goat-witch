import React from "react";

const Landing = () => {

    const TagLine = () => {
        return (
            <div className="px-16 w-full flex justify-center mt-6">
                <div style={{ color: "#b9e57d", }} className="font-bold">
                    Ritualized tattoos for healing, pleasure and self actualization.
                </div>
            </div>
        )
    }

    const JumbotronContainerClasses = `
        h-full
        mt-28
        mb-16
        md:flex-row
        md:relative 
        md:mx-auto
        md:mt-20
        lg:mt-28
        xl:mt-36`

    const landingClasses = `
        flex 
        justify-center 
        h-full 
        bg-[url('../public/assets/resized/bgMountainsLanding.png')]
        xl:bg-[url('../public/assets/resized/bgMountainsLanding.png')]
        `
    return (
        <div id='landing' className={landingClasses}>

            <div id='jumbo' className={JumbotronContainerClasses}>

                <img
                    className="hidden xl:block w-[900px] mx-auto"
                    src="/assets/rawImages/BrandHeaderXl.PNG"
                    alt="Goat Witch Tattoo" />

                <img
                    className="block xl:hidden w-3/4 mx-auto sm:w-1/2"
                    src="/assets/rawImages/stackedHeaderGreenBlack.png"
                    alt="Goat Witch Tattoo" />

                <TagLine />

                <div className="grid grid-cols-2 mx-8 sm:mx-36 lg:mx-48 xl:mx-80 xl:px-32">
                    <img
                        className="max-h-80 mx-auto"
                        src={'/assets/rawImages/ibexTransparent.png'}
                        alt='Skelly Ibex' />

                    <button onClick={() => window.location.hash = 'booking'}>
                        <img src={'/assets/rawImages/bookHere.png'} alt="book here" className='max-h-48 m-auto' />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Landing;