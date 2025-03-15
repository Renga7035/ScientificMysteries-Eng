// src/App.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Incidents from './components/Incidents';
import Theories from './components/Theories';
import Geography from './components/Geography';
import Research from './components/Research';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <Incidents />
        <Theories />
        <Geography />
        <Research />
      </main>
    </div>
  );
}

export default App;