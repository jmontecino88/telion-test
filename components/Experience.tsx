import React from 'react';
import { FOUNDER_EXPERIENCE, USE_CASES } from '../constants';
import { CheckCircle2, TrendingUp, ShieldCheck, Factory } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Experience Block */}
        <div className="bg-gradient-to-br from-telion-900 to-telion-950 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">{FOUNDER_EXPERIENCE.title}</h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        {FOUNDER_EXPERIENCE.description}
                    </p>
                    <ul className="space-y-4">
                        {FOUNDER_EXPERIENCE.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-telion-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5 text-center">
                        <Factory className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
                        <span className="text-slate-300 font-medium block">Minería & Energía</span>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5 text-center">
                        <TrendingUp className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                        <span className="text-slate-300 font-medium block">Retail & Logística</span>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5 text-center col-span-2">
                        <ShieldCheck className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
                        <span className="text-slate-300 font-medium block">Operaciones Críticas</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-4">
            <div className="text-center mb-12">
                <span className="text-telion-400 uppercase tracking-widest text-sm font-semibold">Casos de Uso</span>
                <h3 className="text-3xl font-bold text-white mt-2">Soluciones Aplicadas</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {USE_CASES.map((useCase, index) => (
                    <div key={index} className="bg-telion-950 p-8 rounded-2xl border-l-4 border-telion-500 shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold rounded-full mb-4">
                            {useCase.industry}
                        </span>
                        <h4 className="text-xl font-bold text-white mb-4">{useCase.title}</h4>
                        
                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="text-slate-500 font-semibold block mb-1">Desafío:</span>
                                <p className="text-slate-300">{useCase.challenge}</p>
                            </div>
                            <div>
                                <span className="text-telion-400 font-semibold block mb-1">Solución Telion:</span>
                                <p className="text-slate-300">{useCase.solution}</p>
                            </div>
                             <div className="pt-4 border-t border-white/10 mt-4">
                                <span className="text-emerald-400 font-semibold block mb-1">Impacto:</span>
                                <p className="text-slate-300">{useCase.impact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};