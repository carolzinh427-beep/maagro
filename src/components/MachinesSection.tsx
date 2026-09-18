import React, { useState } from 'react';
import { Tractor, Clock, Calendar, MapPin, Eye, Info, Filter } from 'lucide-react';
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
    <section id="maquinas" className="py-24 bg-[#F3F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D3B1E] text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Tractor className="w-4 h-4 text-[#E5C158]" />
              <span>Maquinário & Tecnologia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122613] font-outfit tracking-tight">
              Máquinas Agrícolas <span className="gold-gradient-text">Disponíveis</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Equipamentos de alta performance das melhores marcas do mercado, revisados e prontos para operação em campo.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#C5DAC6] text-[#1D3B1E] text-xs font-semibold shadow-sm">
            <Info className="w-4 h-4 text-[#B8860B] shrink-0" />
            <span>Seminovo e novo sob consulta</span>
          </div>
        </div>

        {/* Category Tabs & Filter Toolbar */}
        <div className="space-y-4 mb-10">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'gold-gradient-bg text-[#0A0C10] shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:text-[#122613] border border-[#D0DFD0] hover:bg-[#EAF2EA]'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Secondary Brand Filter */}
          <div className="bg-white p-4 rounded-2xl border border-[#D9E5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 uppercase font-mono font-bold mr-1">Marca:</span>
              {availableBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 rounded-lg text-xs transition-colors ${
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
          <div className="bg-white p-12 rounded-2xl text-center border border-[#D9E5DA] my-8 shadow-sm">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#122613] mb-2">Nenhuma máquina encontrada nesta categoria</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Altere os filtros acima para visualizar outras opções de tratores, colheitadeiras e pulverizadores.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todas');
                setSelectedBrand('Todas');
              }}
              className="gold-gradient-bg text-[#0A0C10] font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="green-card rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-44 sm:h-60 overflow-hidden bg-slate-900">
                    <img
                      src={machine.photos[0]}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/80 via-transparent to-black/30" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-[#1D3B1E] text-[#E5C158] border border-emerald-500/30 text-xs font-bold uppercase backdrop-blur-md">
                        {machine.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md ${
                        machine.status === 'Disponível'
                          ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-950/90 text-amber-300 border border-amber-500/30'
                      }`}>
                        {machine.status}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white bg-[#0A0C10]/85 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <MapPin className="w-3.5 h-3.5 text-[#E5C158]" />
                      <span>{machine.location}</span>
                    </div>
                  </div>

                  {/* Machine Details */}
                  <div className="p-6">
                    <div className="text-xs text-[#B8860B] font-mono font-bold uppercase mb-1">
                      {machine.brand} • {machine.model}
                    </div>

                    <h3 className="text-xl font-bold text-[#122613] mb-3 font-outfit group-hover:text-[#B8860B] transition-colors">
                      {machine.name}
                    </h3>

                    {/* Quick Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-[#F3F7F2] border border-[#D0DFD0] text-xs">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1D3B1E]" />
                        <div>
                          <span className="text-slate-500 text-[10px] block font-medium">Ano</span>
                          <span className="font-bold text-[#122613]">{machine.year}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1D3B1E]" />
                        <div>
                          <span className="text-slate-500 text-[10px] block font-medium">Horas Uso</span>
                          <span className="font-bold text-[#122613] font-mono">{machine.hoursUsed.toLocaleString('pt-BR')} h</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {machine.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-[#E8F0E9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-mono font-semibold">Investimento</span>
                    <span className="text-sm font-extrabold text-[#1D3B1E] font-mono">{machine.priceDisplay}</span>
                  </div>

                  <button
                    onClick={() => setSelectedMachine(machine)}
                    className="gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md group-hover:shadow-lg"
                  >
                    <span>Ver máquina</span>
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
