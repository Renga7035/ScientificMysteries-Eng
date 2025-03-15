// src/components/Geography.jsx
import React from 'react';
import { bermudaTriangle } from '../utils/theme';

const Geography = () => {
  const { geographical_features } = bermudaTriangle;

  return (
    <section id="geography" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Geographical Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-cyan-400">Ocean Features</h3>
            <div className="bg-slate-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Notable Depths</h4>
              <p className="text-gray-300">
                {geographical_features.ocean_features.depths.notable_point}:<br />
                {geographical_features.ocean_features.depths.maximum_depth}
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Characteristics</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {geographical_features.ocean_features.characteristics.map((char, i) => (
                  <li key={i}>{char}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-cyan-400">Weather Patterns</h3>
            <div className="bg-slate-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Common Conditions</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {geographical_features.weather_patterns.common_conditions.map((condition, i) => (
                  <li key={i}>{condition}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geography;