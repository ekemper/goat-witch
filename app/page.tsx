"use client"
{
  /* The following line can be included in your src/index.js or App.js file */
}

import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './Landing'
import Header from './Header';
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';
import TailwingWidthGuide from "./TailwindWidthGuide"

export default function Home() {
  return (
    <main className='bg-[#141715]'>
      <TailwingWidthGuide/>
      <Header/>
      <Landing/>
      <About/>

      <Gallery/>
      <Footer/>
    </main>
  )
}
