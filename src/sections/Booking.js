import SectionHeader from "components/SectionHeader"

import { InlineWidget } from "react-calendly";

const Booking = () => {
  
    return (
        <div id="booking" className=" bg-[url('../public/assets/resized/bgRockPlant.jpg')] pb-8">
            <SectionHeader imgSrc={'./assets/rawImages/Booking.png'} altText={'Booking Section'} />
            
            <iframe 
                title="stupid google form iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLScfzhegmrya6cgiQhIlG1SFnyCQyxoYQ6OOxPgTBdyxPqFBnA/viewform?embedded=true" 
                width="640" frameBorder="0" marginHeight="0" marginWidth="0"
                className="h-[680px] md:h-[520px] w-4/5 md:w-3/4 lg:w-1/2 mx-auto mt-10 xl:mt-28">
                    Loading…
            </iframe>

            <div className="m-6 mt-10 w-4/5 md:w-3/4 lg:w-1/2 m-auto">
                <InlineWidget url="https://calendly.com/goatwitchtattoo" />
            </div>
        </div>
    )
}

export default Booking
