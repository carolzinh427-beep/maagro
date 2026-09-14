import React from 'react';
import { ArrowDown, MessageSquare, Compass, ShieldCheck, Tractor, Warehouse, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { openInterestModal, properties, machines } = useApp();

  const fazendasCount = properties.filter(p => p.negotiationType === 'Venda').length;
  const arrendamentosCount = properties.filter(p => p.negotiationType === 'Arrendamento').length;
  const maquinasCount = machines.length;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Propriedade rural cinematográfica M.A. Agronegócios" 
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-glow transition-transform duration-1000"
        />
        {/* Layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/80 to-[#0A0C10]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/95 via-transparent to-[#0A0C10]/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Decorative Gold Grid Accent */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161920]/90 border border-[#D4AF37]/30 text-[#E5C158] text-xs font-semibold tracking-wider uppercase mb-8 shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Intermediação de Alto Padrão no Agronegócio</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-outfit">
          Negócios que movem o <br className="hidden sm:inline" />
          <span className="gold-gradient-text drop-shadow-md">agronegócio.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-shadow">
          Compra, venda e arrendamento de propriedades rurais de grande porte, além de máquinas agrícolas selecionadas com total segurança jurídica e discrição.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#oportunidades"
            className="w-full sm:w-auto gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-extrabold text-base px-8 py-4 rounded shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
          >
            <Compass className="w-5 h-5 text-[#0A0C10]" />
            <span>Ver oportunidades</span>
          </a>

          <button
            onClick={() => openInterestModal({ type: 'Compra', title: 'Atendimento Direto M.A.' })}
            className="w-full sm:w-auto bg-[#161920]/90 hover:bg-[#1F232E] text-white font-semibold text-base px-8 py-4 rounded border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <MessageSquare className="w-5 h-5 text-[#E5C158]" />
            <span>Falar com a M.A.</span>
          </button>
        </div>

        {/* Discrete Indicators Below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          
          <a href="#fazendas" className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:border-[#D4AF37]/50 transition-all text-left">
            <div className="w-12 h-12 rounded bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
              <Warehouse className="w-6 h-6 text-[#E5C158]" />
            </div>
            <div>
              <div className="text-white font-bold text-base group-hover:text-[#E5C158] transition-colors flex items-center gap-2">
                Fazendas
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C158] font-mono">
                  {fazendasCount > 0 ? `${fazendasCount} disponíveis` : 'Disponíveis'}
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">Propriedades para compra e venda</p>
            </div>
          </a>

          <a href="#arrendamentos" className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:border-[#D4AF37]/50 transition-all text-left">
            <div className="w-12 h-12 rounded bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-[#E5C158]" />
            </div>
            <div>
              <div className="text-white font-bold text-base group-hover:text-[#E5C158] transition-colors flex items-center gap-2">
                Arrendamentos
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C158] font-mono">
                  {arrendamentosCount > 0 ? `${arrendamentosCount} ativos` : 'Em expansão'}
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">Oportunidades de produção</p>
            </div>
          </a>

          <a href="#maquinas" className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:border-[#D4AF37]/50 transition-all text-left">
            <div className="w-12 h-12 rounded bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
              <Tractor className="w-6 h-6 text-[#E5C158]" />
            </div>
            <div>
              <div className="text-white font-bold text-base group-hover:text-[#E5C158] transition-colors flex items-center gap-2">
                Máquinas Agrícolas
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C158] font-mono">
                  {maquinasCount > 0 ? `${maquinasCount} catalogadas` : 'Catalogadas'}
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">Tratores, colheitadeiras e mais</p>
            </div>
          </a>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-500 text-xs animate-bounce">
        <span>Rolar para explorar</span>
        <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
      </div>

    </section>
  );
};
