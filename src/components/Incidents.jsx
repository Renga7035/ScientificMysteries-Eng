// src/components/Incidents.jsx
import React from 'react';
import { bermudaTriangle } from '../utils/theme';

const Incidents = () => {
  const { historical_incidents } = bermudaTriangle;

  return (
    <section id="incidents" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Notable Disappearances
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {historical_incidents.major_cases.map((incident, index) => (
            <div
              key={incident.name}
              className="bg-slate-700 rounded-lg p-6 shadow-xl"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{incident.name} ({incident.year})</h3>
              <div className="space-y-4">
                <p className="text-gray-300">{incident.details.circumstances}</p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Type: {incident.details.vessel_type}</li>
                  <li>Casualties: {incident.details.casualties}</li>
                  <li>Status: {incident.details.status}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Incidents;