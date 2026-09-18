import React from 'react';
import { ArrowUp, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] text-slate-400 text-xs border-t border-slate-800/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="M.A. Agronegócios Logo" 
              className="h-8 object-contain"
            />
            <span className="text-slate-400 text-xs hidden sm:inline">
              Intermediação de propriedades rurais e máquinas agrícolas
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <a href="#hero" className="hover:text-[#E5C158] transition-colors">Início</a>
            <a href="#fazendas" className="hover:text-[#E5C158] transition-colors">Fazendas</a>
            <a href="#arrendamentos" className="hover:text-[#E5C158] transition-colors">Arrendamentos</a>
            <a href="#maquinas" className="hover:text-[#E5C158] transition-colors">Máquinas</a>
            <a href="#sobre" className="hover:text-[#E5C158] transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-[#E5C158] transition-colors">Contato</a>
          </nav>

          {/* WhatsApp Direct */}
          <a href="https://wa.me/5545998259664" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#E5C158] font-mono hover:underline flex items-center gap-1.5 shrink-0">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            (45) 99825-9664
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500">
          <div>
            © {new Date().getFullYear()} M.A. Agronegócios. Todos os direitos reservados
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-[#E5C158] transition-colors font-medium uppercase font-heading"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
