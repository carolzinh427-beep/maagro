import React, { useState } from 'react';
import { X, MapPin, Calendar, Clock, Tractor, PhoneCall, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Machine } from '../types';
import { useApp } from '../context/AppContext';

interface MachineDetailModalProps {
  machine: Machine;
  onClose: () => void;
}

export const MachineDetailModal: React.FC<MachineDetailModalProps> = ({ machine, onClose }) => {
  const { openInterestModal } = useApp();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % machine.photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + machine.photos.length) % machine.photos.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0D0F14] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#12151C] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#D4AF37]/20 text-[#E5C158] border border-[#D4AF37]/40 text-xs font-bold uppercase">
              {machine.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-outfit truncate">
              {machine.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1A1D26] hover:bg-[#262B36] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
              <img
                src={machine.photos[activePhotoIdx]}
                alt={machine.name}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {machine.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {machine.photos.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {machine.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activePhotoIdx === idx ? 'border-[#D4AF37] opacity-100 scale-105' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#12151C] border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Marca & Modelo</span>
              <span className="text-sm font-bold text-white mt-1 block">{machine.brand} {machine.model}</span>
            </div>

            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Ano de Fabricação
              </span>
              <span className="text-sm font-bold text-white mt-1 block">{machine.year}</span>
            </div>

            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Horas Trabalhadas
              </span>
              <span className="text-sm font-bold text-[#E5C158] font-mono mt-1 block">
                {machine.hoursUsed.toLocaleString('pt-BR')} h
              </span>
            </div>

            <div>
              <span className="text-slate-400 block font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Localização
              </span>
              <span className="text-sm font-bold text-white mt-1 block">{machine.location}</span>
            </div>
          </div>

          {/* Specs Table */}
          {machine.specs && machine.specs.length > 0 && (
            <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800">
              <h4 className="text-sm font-bold text-[#E5C158] uppercase tracking-wider mb-4 font-outfit">
                Especificações Técnicas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {machine.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 rounded bg-[#161920] border border-slate-800 text-xs">
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="font-bold text-slate-200">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#E5C158] uppercase tracking-wider mb-2 font-outfit">
              Descrição Detalhada
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {machine.description}
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#12151C] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 block">Solicite informações completas sobre este equipamento</span>
            <span className="text-sm font-extrabold text-[#E5C158] font-mono">{machine.name} ({machine.year})</span>
          </div>

          <button
            onClick={() => {
              onClose();
              openInterestModal({
                type: 'Máquinas',
                title: `${machine.name} (${machine.brand} ${machine.model})`
              });
            }}
            className="w-full sm:w-auto gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-extrabold text-sm px-8 py-3.5 rounded shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-[#0A0C10]" />
            <span>Tenho interesse nesta máquina</span>
          </button>
        </div>

      </div>
    </div>
  );
};
