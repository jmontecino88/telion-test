import React from 'react';
import { SOLUTIONS } from '../constants';

export const Solutions: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-telion-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-telion-400 font-semibold tracking-wider uppercase text-sm">Nuestras Soluciones</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Ingeniería para la Eficiencia</h2>
          <p className="text-xl text-slate-400 max-w-3xl">
            Dejamos de lado las "cajas negras". Implementamos soluciones transparentes y escalables enfocadas en resultados operativos tangibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-14 w-14 rounded-full bg-telion-950 border border-telion-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] text-telion-400">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{sol.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};