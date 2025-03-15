// src/components/Research.jsx
import React from 'react';
import { bermudaTriangle } from '../utils/theme';

const Research = () => {
  const { scientific_investigations } = bermudaTriangle;

  return (
    <section id="research" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Scientific Research
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-cyan-400">Official Studies</h3>
            {scientific_investigations.official_studies.map((study, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">{study.organization}</h4>
                <p className="text-gray-300">{study.findings}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-cyan-400">Research Conclusions</h3>
            {scientific_investigations.research_conclusions.statistical_analysis.map((analysis, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">{analysis.researcher}</h4>
                <p className="text-gray-300">{analysis.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;