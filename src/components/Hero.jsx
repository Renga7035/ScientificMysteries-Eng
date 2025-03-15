// src/components/Hero.jsx
import React from 'react';
import OceanScene from '../models/OceanScene';

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900">
        <OceanScene />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Mysteries of the Bermuda Triangle
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200 mb-8">
            Explore the enigmatic waters where ships and aircraft vanish without a trace
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg 
            transition-colors text-lg">
            Begin the Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;