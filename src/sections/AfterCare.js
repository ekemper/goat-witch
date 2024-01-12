
import SectionHeader from "../components/SectionHeader"


const paragraphs = [
    { firstBit: `I have loved `, rest: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },

    { firstBit: `Tattooing `, rest: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },

    { firstBit: `I began using a machine `, rest: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },

    { firstBit: `I hold agnostic beliefs, `, rest: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },

]

const Aftercare = () => {
    return (
        <div id="aftercare" className="bg-[url('../public/assets/bgRockPlant.jpg')] pb-8 lg:pb-14">
            <SectionHeader imgSrc={'./assets/aftercareHeader.png'} altText={'Aftercare Section'} />

            <div className="font-bold mx-auto w-4/5 sm:w-3/4 mt-4 lg:w-2/3 backdrop-blur-md p-6 rounded-lg">

                {paragraphs.map(paragraph => {
                    return (
                        <p className="mt-4 lg:mt-6" style={{ color: "#ffffff", }}>
                            <span className="text-2xl font-bold uppercase">{paragraph.firstBit}</span>
                            {paragraph.rest}
                        </p>
                    )
                })}
            </div>

        </div>
    )
}

export default Aftercare 