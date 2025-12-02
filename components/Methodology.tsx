import React from 'react';
import { METHODOLOGY } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-telion-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Cómo Trabajamos</h2>
          <p className="mt-4 text-slate-400">Un enfoque consultivo, ágil y obsesionado con el valor.</p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-telion-500/0 via-telion-500/50 to-telion-500/0 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {METHODOLOGY.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-telion-950 border-4 border-slate-800 flex items-center justify-center mb-6 group-hover:border-telion-500 transition-colors duration-300 shadow-xl relative">
                            <span className="text-3xl font-bold text-slate-600 group-hover:text-white transition-colors">{step.number}</span>
                            {/* Mobile Connector */}
                            {index < METHODOLOGY.length - 1 && (
                                <div className="lg:hidden absolute bottom-[-50px] left-1/2 w-0.5 h-12 bg-slate-800" />
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed px-4">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="mt-20 text-center">
            <a href="#contacto" className="inline-flex items-center text-telion-400 font-semibold hover:text-telion-300 transition-colors">
                Comenzar con un diagnóstico
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>
      </div>
    </section>
  );
};