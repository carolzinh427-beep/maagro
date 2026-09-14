import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InterestModal: React.FC = () => {
  const { interestModalOpen, closeInterestModal, interestInitialItem, addLead } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    location: '',
    interestType: 'Compra' as 'Compra' | 'Venda' | 'Arrendamento' | 'Máquinas',
    investmentRange: 'Sob Consulta',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [directWhatsappRedirect, setDirectWhatsappRedirect] = useState(true);

  useEffect(() => {
    if (interestInitialItem) {
      setFormData(prev => ({
        ...prev,
        interestType: interestInitialItem.type,
        message: prev.message || `Tenho interesse na oportunidade "${interestInitialItem.title}". Gostaria de mais informações e condições comerciais.`
      }));
    }
  }, [interestInitialItem]);

  if (!interestModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) return;

    addLead({
      name: formData.name,
      whatsapp: formData.whatsapp,
      email: formData.email,
      location: formData.location,
      interestType: formData.interestType,
      targetTitle: interestInitialItem?.title || 'Oportunidade Geral',
      investmentRange: formData.investmentRange,
      message: formData.message
    });

    setSubmitted(true);

    // If user chose WhatsApp redirect option:
    if (directWhatsappRedirect) {
      setTimeout(() => {
        const textMsg = encodeURIComponent(
          `Olá M.A. Agronegócios! Meu nome é ${formData.name}.\n\n` +
          `*Tipo de Interesse:* ${formData.interestType}\n` +
          `*Item:* ${interestInitialItem?.title || 'Oportunidades Rurais'}\n` +
          `*Cidade/Estado:* ${formData.location || 'Não informado'}\n` +
          `*Mensagem:* ${formData.message}`
        );
        window.open(`https://wa.me/5545998259664?text=${textMsg}`, '_blank');
      }, 1000);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    closeInterestModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0D0F14] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#12151C] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-outfit">
                Formulário de Interesse Profissional
              </h3>
              <p className="text-[11px] text-slate-400">Atendimento sigiloso & direto com a diretoria</p>
            </div>
          </div>

          <button
            onClick={closeInterestModal}
            className="w-8 h-8 rounded-full bg-[#1A1D26] hover:bg-[#262B36] text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-bold text-white font-outfit">
                Interesse Registrado com Sucesso!
              </h4>

              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Agradecemos seu contato. Sua mensagem foi encaminhada com prioridade para nossos corretores especializados da M.A. Agronegócios.
              </p>

              {directWhatsappRedirect && (
                <div className="p-3 bg-[#12151C] rounded-lg border border-[#D4AF37]/30 text-xs text-[#E5C158] inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Redirecionando para conversa no WhatsApp oficial...</span>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="gold-gradient-bg text-[#0A0C10] font-bold text-xs px-8 py-3 rounded"
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Pre-selected Item Notice */}
              {interestInitialItem && (
                <div className="p-3 bg-[#161920] rounded-lg border border-[#D4AF37]/30 flex items-center justify-between text-xs text-slate-200">
                  <span>Interesse em: <strong className="text-[#E5C158]">{interestInitialItem.title}</strong></span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C158] font-bold">
                    {formData.interestType}
                  </span>
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="(00) 90000-0000"
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    E-mail Comercial
                  </label>
                  <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Cascavel / PR"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tipo de Interesse
                  </label>
                  <select
                    value={formData.interestType}
                    onChange={e => setFormData({ ...formData, interestType: e.target.value as any })}
                    className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Compra">Compra de Fazenda</option>
                    <option value="Venda">Vender minha propriedade</option>
                    <option value="Arrendamento">Arrendamento Rural</option>
                    <option value="Máquinas">Máquinas Agrícolas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Faixa de Investimento Estimada
                  </label>
                  <select
                    value={formData.investmentRange}
                    onChange={e => setFormData({ ...formData, investmentRange: e.target.value })}
                    className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Sob Consulta">A definir / Sob consulta</option>
                    <option value="Até R$ 5MM">Até R$ 5 Milhões</option>
                    <option value="R$ 5MM a R$ 15MM">R$ 5MM a R$ 15MM</option>
                    <option value="R$ 15MM a R$ 50MM">R$ 15MM a R$ 50MM</option>
                    <option value="Acima de R$ 50MM">Acima de R$ 50 Milhões</option>
                    <option value="Arrendamento por Sacos">Arrendamento (Sacos de soja / ha)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Mensagem / Especificações da Busca
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva a área desejada, localização de preferência, urgência ou detalhes do seu maquinário..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#12151C] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Direct WhatsApp Option Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="directWhatsapp"
                  checked={directWhatsappRedirect}
                  onChange={e => setDirectWhatsappRedirect(e.target.checked)}
                  className="rounded bg-[#12151C] border-slate-700 text-[#D4AF37] focus:ring-0"
                />
                <label htmlFor="directWhatsapp" className="text-xs text-slate-300 cursor-pointer flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Iniciar atendimento via WhatsApp oficial imediatamente após o envio</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-extrabold text-base py-3.5 rounded shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#0A0C10]" />
                  <span>Enviar interesse</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
