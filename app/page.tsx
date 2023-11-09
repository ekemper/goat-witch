{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './Landing'
import Header from './Header';
import About from './About';

export default function Home() {
  return (
    <main className='bg-slate-800'>
      <Header/>
      <Landing/>
      <About/>
    </main>
  )
}
