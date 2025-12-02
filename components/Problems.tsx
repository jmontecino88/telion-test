import React from 'react';
import { PROBLEMS } from '../constants';

export const Problems: React.FC = () => {
  return (
    <section id="problemas" className="py-24 bg-telion-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">El Costo de la Incertidumbre</h2>
          <p className="text-lg text-slate-400">
            En la industria pesada, lo que no se mide no se controla. Los métodos tradicionales ya no son suficientes para competir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group p-6 bg-slate-900/50 border border-white/5 rounded-xl hover:bg-slate-800/50 hover:border-telion-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="h-24 w-24 text-telion-500 -mr-8 -mt-8 rotate-12" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-telion-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-telion-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-telion-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
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