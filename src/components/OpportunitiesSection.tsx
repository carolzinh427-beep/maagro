import React from 'react';
import { Warehouse, TrendingUp, Tractor, ArrowRight } from 'lucide-react';

export const OpportunitiesSection: React.FC = () => {
  return (
    <section id="oportunidades" className="py-24 bg-[#F3F7F2] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5EDE3] border border-[#C5DAC6] text-[#1D3B1E] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Portfólio Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#122613] font-outfit tracking-tight leading-tight mb-4">
            Encontre a oportunidade certa para o seu <span className="text-[#B8860B]">negócio</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Reunimos propriedades rurais selecionadas com alto potencial produtivo, contratos de arrendamento estruturados e maquinários agrícolas procedentes para impulsionar seus resultados
          </p>
        </div>

        {/* 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Fazendas */}
          <div className="green-card p-8 rounded-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#1D3B1E] text-[#E5C158] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A0C10] transition-all duration-300 shadow-md">
                <Warehouse className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-extrabold">Compra e Venda</span>
              <h3 className="text-2xl font-bold text-[#122613] mt-1 mb-3 font-outfit group-hover:text-[#B8860B] transition-colors">
                FAZENDAS
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Propriedades rurais para compra e venda com terrenos férteis, dupla aptidão, armazenagem própria e regularidade jurídica garantida
              </p>
            </div>

            <div>
              <a
                href="#fazendas"
                className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Ver fazendas</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Arrendamentos */}
          <div className="green-card p-8 rounded-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#1D3B1E] text-[#E5C158] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A0C10] transition-all duration-300 shadow-md">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-extrabold">Expansão Produtiva</span>
              <h3 className="text-2xl font-bold text-[#122613] mt-1 mb-3 font-outfit group-hover:text-[#B8860B] transition-colors">
                ARRENDAMENTOS
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Oportunidades para produção e expansão agrícola sem necessidade de imobilização de capital em contratos seguros de médio e longo prazo
              </p>
            </div>

            <div>
              <a
                href="#arrendamentos"
                className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Ver arrendamentos</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Máquinas */}
          <div className="green-card p-8 rounded-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#1D3B1E] text-[#E5C158] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A0C10] transition-all duration-300 shadow-md">
                <Tractor className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-extrabold">Alta Tecnologia</span>
              <h3 className="text-2xl font-bold text-[#122613] mt-1 mb-3 font-outfit group-hover:text-[#B8860B] transition-colors">
                MÁQUINAS
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Máquinas agrícolas disponíveis para aquisição rápida como tratores, colheitadeiras, pulverizadores e plantadeiras de grandes marcas
              </p>
            </div>

            <div>
              <a
                href="#maquinas"
                className="w-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
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
