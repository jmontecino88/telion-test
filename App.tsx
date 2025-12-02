import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solutions } from './components/Solutions';
import { Methodology } from './components/Methodology';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-telion-950 min-h-screen text-slate-200 selection:bg-telion-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Methodology />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;