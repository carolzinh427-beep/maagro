import React from 'react';
import { Phone, Mail, Instagram, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactSection: React.FC = () => {
  const { openInterestModal } = useApp();

  return (
    <section id="contato" className="py-24 bg-[#0D0F14] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161920] border border-[#D4AF37]/30 text-[#E5C158] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Canais Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Entre em Contato com a <span className="gold-gradient-text">M.A. Agronegócios</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Estamos à disposição para atender proprietários, investidores e produtores rurais com total sigilo e agilidade.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: WhatsApp */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-[#D4AF37]/60 transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-mono uppercase block">WhatsApp Atendimento</span>
            <h4 className="text-lg font-bold text-white mt-1 mb-3 font-mono">(45) 99825-9664</h4>
            <a
              href="https://wa.me/5545998259664?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20um%20atendimento%20com%20a%20M.A.%20Agroneg%C3%B3cios."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-gradient-bg text-[#0A0C10] font-bold text-xs py-2.5 rounded block text-center shadow-md"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Card 2: E-mail */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-[#D4AF37]/60 transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#E5C158] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-mono uppercase block">E-mail Comercial</span>
            <h4 className="text-sm font-bold text-white mt-1 mb-3 truncate">contato@maagronegocios.com.br</h4>
            <button
              onClick={() => openInterestModal({ type: 'Compra', title: 'Contato via E-mail' })}
              className="w-full bg-[#161920] hover:bg-[#1F232E] text-slate-200 border border-slate-700/80 font-bold text-xs py-2.5 rounded block text-center"
            >
              Enviar Mensagem
            </button>
          </div>

          {/* Card 3: Instagram */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-[#D4AF37]/60 transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-mono uppercase block">Instagram Oficial</span>
            <h4 className="text-sm font-bold text-white mt-1 mb-3 font-mono">@ma_agronegocios</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#161920] hover:bg-[#1F232E] text-slate-200 border border-slate-700/80 font-bold text-xs py-2.5 rounded block text-center"
            >
              Seguir no Instagram
            </a>
          </div>

          {/* Card 4: Localização */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-[#D4AF37]/60 transition-all text-center group">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-400 font-mono uppercase block">Sede Operacional</span>
            <h4 className="text-sm font-bold text-white mt-1 mb-3">Cascavel / PR • Brasil</h4>
            <span className="text-[11px] text-slate-400 block font-mono">Atendimento Nacional</span>
          </div>

        </div>

      </div>
    </section>
  );
};
