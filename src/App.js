import './App.css';
import React from 'react';
import Landing from './sections/Landing'
import About from './sections/About';
import Footer from './sections/Footer';
// import TailwindWidthGuide from "./components/TailwindWidthGuide"
import Booking from './sections/Booking';
import Process from './sections/Process';
import Faq from './sections/Faq';
import Flash from './sections/Flash';
import Header from './sections/Header';
import Aftercare from './sections/AfterCare';
import Portfolio from './sections/Portfolio';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <main className="bg-grayGreenBackground">
      <div className=' max-w-screen-2xl mx-auto'>
        {/* <TailwindWidthGuide /> */}
        <Header />
        <Landing />
        <About />
        <Flash/>
        <Portfolio />
        <Process />
        <Aftercare/>
        <Booking />
        <Faq/>
        <Footer />
      </div>
    </main>
  );
}

export default App;


