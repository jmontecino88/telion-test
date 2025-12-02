import React from 'react';
import { ABOUT_CONTENT } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-telion-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                     <h2 className="text-3xl font-bold text-white mb-6">Quiénes Somos</h2>
                     <p className="text-xl text-slate-300 leading-relaxed mb-8">
                         {ABOUT_CONTENT.mission}
                     </p>
                     <p className="text-slate-400">
                        Somos ingenieros, no vendedores. Creemos en la tecnología que funciona en el barro, en la altura y bajo presión. Nuestra reputación se construye sobre sistemas que no fallan cuando más se necesitan.
                     </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {ABOUT_CONTENT.values.map((val, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center flex items-center justify-center">
                            <span className="text-white font-semibold">{val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};