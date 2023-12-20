import React from "react";
import Header from './Header';

const Landing = () => {

    const JumbotronContainerClasses = `
        h-full
        mt-28
        md:flex-row
        md:relative 
        md:mx-auto
        md:mt-10
        lg:mt-48`
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
<Header />
            <img
                src={'/assets/headerTopEdge.png'}
                className="absolute h-20 md:w-full md:h-28 max-w-screen-2xl mx-auto"
                alt="top border" />

            <div className={JumbotronContainerClasses}>

                <img
                    className="hidden xl:block w-4/5 mx-auto"
                    src="/assets/xlGreenBlackBrand.JPG"
                    alt="Goat Witch Tattoo" />

                <img
                    className="block xl:hidden w-4/5 mx-auto sm:w-1/2"
                    src="/assets/stackedHeaderGreenBlack.png"
                    alt="Goat Witch Tattoo" />

                <div className="grid grid-cols-2 mx-8 lg:px-36 xl:px-48 2xl:px-60">
                    <img
                        className=""
                        src={'/assets/ibexTransparent.png'}
                        alt='Skelly Ibex' />

                    <button onClick={() => window.location.hash = 'booking'}>
                        <img src={ '/assets/bookHere.png' } alt="book here" className='max-h-64 m-auto' />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Landing;