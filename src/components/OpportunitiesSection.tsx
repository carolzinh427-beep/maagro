import React from 'react';
import { Warehouse, TrendingUp, Tractor, ArrowRight } from 'lucide-react';

export const OpportunitiesSection: React.FC = () => {
  return (
    <section id="oportunidades" className="py-24 bg-[#0A0C10] relative">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161920] border border-[#D4AF37]/30 text-[#E5C158] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Portfólio Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-outfit tracking-tight leading-tight mb-4">
            Encontre a oportunidade certa para o seu <span className="gold-gradient-text">negócio.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Reunimos propriedades rurais selecionadas com alto potencial produtivo, contratos de arrendamento estruturados e maquinários agrícolas procedentes para impulsionar seus resultados.
          </p>
        </div>

        {/* 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Fazendas */}
          <div className="glass-panel p-8 rounded-xl border border-slate-800/80 hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-lg bg-[#161920] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-lg">
                <Warehouse className="w-7 h-7 text-[#E5C158] group-hover:text-[#0A0C10] transition-colors" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">01 / Compra & Venda</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-outfit group-hover:text-[#E5C158] transition-colors">
                FAZENDAS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Propriedades rurais para compra e venda. Terrenos férteis, fazendas com dupla aptidão, armazenagem própria e regularidade jurídica garantida.
              </p>
            </div>

            <div>
              <a
                href="#fazendas"
                className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-bold text-sm py-3.5 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20"
              >
                <span>Ver fazendas</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Arrendamentos */}
          <div className="glass-panel p-8 rounded-xl border border-slate-800/80 hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-lg bg-[#161920] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-lg">
                <TrendingUp className="w-7 h-7 text-[#E5C158] group-hover:text-[#0A0C10] transition-colors" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">02 / Expansão Produtiva</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-outfit group-hover:text-[#E5C158] transition-colors">
                ARRENDAMENTOS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Oportunidades para produção e expansão agrícola sem necessidade de imobilização de capital. Contratos seguros de médio e longo prazo.
              </p>
            </div>

            <div>
              <a
                href="#arrendamentos"
                className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-bold text-sm py-3.5 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20"
              >
                <span>Ver arrendamentos</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Máquinas */}
          <div className="glass-panel p-8 rounded-xl border border-slate-800/80 hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-lg bg-[#161920] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-lg">
                <Tractor className="w-7 h-7 text-[#E5C158] group-hover:text-[#0A0C10] transition-colors" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">03 / Alta Tecnologia</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-outfit group-hover:text-[#E5C158] transition-colors">
                MÁQUINAS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Máquinas agrícolas disponíveis para aquisição rápida. Tratores, colheitadeiras, pulverizadores e plantadeiras de grandes marcas.
              </p>
            </div>

            <div>
              <a
                href="#maquinas"
                className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-bold text-sm py-3.5 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20"
              >
                <span>Ver máquinas</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
