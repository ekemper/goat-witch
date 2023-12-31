import './App.css';
import Landing from './Landing'
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';
import TailwingWidthGuide from "./TailwindWidthGuide"
import Booking from './Booking';
import Process from './Process';
import Header from './Header';

// window.onload = function () {

//   const options = {
//     url: 'https://calendly.com/edwardkemper',
//     text: 'Schedule time with me',
//     color: '#0069ff',
//     textColor: '#ffffff',
//     branding: true
//   }


//   setTimeout(() => {
//     Calendly.initBadgeWidget(options);
//     console.log('called')
//   }, 10000)
// }

function App() {

  return (
    <main className="bg-grayGreenBackground">

      <div className=' max-w-screen-2xl mx-auto'>
        {/* <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script> */}
        <TailwingWidthGuide />
        <Header />
        <Landing />
        <About />
        <Process />
        <Gallery />
        <Booking />
        <Footer />
      </div>


    </main>
  );
}

export default App;


