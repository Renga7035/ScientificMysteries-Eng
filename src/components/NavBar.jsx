// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">The Bermuda Triangle</div>
          <div className="hidden md:flex space-x-8">
            <a href="#incidents" className="hover:text-cyan-400 transition-colors">Incidents</a>
            <a href="#theories" className="hover:text-cyan-400 transition-colors">Theories</a>
            <a href="#geography" className="hover:text-cyan-400 transition-colors">Geography</a>
            <a href="#research" className="hover:text-cyan-400 transition-colors">Research</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;