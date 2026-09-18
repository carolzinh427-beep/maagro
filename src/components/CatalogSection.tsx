import React, { useState } from 'react';
import { MapPin, Maximize2, Filter, Info, Eye } from 'lucide-react';
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
    if (selectedType !== 'Todos' && item.negotiationType !== selectedType) {
      return false;
    }
    if (selectedState !== 'Todos' && item.state !== selectedState) {
      return false;
    }
    if (areaFilter === 'small' && item.areaHectares > 1000) return false;
    if (areaFilter === 'medium' && (item.areaHectares <= 1000 || item.areaHectares > 3000)) return false;
    if (areaFilter === 'large' && item.areaHectares <= 3000) return false;

    return true;
  });

  const availableStates = ['Todos', ...Array.from(new Set(properties.map(p => p.state)))];

  return (
    <section id="fazendas" className="py-16 sm:py-24 bg-[#EBF2EA] relative border-t border-b border-[#D4E2D5]">
      
      {/* Anchor for Arrendamentos link */}
      <div id="arrendamentos" className="absolute top-0" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3B1E] text-[#E5C158] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <span>Catálogo de Propriedades</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#122613] font-heading uppercase tracking-wide">
              FAZENDAS E ARRENDAMENTOS <span className="text-[#B8860B]">DISPONÍVEIS</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-2xl">
              Propriedades com alta capacidade produtiva, documentação regularizada e oportunidades de expansão agrícola
            </p>
          </div>

          {/* Demonstrative Content Badge */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#C5DAC6] text-[#1D3B1E] text-xs font-semibold shadow-sm">
            <Info className="w-4 h-4 text-[#B8860B] shrink-0" />
            <span>Dados demonstrativos e editáveis via Painel Admin</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-[#D9E5DA] mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            
            {/* Negotiation Type Tabs */}
            <div className="flex items-center gap-1.5 bg-[#F3F7F2] p-1 sm:p-1.5 rounded-xl border border-[#D0DFD0] overflow-x-auto">
              {(['Todos', 'Venda', 'Arrendamento'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap uppercase font-heading ${
                    selectedType === type
                      ? 'bg-[#D4AF37] text-[#0A0C10] shadow-sm'
                      : 'text-slate-600 hover:text-[#122613] hover:bg-white'
                  }`}
                >
                  {type === 'Todos' ? 'Todas as Ofertas' : type === 'Venda' ? 'Compra e Venda' : 'Arrendamentos'}
                </button>
              ))}
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 lg:max-w-xl">
              {/* State Filter */}
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 flex items-center gap-1 font-heading">
                  <MapPin className="w-3 h-3 text-[#B8860B]" />
                  <span>Estado e Região</span>
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#D0DFD0] rounded-xl px-3 py-1.5 text-xs text-[#122613] font-semibold focus:outline-none focus:border-[#D4AF37]"
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
                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1 flex items-center gap-1 font-heading">
                  <Maximize2 className="w-3 h-3 text-[#B8860B]" />
                  <span>Área em Hectares</span>
                </label>
                <select
                  value={areaFilter}
                  onChange={(e) => setAreaFilter(e.target.value as any)}
                  className="w-full bg-[#F8FAFC] border border-[#D0DFD0] rounded-xl px-3 py-1.5 text-xs text-[#122613] font-semibold focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Todas">Todas as Áreas</option>
                  <option value="small">Até 1000 ha</option>
                  <option value="medium">1000 ha a 3000 ha</option>
                  <option value="large">Acima de 3000 ha</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Property Grid: 2 columns on mobile (grid-cols-2), 3 on desktop */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center border border-[#D9E5DA] my-8 shadow-sm">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#122613] mb-2 uppercase font-heading">NENHUMA PROPRIEDADE ENCONTRADA</h3>
            <p className="text-slate-600 text-xs max-w-md mx-auto mb-4">
              Nenhum imóvel corresponde aos filtros selecionados no momento
            </p>
            <button
              onClick={() => {
                setSelectedType('Todos');
                setSelectedState('Todos');
                setAreaFilter('Todas');
              }}
              className="bg-[#D4AF37] text-[#0A0C10] font-bold text-xs px-5 py-2 rounded-xl uppercase font-heading"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="green-card rounded-xl sm:rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container - Compact on mobile */}
                  <div className="relative h-28 sm:h-48 md:h-56 overflow-hidden bg-slate-900">
                    <img
                      src={prop.photos[0]}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/80 via-transparent to-black/30" />

                    {/* Negotiation Type Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-xs font-black uppercase tracking-wider ${
                        prop.negotiationType === 'Venda'
                          ? 'bg-[#D4AF37] text-[#0A0C10] shadow-sm'
                          : 'bg-[#1D3B1E] text-emerald-300 font-bold border border-emerald-500/30'
                      }`}>
                        {prop.negotiationType}
                      </span>
                    </div>

                    {/* Location & Area Floating Info */}
                    <div className="absolute bottom-1.5 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-[10px] sm:text-xs text-white">
                      <div className="flex items-center gap-1 font-semibold bg-[#0A0C10]/85 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md backdrop-blur-md">
                        <MapPin className="w-3 h-3 text-[#E5C158] shrink-0" />
                        <span className="truncate max-w-[80px] sm:max-w-none">{prop.city}</span>
                      </div>
                      <div className="flex items-center gap-1 font-black text-[#E5C158] bg-[#0A0C10]/85 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md backdrop-blur-md font-mono">
                        <span>{prop.areaHectares.toLocaleString('pt-BR')} ha</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-5">
                    <h3 className="text-sm sm:text-lg font-extrabold text-[#122613] mb-1.5 font-heading uppercase group-hover:text-[#B8860B] transition-colors leading-tight line-clamp-1">
                      {prop.name}
                    </h3>
                    
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-tight sm:leading-relaxed line-clamp-2 mb-3">
                      {prop.shortDescription}
                    </p>

                    {/* Feature tags */}
                    <div className="hidden sm:flex flex-wrap gap-1 mb-3">
                      {prop.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="text-[10px] bg-[#F3F7F2] border border-[#D0DFD0] text-[#1D3B1E] px-2 py-0.5 rounded font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-2 border-t border-[#E8F0E9] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase font-mono font-bold">Investimento</span>
                    <span className="text-xs sm:text-sm font-black text-[#1D3B1E] font-mono">{prop.priceDisplay}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProperty(prop)}
                    className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-black text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg flex items-center justify-center gap-1 uppercase font-heading transition-all shadow-sm"
                  >
                    <span>Ver detalhes</span>
                    <Eye className="w-3 h-3 text-[#0A0C10]" />
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
