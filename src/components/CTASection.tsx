import React from 'react';
import { MessageSquare, ArrowUpRight, PhoneCall } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CTASection: React.FC = () => {
  const { openInterestModal } = useApp();

  return (
    <section className="py-20 bg-[#F3F7F2] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#122613] p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D3B1E] border border-[#D4AF37]/40 text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>Atendimento Exclusivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-outfit tracking-tight leading-tight mb-4">
            Tem uma propriedade, máquina ou <br className="hidden sm:inline" />
            oportunidade para <span className="text-[#E5C158]">negociar?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Fale com a M.A. Agronegócios e encontre o melhor caminho para o seu negócio com avaliação precisa, discrição e agilidade comercial
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openInterestModal({ type: 'Venda', title: 'Avaliação de Imóvel / Máquina' })}
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-extrabold text-base px-9 py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              <span>Falar com a M.A.</span>
              <ArrowUpRight className="w-5 h-5 text-[#0A0C10]" />
            </button>

            <a
              href="https://wa.me/5545998259664?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20M.A.%20Agroneg%C3%B3cios%20sobre%20uma%20oportunidade."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1D3B1E] hover:bg-[#274F29] text-white font-semibold text-base px-8 py-4 rounded-xl border border-emerald-500/30 transition-all flex items-center justify-center gap-3"
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
