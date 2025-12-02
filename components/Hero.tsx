import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590246237887-1755866fa61d?q=80&w=2670&auto=format&fit=crop"
          alt="Industrial Automation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-telion-950 via-telion-950/80 to-telion-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-telion-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-telion-500/10 border border-telion-500/20 text-telion-400 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-telion-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-telion-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide uppercase">Ingeniería de Datos Industrial</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto">
          {HERO_CONTENT.headline}
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          {HERO_CONTENT.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contacto" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-telion-500 hover:bg-telion-400 rounded-lg transition-all duration-200 shadow-lg shadow-telion-500/25 hover:shadow-telion-500/40 w-full sm:w-auto"
          >
            {HERO_CONTENT.ctaPrimary}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#soluciones" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 w-full sm:w-auto"
          >
            {HERO_CONTENT.ctaSecondary}
            <ChevronRight className="ml-2 h-5 w-5 opacity-50" />
          </a>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-telion-950 to-transparent z-20"></div>
    </div>
  );
};