import React from 'react';
import { Mail, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactSection: React.FC = () => {
  const { openInterestModal } = useApp();

  return (
    <section id="contato" className="py-24 bg-[#EBF2EA] relative border-t border-[#D4E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D3B1E] text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>Canais Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122613] font-outfit tracking-tight">
            Entre em Contato com a <span className="text-[#B8860B]">M.A. Agronegócios</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Estamos à disposição para atender proprietários, investidores e produtores rurais com total sigilo e agilidade
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-[#D9E5DA] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-mono uppercase font-semibold block">WhatsApp Atendimento</span>
            <h4 className="text-lg font-extrabold text-[#122613] mt-1 mb-3 font-mono">(45) 99825-9664</h4>
            <a
              href="https://wa.me/5545998259664?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20um%20atendimento%20com%20a%20M.A.%20Agroneg%C3%B3cios."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-bold text-xs py-2.5 rounded-xl block text-center shadow-sm"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Card 2: E-mail */}
          <div className="bg-white p-6 rounded-2xl border border-[#D9E5DA] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-[#1D3B1E]/10 border border-[#1D3B1E]/30 text-[#1D3B1E] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-mono uppercase font-semibold block">E-mail Comercial</span>
            <h4 className="text-sm font-bold text-[#122613] mt-1 mb-3 truncate">contato@maagronegocios.com.br</h4>
            <button
              onClick={() => openInterestModal({ type: 'Compra', title: 'Contato via E-mail' })}
              className="w-full bg-[#F3F7F2] hover:bg-[#E4EDE2] text-[#122613] border border-[#D0DFD0] font-bold text-xs py-2.5 rounded-xl block text-center"
            >
              Enviar Mensagem
            </button>
          </div>

          {/* Card 3: Instagram */}
          <div className="bg-white p-6 rounded-2xl border border-[#D9E5DA] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-mono uppercase font-semibold block">Instagram Oficial</span>
            <h4 className="text-sm font-bold text-[#122613] mt-1 mb-3 font-mono">@ma_agronegocios</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#F3F7F2] hover:bg-[#E4EDE2] text-[#122613] border border-[#D0DFD0] font-bold text-xs py-2.5 rounded-xl block text-center"
            >
              Seguir no Instagram
            </a>
          </div>

          {/* Card 4: Localização */}
          <div className="bg-white p-6 rounded-2xl border border-[#D9E5DA] shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 font-mono uppercase font-semibold block">Sede Operacional</span>
            <h4 className="text-sm font-bold text-[#122613] mt-1 mb-3">Cascavel, PR, Brasil</h4>
            <span className="text-[11px] text-slate-500 block font-mono font-medium">Atendimento Nacional</span>
          </div>

        </div>

      </div>
    </section>
  );
};
