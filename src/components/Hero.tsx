import React from 'react';
import { MessageSquare, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { openInterestModal } = useApp();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0A0C10]">
      
      {/* Background Image with Vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Propriedade rural M.A. Agronegócios" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/70 to-[#0A0C10]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-4">
        
        {/* Official Brand Logo Anexada */}
        <div className="flex justify-center mb-8">
          <img 
            src="/images/logo.png" 
            alt="M.A. Agronegócios Logo Oficial" 
            className="h-32 sm:h-44 md:h-52 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-outfit">
          Negócios que movem o <span className="text-[#E5C158]">agronegócio</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Compra, venda e arrendamento de propriedades rurais de grande porte, além de máquinas agrícolas selecionadas com total segurança jurídica e discrição
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#oportunidades"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-extrabold text-base px-9 py-4 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Compass className="w-5 h-5 text-[#0A0C10]" />
            <span>Ver oportunidades</span>
          </a>

          <button
            onClick={() => openInterestModal({ type: 'Compra', title: 'Atendimento Direto M.A.' })}
            className="w-full sm:w-auto bg-[#161920] hover:bg-[#1F232E] text-white font-semibold text-base px-9 py-4 rounded-xl border border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <MessageSquare className="w-5 h-5 text-[#E5C158]" />
            <span>Falar com a M.A.</span>
          </button>
        </div>

      </div>

    </section>
  );
};
