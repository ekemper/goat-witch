import ScrollSpySpacer from "./ScrollSpySpacer"
import SectionTitle from "./SectionTitle"

const Booking = () => {
    return (
        <div id="booking" className="bookingContainer">
            <ScrollSpySpacer />
            <SectionTitle text={'Booking'} />

            {/* <div id="calendly-embed" style="min-width:320px;height:700px;"></div>

            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

            {Calendly.initInlineWidget({
                url: 'https://calendly.com/YOURLINK',
                parentElement: document.getElementById('calendly-embed')
            })} */}
            {/* <!-- Calendly inline widget begin --> */}
            {/* <div className="calendly-inline-widget" data-url="https://calendly.com/edwardkemper" style={{"minWidth":"320px", "height":"700px"}}></div> */}
            {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
            {/* <!-- Calendly inline widget end --> */}
        </div>
    )
}

export default Booking

// eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzAwOTA0Njg0LCJqdGkiOiIzODNkNWQ1Mi0wYmVmLTRjNjgtYmE1NC00OTdmMTI4YzNhYmUiLCJ1c2VyX3V1aWQiOiJkNzhhNzZjYi01MTk0LTQyNmUtOTFjOC0wYTc4YTY1OTgyNTIifQ.44ZFIIp9KogkGo8xU50wqnsMzPxv6QcqMNKE6ZyTSI0sb12iUUlnfkImIkWc11tZqVOLuVnndlLpruULa8V1aw