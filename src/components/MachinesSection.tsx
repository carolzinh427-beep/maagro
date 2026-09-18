import React, { useState } from 'react';
import { Clock, Calendar, MapPin, Eye, Info, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MachineCategory } from '../types';

export const MachinesSection: React.FC = () => {
  const { machines, setSelectedMachine } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | MachineCategory>('Todas');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');

  const categories: ('Todas' | MachineCategory)[] = [
    'Todas',
    'Tratores',
    'Colheitadeiras',
    'Plantadeiras',
    'Pulverizadores',
    'Implementos'
  ];

  const availableBrands = ['Todas', ...Array.from(new Set(machines.map(m => m.brand)))];

  const filteredMachines = machines.filter(machine => {
    if (selectedCategory !== 'Todas' && machine.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand !== 'Todas' && machine.brand !== selectedBrand) {
      return false;
    }
    return true;
  });

  return (
    <section id="maquinas" className="py-16 sm:py-24 bg-[#F3F7F2] relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#122613] font-heading uppercase tracking-wide">
              MÁQUINAS AGRÍCOLAS <span className="text-[#B8860B]">DISPONÍVEIS</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-2xl">
              Equipamentos de alta performance das melhores marcas do mercado revisados e prontos para operação em campo
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#C5DAC6] text-[#1D3B1E] text-xs font-semibold shadow-sm">
            <Info className="w-4 h-4 text-[#B8860B] shrink-0" />
            <span>Seminovo e novo sob consulta</span>
          </div>
        </div>

        {/* Category Tabs & Filter Toolbar */}
        <div className="space-y-3 mb-8">
          
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold uppercase font-heading whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#0A0C10] shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#122613] border border-[#D0DFD0] hover:bg-[#EAF2EA]'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Secondary Brand Filter */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#D9E5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-slate-500 uppercase font-mono font-bold mr-1">Marca:</span>
              {availableBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                    selectedBrand === brand
                      ? 'bg-[#1D3B1E] text-[#E5C158] font-bold'
                      : 'text-slate-600 hover:text-[#122613] bg-[#F3F7F2]'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Exibindo {filteredMachines.length} item(s)
            </span>
          </div>

        </div>

        {/* Machine Cards Grid */}
        {filteredMachines.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center border border-[#D9E5DA] my-8 shadow-sm">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#122613] mb-2 uppercase font-heading">NENHUMA MÁQUINA ENCONTRADA</h3>
            <p className="text-slate-600 text-xs max-w-md mx-auto mb-4">
              Altere os filtros acima para visualizar outras opções de tratores, colheitadeiras e pulverizadores
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todas');
                setSelectedBrand('Todas');
              }}
              className="bg-[#D4AF37] text-[#0A0C10] font-bold text-xs px-5 py-2 rounded-xl uppercase font-heading"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="green-card rounded-xl sm:rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-28 sm:h-48 md:h-56 overflow-hidden bg-slate-900">
                    <img
                      src={machine.photos[0]}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/80 via-transparent to-black/30" />

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#1D3B1E] text-[#E5C158] border border-emerald-500/30 text-[9px] sm:text-xs font-bold uppercase backdrop-blur-md">
                        {machine.category}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-1.5 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 text-[10px] sm:text-xs text-white bg-[#0A0C10]/85 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md backdrop-blur-md">
                      <MapPin className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span className="truncate max-w-[80px] sm:max-w-none">{machine.location}</span>
                    </div>
                  </div>

                  {/* Machine Details */}
                  <div className="p-3 sm:p-5">
                    <div className="text-[10px] text-[#B8860B] font-mono font-bold uppercase mb-1">
                      {machine.brand} {machine.model}
                    </div>

                    <h3 className="text-sm sm:text-lg font-extrabold text-[#122613] mb-2 font-heading uppercase group-hover:text-[#B8860B] transition-colors leading-tight line-clamp-1">
                      {machine.name}
                    </h3>

                    {/* Quick Specs Pills */}
                    <div className="grid grid-cols-2 gap-1.5 mb-3 p-2 rounded-lg bg-[#F3F7F2] border border-[#D0DFD0] text-[10px] sm:text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#1D3B1E] shrink-0" />
                        <div>
                          <span className="font-bold text-[#122613]">{machine.year}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#1D3B1E] shrink-0" />
                        <div>
                          <span className="font-bold text-[#122613] font-mono">{machine.hoursUsed.toLocaleString('pt-BR')} h</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-[11px] sm:text-xs leading-tight sm:leading-relaxed line-clamp-2">
                      {machine.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-2 border-t border-[#E8F0E9] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase font-mono font-bold">Investimento</span>
                    <span className="text-xs sm:text-sm font-black text-[#1D3B1E] font-mono">{machine.priceDisplay}</span>
                  </div>

                  <button
                    onClick={() => setSelectedMachine(machine)}
                    className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0C10] font-black text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg flex items-center justify-center gap-1 uppercase font-heading transition-all shadow-sm"
                  >
                    <span>Ver máquina</span>
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
