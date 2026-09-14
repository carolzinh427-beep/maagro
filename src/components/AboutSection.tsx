import React from 'react';
import { ShieldCheck, Award, Users, Scale, FileText, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0D0F14] relative border-t border-b border-slate-800/60">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="M.A. Agronegócios no campo"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent opacity-90" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel-gold p-5 rounded-xl text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#D4AF37] text-[#0A0C10] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm font-outfit">Segurança Jurídica & Sigilo</h4>
                    <p className="text-slate-300 text-xs mt-0.5">Auditoria prévia de certidões e mapas cartográficos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Card */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#161920] border border-[#D4AF37]/40 p-4 rounded-xl shadow-xl">
              <div className="text-xs font-mono text-[#D4AF37] uppercase font-bold">Posicionamento</div>
              <div className="text-sm font-extrabold text-white mt-1">Intermediação sob medida</div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161920] border border-[#D4AF37]/30 text-[#E5C158] text-xs font-semibold uppercase tracking-wider">
              <span>Sobre a M.A. Agronegócios</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-outfit tracking-tight leading-tight">
              Conectando oportunidades ao <span className="gold-gradient-text">campo.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              A **M.A. Agronegócios** é referência em negócios rurais de alto padrão no Brasil. Atuamos com extrema precisão na intermediação comercial de grandes fazendas para compra e venda, contratos de arrendamento estruturados e comercialização de máquinas agrícolas de ponta.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Entendemos que transações rurais envolvem grandes patrimônios e decisões estratégicas para gerações. Por isso, nossa equipe alia conhecimento técnico agronômico, governança jurídica rigorosa e ampla rede de contatos entre produtores e investidores.
            </p>

            {/* Institutional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#12151C] border border-slate-800">
                <Scale className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-bold">Transparência & Conformidade</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Análise completa de CAR, GEO e certidões imobiliárias.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#12151C] border border-slate-800">
                <FileText className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-bold">Valoração Assertiva</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Avaliação fundamentada na capacidade real de produção por ha.</p>
                </div>
              </div>
            </div>

            {/* Metrics Counters with Editable Placeholders */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              
              <div className="glass-panel p-4 rounded-xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono">
                  [X]+
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Oportunidades Negociadas
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Placeholder Editável</div>
              </div>

              <div className="glass-panel p-4 rounded-xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono">
                  [X]
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Anos de Experiência
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Placeholder Editável</div>
              </div>

              <div className="glass-panel p-4 rounded-xl text-center border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono">
                  [X]
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Clientes Atendidos
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Placeholder Editável</div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
