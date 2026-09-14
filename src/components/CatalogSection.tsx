import React, { useState } from 'react';
import { MapPin, Maximize2, ShieldCheck, ArrowRight, Filter, Info, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Property } from '../types';

export const CatalogSection: React.FC = () => {
  const { properties, setSelectedProperty } = useApp();
  
  // Filters State
  const [selectedType, setSelectedType] = useState<'Todos' | 'Venda' | 'Arrendamento'>('Todos');
  const [selectedState, setSelectedState] = useState<string>('Todos');
  const [areaFilter, setAreaFilter] = useState<'Todas' | 'small' | 'medium' | 'large'>('Todas');

  // Filter Logic
  const filteredProperties = properties.filter((item) => {
    // Type Filter
    if (selectedType !== 'Todos' && item.negotiationType !== selectedType) {
      return false;
    }

    // State Filter
    if (selectedState !== 'Todos' && item.state !== selectedState) {
      return false;
    }

    // Area Filter
    if (areaFilter === 'small' && item.areaHectares > 1000) return false;
    if (areaFilter === 'medium' && (item.areaHectares <= 1000 || item.areaHectares > 3000)) return false;
    if (areaFilter === 'large' && item.areaHectares <= 3000) return false;

    return true;
  });

  const availableStates = ['Todos', ...Array.from(new Set(properties.map(p => p.state)))];

  return (
    <section id="fazendas" className="py-24 bg-[#0D0F14] relative border-t border-b border-slate-800/60">
      
      {/* Anchor for Arrendamentos link */}
      <div id="arrendamentos" className="absolute top-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161920] border border-[#D4AF37]/30 text-[#E5C158] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Catálogo de Propriedades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
              Fazendas e Arrendamentos <span className="gold-gradient-text">Disponíveis</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Propriedades com alta capacidade produtiva, documentação regularizada e oportunidades de expansão agrícola.
            </p>
          </div>

          {/* Demonstrative Content Badge */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-2 rounded bg-[#161920] border border-amber-500/20 text-amber-300 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Dados demonstrativos e editáveis via Painel Admin</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="glass-panel p-5 rounded-xl border border-slate-800 mb-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Negotiation Type Tabs */}
            <div className="flex items-center gap-2 bg-[#0A0C10] p-1.5 rounded-lg border border-slate-800">
              {(['Todos', 'Venda', 'Arrendamento'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2 rounded text-xs font-bold transition-all duration-200 ${
                    selectedType === type
                      ? 'gold-gradient-bg text-[#0A0C10] shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-[#161920]'
                  }`}
                >
                  {type === 'Todos' ? 'Todas as Ofertas' : type === 'Venda' ? 'Compra e Venda' : 'Arrendamentos'}
                </button>
              ))}
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 lg:max-w-xl">
              {/* State Filter */}
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>Estado / Região</span>
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-[#161920] border border-slate-700/80 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                >
                  {availableStates.map((st) => (
                    <option key={st} value={st}>
                      {st === 'Todos' ? 'Todos os Estados' : st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area Range Filter */}
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#D4AF37]" />
                  <span>Área em Hectares</span>
                </label>
                <select
                  value={areaFilter}
                  onChange={(e) => setAreaFilter(e.target.value as any)}
                  className="w-full bg-[#161920] border border-slate-700/80 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Todas">Todas as Áreas</option>
                  <option value="small">Até 1.000 ha</option>
                  <option value="medium">1.000 ha a 3.000 ha</option>
                  <option value="large">Acima de 3.000 ha</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="glass-panel p-12 rounded-xl text-center border border-slate-800 my-8">
            <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Nenhuma propriedade encontrada</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              Nenhum imóvel corresponde aos filtros selecionados no momento. Tente alterar os critérios de busca ou entre em contato direto.
            </p>
            <button
              onClick={() => {
                setSelectedType('Todos');
                setSelectedState('Todos');
                setAreaFilter('Todas');
              }}
              className="gold-gradient-bg text-[#0A0C10] font-bold text-xs px-6 py-2.5 rounded"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="glass-panel rounded-xl overflow-hidden border border-slate-800/90 hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-44 sm:h-64 overflow-hidden bg-slate-900">
                    <img
                      src={prop.photos[0]}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/40" />

                    {/* Negotiation Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded text-xs font-extrabold uppercase tracking-wider ${
                        prop.negotiationType === 'Venda'
                          ? 'gold-gradient-bg text-[#0A0C10] shadow-lg'
                          : 'bg-emerald-500 text-black shadow-lg font-bold'
                      }`}>
                        {prop.negotiationType}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-bold backdrop-blur-md ${
                        prop.status === 'Disponível'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                      }`}>
                        {prop.status}
                      </span>
                    </div>

                    {/* Location & Area Floating Info */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                      <div className="flex items-center gap-1.5 font-medium bg-[#0A0C10]/80 px-2.5 py-1 rounded backdrop-blur-md">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{prop.city} - {prop.state}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-extrabold text-[#E5C158] bg-[#0A0C10]/80 px-2.5 py-1 rounded backdrop-blur-md font-mono">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{prop.areaHectares.toLocaleString('pt-BR')} ha</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-outfit group-hover:text-[#E5C158] transition-colors">
                      {prop.name}
                    </h3>
                    
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                      {prop.shortDescription}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prop.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="text-[11px] bg-[#161920] border border-slate-800 text-slate-300 px-2.5 py-1 rounded">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">Valor Pretendido</span>
                    <span className="text-sm font-bold text-[#E5C158] font-mono">{prop.priceDisplay}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProperty(prop)}
                    className="gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-extrabold text-xs px-4 py-2.5 rounded flex items-center gap-1.5 transition-all shadow-md group-hover:shadow-[#D4AF37]/30"
                  >
                    <span>Ver detalhes</span>
                    <Eye className="w-3.5 h-3.5 text-[#0A0C10]" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
