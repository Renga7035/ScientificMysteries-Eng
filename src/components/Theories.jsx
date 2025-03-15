// src/components/Theories.jsx
import React from 'react';
import { bermudaTriangle } from '../utils/theme';

const Theories = () => {
  const { scientific_theories } = bermudaTriangle;

  return (
    <section id="theories" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Scientific Theories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scientific_theories.natural_phenomena.map((theory, index) => (
            <div
              key={theory.category}
              className="bg-slate-800 rounded-lg p-6 shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{theory.category}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {theory.factors?.map((factor, i) => (
                  <li key={i}>{factor}</li>
                ))}
                {theory.phenomena?.map((phenomenon, i) => (
                  <li key={i}>{phenomenon}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theories;