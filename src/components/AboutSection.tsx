import React from 'react';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#EBF2EA] relative border-t border-b border-[#D4E2D5]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5DAC6] shadow-xl">
              <img
                src="/images/hero.jpg"
                alt="M.A. Agronegócios no campo"
                className="w-full h-64 sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent opacity-85" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-[#D0DFD0] shadow-lg text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1D3B1E] text-[#E5C158] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#122613] font-bold text-sm font-outfit">Segurança Jurídica e Sigilo</h4>
                    <p className="text-slate-600 text-xs mt-0.5">Auditoria prévia de certidões e mapas cartográficos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Card */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#1D3B1E] text-[#E5C158] border border-[#D4AF37]/40 p-4 rounded-xl shadow-xl">
              <div className="text-xs font-mono uppercase font-bold text-[#E5C158]">Posicionamento</div>
              <div className="text-sm font-extrabold text-white mt-1">Intermediação sob medida</div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D3B1E] text-[#E5C158] text-xs font-bold uppercase tracking-wider shadow-sm">
              <span>Sobre a M.A. Agronegócios</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#122613] font-outfit tracking-tight leading-tight">
              Conectando oportunidades ao <span className="text-[#B8860B]">campo</span>
            </h2>

            <p className="text-slate-700 text-base leading-relaxed font-medium">
              A M.A. Agronegócios é referência em negócios rurais de alto padrão no Brasil. Atuamos com extrema precisão na intermediação comercial de grandes fazendas para compra e venda, contratos de arrendamento estruturados e comercialização de máquinas agrícolas de ponta
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Entendemos que transações rurais envolvem grandes patrimônios e decisões estratégicas para gerações. Por isso, nossa equipe alia conhecimento técnico agronômico, governança jurídica rigorosa e ampla rede de contatos entre produtores e investidores
            </p>

            {/* Institutional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#D9E5DA] shadow-sm">
                <Scale className="w-5 h-5 text-[#1D3B1E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#122613] text-sm font-bold">Transparência e Conformidade</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Análise completa de CAR, GEO e certidões imobiliárias</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#D9E5DA] shadow-sm">
                <FileText className="w-5 h-5 text-[#1D3B1E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#122613] text-sm font-bold">Valoração Assertiva</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Avaliação fundamentada na capacidade real de produção por hectare</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
