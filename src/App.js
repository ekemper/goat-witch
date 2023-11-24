import './App.css';
import Landing from './Landing'
import Header from './Header';
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';
import TailwingWidthGuide from "./TailwindWidthGuide"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className='bg-[#242b2b]'>
      <TailwingWidthGuide/>
      <Header/>
      <Landing/>
      <About/>

      <Gallery/>
      <Footer/>
    </main>
  );
}

export default App;
