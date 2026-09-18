import React from 'react';
import { ArrowUp, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="M.A. Agronegócios Logo" 
                className="h-10 object-contain"
              />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Especializada na compra, venda e arrendamento de propriedades rurais de alto padrão, além de intermediação de máquinas agrícolas em todo o território nacional
            </p>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">WhatsApp de Atendimento</span>
              <a href="https://wa.me/5545998259664" target="_blank" rel="noreferrer" className="text-sm font-bold text-[#E5C158] font-mono hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                (45) 99825-9664
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#E5C158] transition-colors">Início</a></li>
              <li><a href="#fazendas" className="hover:text-[#E5C158] transition-colors">Fazendas à Venda</a></li>
              <li><a href="#arrendamentos" className="hover:text-[#E5C158] transition-colors">Oportunidades de Arrendamento</a></li>
              <li><a href="#maquinas" className="hover:text-[#E5C158] transition-colors">Máquinas Agrícolas</a></li>
              <li><a href="#sobre" className="hover:text-[#E5C158] transition-colors">Sobre a Empresa</a></li>
              <li><a href="#contato" className="hover:text-[#E5C158] transition-colors">Contato e Localização</a></li>
            </ul>
          </div>

          {/* Institutional Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">M.A. Agronegócios</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Plataforma comercial e institucional desenvolvida para intermediação de propriedades rurais de grande porte e máquinas agrícolas com atendimento sigiloso e presença em todo o país
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} M.A. Agronegócios. Todos os direitos reservados
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#E5C158] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
