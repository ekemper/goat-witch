import SectionHeader from "../components/SectionHeader"
import { useState } from 'react'

const About = () => {

    const headerText = `Hi, my name is Carlyn!`
    const bodyText = `I’m a Colorado-born artist with a deep love for people, animals, plants and the land. 
        I am transmasculine gender-gueer and prefer they/them pronouns.`

    const moreTextParagraphs = [
        { firstBit: `I have loved `, rest: `drawing since I was young and completed my BFA at the School of the Art Institute of Chicago.` },

        { firstBit: `Tattooing `, rest: `was initially an informal practice for me, holding stick-and-poke parties for my friends in the metal and punk scene starting in 2017. This progressed to the point where my friends began to convince me I should become a professional artist. For me, tattooing has always been about sharing a creative experience that nurtures connection with the community.` },

        { firstBit: `I began using a machine `, rest: `for body art in the summer of 2023 and am currently seeking apprenticeship and a workspace at an established studio. At this point in my evolution, etching and engraving blackwork is my favorite style to work in. I hold a current certificate from the OSHA Bloodborne Pathogens Training for Body Artist course.` },

        { firstBit: `I hold agnostic beliefs, `, rest: `and highly value ritual and ceremonial practices for the proven beneficial impacts they have for regulating our emotions, creating performance goal states, and enhancing our social connections.` },

        { firstBit: `As a practitioner, `, rest: `I am keen to offer sigil magic, memorial processing and rite of passage tattoos. My process is trauma informed, and is customized to the needs and desires of each individual.` },

        { firstBit: `In general `, rest: `we will begin with some journaling prompts, conversations and tarot readings to help discover and specify your desires. We will then design a tattoo to be imbued with those intentions and cast a sacred space for the reception of your markings.` },

        { firstBit: `I admire mountain goats `, rest: `for their incredible surefootedness, stubborn mischievousness and hardy survivability. In my other career, I am a rock climbing instructor and coach who feels most alive perched or clinging up high on remote alpine cliffs.` },

        { firstBit: `Land Acknowledgement: `, rest: `My home studio is on the unceded land of the Ute, Arapaho, and Cheyenne communities. As a white descendant of European settlers, I systemically benefit from colonization, the institution of slavery and the oppression of people of color. If you are African American, Native American, or are a person of color and you desire grants or discounts for your desired tattoo, please make a note in your Tattoo Request Form(insert link here).` }
    ]

    const [showMoreText, setShowMoreText] = useState(false)

    const MoreText = () => {
        return moreTextParagraphs.map(paragraph => {
            return (
                <p className="w-4/5 font-bold mx-auto sm:w-3/4 md:mt-4 backdrop-blur-md" style={{color: "#ffffff",}}>
                    <span className="text-2xl font-bold uppercase">{paragraph.firstBit}</span>
                    {paragraph.rest}
                </p>
            )
        })
    }

    const AboutContent = () => {
        const bottomPadding = `pb-6 sm:pb-10 md:pb-48`
        return (
            <div id='aboutContent' className={`mt-4 ${bottomPadding} mx-6 text-white flex flex-col`} style={{color: "#ffffff",}}>

                <div className="backdrop-blur-md rounded-lg px-4 xl:mt-36">
                    <h4 className="mx-auto pt-4 w-full font-bold uppercase">{headerText}</h4>
                    <p className="mx-auto font-bold pb-4 w-full">{bodyText}</p>
                </div>
                {<button
                    onClick={() => setShowMoreText(true)}
                    className="
                        w-3/4 
                        mx-auto
                        rounded-none 
                        text-white
                        bg-black
                        font-bold
                        uppercase
                        p-2
                        border-2 border-white
                        mt-6
                        backdrop-blur-md">
                    Read More!
                </button>}

            </div>
        )
    }

    const aboutColumnClasses = `mx-auto md:grid md:grid-cols-2 max-w-5xl`

    return (
        <div id="about" className="bg-[url('../public/assets/bgRockPlant.jpg')] pb-8 lg:pb-14">

            <SectionHeader id='about-section' imgSrc={'/assets/aboutHeader.png'} altText={'About Section'} />
            <div className={`w-4/5 mt-16 md:mt-30 ${aboutColumnClasses}`}>
                <img
                    className="mx-auto rounded-full"
                    alt="Hurray!"
                    src={"/assets/about-small.jpg"} />
                <AboutContent />
            </div>
            {showMoreText &&
                <div className={`mt-6 pb-8 lg:pb-16 ${aboutColumnClasses} backdrop-blur-md rounded-lg`}>
                    <MoreText />
                </div>
            }
        </div>
    )
}

export default About