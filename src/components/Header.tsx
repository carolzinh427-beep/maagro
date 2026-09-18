import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openInterestModal, setAdminViewActive } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Fazendas', href: '#fazendas' },
    { label: 'Arrendamentos', href: '#arrendamentos' },
    { label: 'Máquinas', href: '#maquinas' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0E150F]/95 backdrop-blur-md py-3.5 border-b border-[#D4AF37]/30 shadow-xl' 
          : 'bg-gradient-to-b from-[#0A0C10]/95 via-[#0A0C10]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={() => setAdminViewActive(false)}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#8C6D14] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-[#0A0C10] text-lg tracking-wider font-outfit">MA</span>
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl tracking-wider text-white uppercase font-outfit leading-tight flex items-center gap-1.5">
                M.A. <span className="gold-gradient-text font-extrabold">AGRONEGÓCIOS</span>
              </div>
              <p className="text-[10px] tracking-widest text-slate-300 uppercase font-medium">
                Propriedades & Maquinários
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setAdminViewActive(false)}
                className="text-sm font-semibold text-slate-200 hover:text-[#E5C158] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openInterestModal({ type: 'Compra', title: 'Interesse Geral' })}
              className="gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-bold text-sm px-5 py-2.5 rounded shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Quero anunciar / Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A0C10]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openInterestModal()}
              className="gold-gradient-bg text-[#0A0C10] text-xs font-bold px-3 py-2 rounded flex items-center gap-1"
            >
              Interesse
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E150F]/98 border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAdminViewActive(false);
                }}
                className="text-base font-medium text-slate-200 hover:text-[#E5C158] py-2 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInterestModal();
              }}
              className="w-full gold-gradient-bg text-[#0A0C10] font-bold text-center py-3 rounded shadow-md flex items-center justify-center gap-2"
            >
              <span>Quero anunciar / Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A0C10]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
