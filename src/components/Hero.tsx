import React from 'react';
import { MessageSquare, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { openInterestModal } = useApp();

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pb-16 bg-[#0A0C10] border-b border-[#D4AF37]/30">
      
      {/* Background Image with Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/hero.jpg" 
          alt="Propriedade rural M.A. Agronegócios" 
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/70 to-[#0A0C10]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Transparent Official Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/images/logo.png" 
            alt="M.A. Agronegócios Logo Oficial" 
            className="h-28 sm:h-40 md:h-48 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Headline - CAIXA ALTA */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wide leading-tight mb-4 font-heading uppercase">
          NEGÓCIOS QUE MOVEM O <span className="text-[#E5C158]">AGRONEGÓCIO</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Compra, venda e arrendamento de propriedades rurais de grande porte, além de máquinas agrícolas selecionadas com total segurança jurídica e discrição
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#oportunidades"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-extrabold text-sm px-7 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase font-heading"
          >
            <Compass className="w-4 h-4 text-[#0A0C10]" />
            <span>Ver oportunidades</span>
          </a>

          <button
            onClick={() => openInterestModal({ type: 'Compra', title: 'Atendimento Direto M.A.' })}
            className="w-full sm:w-auto bg-[#161920] hover:bg-[#1F232E] text-white font-bold text-sm px-7 py-3 rounded-xl border border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center gap-2 uppercase font-heading"
          >
            <MessageSquare className="w-4 h-4 text-[#E5C158]" />
            <span>Falar com a M.A.</span>
          </button>
        </div>

      </div>

    </section>
  );
};
