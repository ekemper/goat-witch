import React from "react";

const Landing = () => {

    const JumbotronContainerClasses = `
        h-full
        mt-48
        md:flex-row
        md:relative 
        md:mx-auto
        md:mt-10`
        // lg:h-[32rem]
        // xl:h-[38rem]
        // 2xl:h-[50rem]
        // lg:mb-16
        // xl:mb-40
        // 2xl:mb-60
        // `

    const landingClasses = `
        flex 
        justify-center 
        h-full 
        bg-[url('../public/assets/bgSkullMoss.jpg')]
        xl:bg-[url('../public/assets/bgMountainsLanding.png')]
        `

    return (
        <div className={landingClasses}>

            <img
                src={'/assets/headerTopEdge.png'}
                className="absolute h-20 md:w-full md:h-28"
                alt="top border" />

            {/* <img
                src={'/assets/landingBottomEdge.png'}
                className="b-0 fixed"
                alt="bottom border" /> */}

            <div className={JumbotronContainerClasses}>

                <img 
                    className="hidden xl:block w-4/5 mx-auto" 
                    src="/assets/xlGoatWitchHeader.png" 
                    alt="Goat Witch Tattoo"/>

                <img 
                    className="block xl:hidden w-4/5 mx-auto sm:w-1/2" 
                    src="/assets/stackedHeaderGreenBlack.png" 
                    alt="Goat Witch Tattoo"/>

                <div className="flex w-4/5">
                    <img
                        className="w-1/2 mx-auto"
                        src={'/assets/ibexTransparent.png'}
                        alt='Skelly Ibex' />

                    <button
                        onClick={() => window.location.hash = 'booking'}
                        className='w-1/2 mx-auto'>
                        <img src={"/assets/bookHere.png"} alt="book here" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Landing;