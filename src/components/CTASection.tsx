import React from 'react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CTASection: React.FC = () => {
  const { openInterestModal } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-[#F3F7F2] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#122613] p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl text-center relative overflow-hidden">
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading uppercase tracking-wide leading-tight mb-4">
            TEM UMA PROPRIEDADE, MÁQUINA OU <br className="hidden sm:inline" />
            OPORTUNIDADE PARA <span className="text-[#E5C158]">NEGOCIAR?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Fale com a M.A. Agronegócios e encontre o melhor caminho para o seu negócio com avaliação precisa, discrição e agilidade comercial
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => openInterestModal({ type: 'Venda', title: 'Avaliação de Imóvel / Máquina' })}
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-black text-sm px-8 py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all uppercase font-heading"
            >
              <span>Falar com a M.A.</span>
              <ArrowUpRight className="w-5 h-5 text-[#0A0C10]" />
            </button>

            <a
              href="https://wa.me/5545998259664?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20M.A.%20Agroneg%C3%B3cios%20sobre%20uma%20oportunidade."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1D3B1E] hover:bg-[#274F29] text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct (45) 99825-9664</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
