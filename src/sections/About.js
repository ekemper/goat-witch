import SectionHeader from "components/SectionHeader"
import { useState } from 'react'

const About = () => {

    const headerText = `Hi, my name is Carlyn!`
    const bodyText = `I am a Colorado-born tattoo artist with a deep love for people, animals, plants, and the land. I make illustrative tattoos and hold ritual tattooing sessions.`

    const moreTextParagraphs = [
        { firstBit: `My mission `, rest: ` is to weave transformative magic into every tattoo, creating visually stunning body art that empowers wearers to celebrate milestones, honor past loved ones, heal within and evolve into their best selves.` },

        { firstBit: `Guided by compassion`, rest: `, I connect deeply with my patrons in creative ritual. Together, we craft symbols that not only adorn the skin, but also spark inner growth and restoration, casting spells for journeys of bodily enjoyment and holistic well-being.` },

        { firstBit: `I studied `, rest: ` scientific illustration and printmaking throughout my BFA at the School of the Art Institute of Chicago. I hold a MSci in Outdoor Education from the University of Edinburgh. I am a part time outdoor educator and guide for Denver Mountain Guiding and She Sends Collective.` },

        { firstBit: `When `, rest: ` I’m not making art or magic, you can find me hanging out on rocky cliffs with my favorite folks, practicing yoga, and studying power relations.` },
    ]

    const [showMoreText, setShowMoreText] = useState(true)

    const MoreText = () => {
        return moreTextParagraphs.map(paragraph => {
            return (
                <p className="w-4/5 font-bold mx-auto sm:w-3/4 md:mt-4 backdrop-blur-lg" key={paragraph.firstBit} style={{color: "#ffffff",}}>
                    <span className="text-2xl font-bold uppercase xl:pt-12">{paragraph.firstBit}</span>
                    {paragraph.rest}
                </p>
            )
        })
    }

    const AboutContent = () => {
        const bottomPadding = `pb-6 sm:pb-10 md:pb-48`
        return (
            <div id='aboutContent' className={`mt-4 ${bottomPadding} mx-6 text-white flex flex-col`} style={{color: "#ffffff",}}>

                <div className="backdrop-blur-lg rounded-lg px-4 xl:mt-36">
                    <h4 className="mx-auto pt-4 w-full text-2xl font-bold uppercase">{headerText}</h4>
                    <p className="mx-auto font-bold pb-4 w-full">{bodyText}</p>
                </div>
                {/* {<button
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
                        backdrop-blur-lg">
                    Read More!
                </button>} */}

            </div>
        )
    }

    const aboutColumnClasses = `mx-auto md:grid md:grid-cols-2 max-w-5xl`

    return (
        <div id="about" className="bg-[url('../public/assets/resized/bgRockPlant.jpg')] pb-8 lg:pb-14">

            <SectionHeader id='about-section' imgSrc={'/assets/rawImages/aboutHeader.png'} altText={'About Section'} />
            <div className={`w-4/5 mt-16 md:mt-30 ${aboutColumnClasses}`}>
                <img
                    className="mx-auto rounded-full"
                    alt="Hurray!"
                    src={"/assets/rawImages/about-small.jpg"} />
                <AboutContent />
            </div>
            {showMoreText &&
                <div className={`mt-6 pb-8 lg:pb-16 ${aboutColumnClasses} backdrop-blur-lg rounded-lg`}>
                    <MoreText />
                </div>
            }
        </div>
    )
}

export default About