import { useState } from "react";
import SectionHeader from "../components/SectionHeader"

import { InlineWidget } from "react-calendly";

const Booking = () => {



    // const {intakeSubmitted, setIntakeSubmitted} = useState(false)
  
    return (
        <div id="booking" className="bookingContainer bg-[url('../public/assets/bgRockPlant.jpg')]pb-8 lg:pb-14">
            <SectionHeader imgSrc={'aboutHeader.png'} altText={'Booking Section'} />
            
        
            {/* //{!intakeSubmitted &&  */}
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScfzhegmrya6cgiQhIlG1SFnyCQyxoYQ6OOxPgTBdyxPqFBnA/viewform?embedded=true" 
                width="640" height="494" frameBorder="0" marginHeight="0" marginWidth="0"
                className="h-[45rem] w-full md:w-3/4 lg:w-1/2 m-auto">
                    Loading…
            </iframe>

            <div className="m-6">
                <InlineWidget url="https://calendly.com/edwardkemper" />
            </div>
        </div>
    )
}

export default Booking
