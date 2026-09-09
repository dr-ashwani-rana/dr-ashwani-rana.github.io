import './App.css';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Timings from './components/Timings';
import Map from './components/Map';
import Achievements from './components/Achievements';
import Footer from './components/Footer';


function App() {
    useEffect(() => {
      const disableRightClick = (event) => {
        event.preventDefault();
      };

      const disableImageDrag = (event) => {
        if (event.target.tagName === 'IMG') {
          event.preventDefault();
        }
      };

      const disableShortcuts = (event) => {
        if (
          (event.ctrlKey &&
            ['s', 'u', 'c', 'a'].includes(event.key.toLowerCase())) ||
          event.key === 'F12' ||
          (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i')
        ) {
          event.preventDefault();
        }
      };

      document.addEventListener('contextmenu', disableRightClick);
      document.addEventListener('dragstart', disableImageDrag);
      document.addEventListener('keydown', disableShortcuts);

      return () => {
        document.removeEventListener('contextmenu', disableRightClick);
        document.removeEventListener('dragstart', disableImageDrag);
        document.removeEventListener('keydown', disableShortcuts);
      };
    }, []);
  return (
    <div className="website">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Achievements/>

      <Map />

      <Timings />
      
      <Footer />

    </div>
  );
}

export default App;