import React, { useState } from 'react';
import { X, MapPin, Maximize2, CheckCircle2, ShieldCheck, PhoneCall, Calendar, Droplets, Landmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types';
import { useApp } from '../context/AppContext';

interface PropertyDetailModalProps {
  property: Property;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const { openInterestModal } = useApp();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % property.photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + property.photos.length) % property.photos.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-5xl bg-[#0D0F14] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="px-6 py-4 bg-[#12151C] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded text-xs font-extrabold uppercase ${
              property.negotiationType === 'Venda' ? 'gold-gradient-bg text-[#0A0C10]' : 'bg-emerald-500 text-black'
            }`}>
              {property.negotiationType}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-outfit truncate">
              {property.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1A1D26] hover:bg-[#262B36] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Gallery Section */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
              <img
                src={property.photos[activePhotoIdx]}
                alt={`${property.name} - Foto ${activePhotoIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              
              {/* Photo Controls */}
              {property.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/70 px-3 py-1 rounded text-xs font-mono text-slate-200 backdrop-blur-sm">
                    {activePhotoIdx + 1} / {property.photos.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            {property.photos.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activePhotoIdx === idx ? 'border-[#D4AF37] opacity-100 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#12151C] border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 font-medium block flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Localização
              </span>
              <span className="text-sm font-bold text-white mt-1 block">{property.city} - {property.state}</span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Área Total
              </span>
              <span className="text-sm font-bold text-[#E5C158] font-mono mt-1 block">
                {property.areaHectares.toLocaleString('pt-BR')} hectares
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" /> Modalidade
              </span>
              <span className="text-sm font-bold text-white mt-1 block">{property.negotiationType}</span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Condição Comercial
              </span>
              <span className="text-sm font-bold text-emerald-400 mt-1 block">{property.priceDisplay}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base font-bold text-white font-outfit uppercase tracking-wider mb-2 text-[#E5C158]">
              Descrição Geral da Propriedade
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {property.fullDescription}
            </p>
          </div>

          {/* Características & Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800">
              <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Diferenciais & Aptidões
              </h5>
              <ul className="space-y-2.5">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800 space-y-4">
              <h5 className="text-sm font-bold text-white flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[#D4AF37]" />
                Recursos Hídricos & Solo
              </h5>
              
              <div className="text-xs space-y-2">
                <div>
                  <span className="text-slate-400 block font-semibold">Aptidão do Solo:</span>
                  <span className="text-slate-200">{property.soilSuitability}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Fontes de Água:</span>
                  <span className="text-slate-200">{property.waterSource}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Infraestrutura Existente:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {property.infrastructure.map((inf, i) => (
                      <span key={i} className="bg-[#161920] text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded text-[11px]">
                        {inf}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#12151C] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 block">Condições e visitas sob sigilo profissional</span>
            <span className="text-sm font-extrabold text-[#E5C158] font-mono">{property.name} - {property.city}/{property.state}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              openInterestModal({
                type: property.negotiationType === 'Arrendamento' ? 'Arrendamento' : 'Compra',
                title: property.name
              });
            }}
            className="w-full sm:w-auto gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-extrabold text-sm px-8 py-3.5 rounded shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-[#0A0C10]" />
            <span>Tenho interesse nesta propriedade</span>
          </button>
        </div>

      </div>
    </div>
  );
};
