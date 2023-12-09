import './App.css';
import Landing from './Landing'
// import Header from './Header';
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';
import TailwingWidthGuide from "./TailwindWidthGuide"
import Booking from './Booking';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      {/* <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script> */}
      <TailwingWidthGuide />
      {/* <Header /> */}
      <Landing />
      <About />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}

export default App;


