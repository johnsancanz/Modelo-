
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-8 md:px-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Bloque Superior: Logo y Descripción */}
        <div className="mb-20 space-y-8">
          <div className="text-3xl md:text-4xl font-black tracking-tighter flex items-center">
            <span>Grow</span>
            <span className="bg-gradient-to-r from-sky-400 to-purple-300 bg-clip-text text-transparent ml-1 px-1 italic font-serif">MED</span>
          </div>
          
          <div className="max-w-md space-y-6">
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              Building custom AI systems and automation for medical practices who want to scale their impact.
            </p>
            
            <a 
              href="mailto:hola@growmed.ai" 
              className="block text-white/90 text-lg md:text-xl font-medium hover:text-primary transition-colors"
            >
              hola@growmed.ai
            </a>
          </div>
        </div>

        {/* Divisor sutil */}
        <div className="w-full h-px bg-white/5 mb-10" />

        {/* Fila Inferior: Copyright y Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-white/30 font-medium">
          <p>© 2025 Growth Intelligence. All Rights Reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
