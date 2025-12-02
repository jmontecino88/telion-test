import React from 'react';
import { Hexagon, Mail, Linkedin, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Banner */}
        <div className="bg-telion-500 rounded-2xl p-8 md:p-16 text-center mb-20 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para tomar el control?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Deje de operar a ciegas. Agende una reunión exploratoria de 30 minutos para evaluar su madurez tecnológica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="mailto:contacto@telion.cl" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-telion-600 font-bold rounded-lg hover:bg-slate-100 transition-colors"
                >
                    <Mail className="mr-2 h-5 w-5" />
                    Agendar Reunión
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <Hexagon className="h-6 w-6 text-telion-500 fill-current" />
                    <span className="font-bold text-xl tracking-tighter text-white">TELION</span>
                </div>
                <p className="text-slate-400 max-w-sm">
                    Servicios tecnológicos avanzados para industrias intensivas en activos. Minería, Energía y Operaciones Remotas.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-semibold mb-6">Enlaces</h4>
                <ul className="space-y-3">
                    <li><a href="#problemas" className="text-slate-400 hover:text-white transition-colors">Problemas</a></li>
                    <li><a href="#soluciones" className="text-slate-400 hover:text-white transition-colors">Soluciones</a></li>
                    <li><a href="#metodologia" className="text-slate-400 hover:text-white transition-colors">Metodología</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-6">Contacto</h4>
                <ul className="space-y-3">
                    <li className="flex items-center text-slate-400">
                        <Mail className="h-4 w-4 mr-2" />
                        contacto@telion.cl
                    </li>
                    <li className="flex items-center text-slate-400">
                        <Linkedin className="h-4 w-4 mr-2" />
                        /company/telion
                    </li>
                    <li className="flex items-center text-slate-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        Santiago, Chile
                    </li>
                </ul>
            </div>
        </div>

        <div className="pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} Telion Technologies. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-400">Privacidad</a>
                <a href="#" className="hover:text-slate-400">Términos</a>
            </div>
        </div>
      </div>
    </footer>
  );
};