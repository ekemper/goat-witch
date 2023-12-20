import { useState } from 'react'
import SectionHeader from './SectionHeader'

const Process = () => {

    // const headerText = `The Ceremony`
    const firstParagraph = { firstBit: `We will begin`, rest: ` with some journaling prompts, conversations and tarot readings to help discover and specify your desires. We will then design a tattoo to be imbued with those intentions and cast a sacred space for the reception of the sigil or artwork.` }
    const paragraphs = [
        { firstBit: `Preparing your body`, rest: ` for a tattoo` },
        { firstBit: `Preparing your mind`, rest: ` for a tattoo` },
        { firstBit: `Preparing your soul`, rest: ` for a tattoo` },
    ]

    const processColumnClasses = `mx-auto md:grid md:grid-cols-2 max-w-5xl`
    const bottomPadding = `pb-6 sm:pb-10 md:pb-48 lg:pb-72 xl:pb-80`

    const [showMoreText, setShowMoreText] = useState(false)

    const MoreText = () => {
        return paragraphs.map(paragraph => {
            return (
                <p className="text-white font-bold mx-auto sm:w-3/4 md:mt-4 backdrop-blur-sm" >
                    <span className="text-2xl font-bold uppercase">{paragraph.firstBit}</span>
                    {paragraph.rest}
                </p>
            )
        })
    }

    return (
        <div id="process" className="bg-[url('../public/assets/bgBugPaper.jpg')] pb-8 lg:pb-14">
            
            <SectionHeader imgSrc={'/assets/processHeader.jpg'} altText={'Process'} />
            <div className={`w-4/5 mt-16 md:mt-36 ${processColumnClasses}`}>
                <img
                    className="mx-auto rounded-full"
                    alt="process"
                    src={"/portfolioImages/XWing.jpg"} />

                <div className={`mt-4 ${bottomPadding} mx-6 text-white`}>

                    <div className="backdrop-blur-sm rounded-lg">
                        {/* <h2 className="mx-auto pt-4 w-full font-bold uppercase">{headerText}</h2> */}
                        <p className="text-white font-bold mx-auto sm:w-3/4 md:mt-4 backdrop-blur-sm" >
                            <span className="text-2xl font-bold uppercase">{firstParagraph.firstBit}</span>
                            {firstParagraph.rest}
                        </p>
                    </div>

                    {!showMoreText && <button
                        onClick={() => setShowMoreText(true)}
                        className=" w-full 
                                    rounded-none 
                                    text-white
                                    bg-black
                                    font-bold
                                    uppercase
                                    p-2">
                        Read More!
                    </button>}

                    {showMoreText && <div
                        className={`mt-6 pb-8 lg:pb-16 ${processColumnClasses} sm:mt-14 backdrop-blur-sm rounded-lg`}>
                        <MoreText />
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Process
