import './App.css';
import React from 'react';
import Landing from './Landing'
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';
import TailwindWidthGuide from "./TailwindWidthGuide"
import Booking from './Booking';
import Process from './Process';
import Header from './Header';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <main className="bg-grayGreenBackground">
      <div className=' max-w-screen-2xl mx-auto'>
        <TailwindWidthGuide />
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


