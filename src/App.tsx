import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { CatalogSection } from './components/CatalogSection';
import { MachinesSection } from './components/MachinesSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { MachineDetailModal } from './components/MachineDetailModal';
import { InterestModal } from './components/InterestModal';
import { AdminView } from './components/admin/AdminView';
import { Bell } from 'lucide-react';

export const AppContent: React.FC = () => {
  const { 
    adminViewActive, 
    selectedProperty, 
    setSelectedProperty,
    selectedMachine, 
    setSelectedMachine,
    toastMessage 
  } = useApp();

  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-100 selection:bg-[#D4AF37]/30 selection:text-[#E5C158] relative">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#161920] border border-[#D4AF37]/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in backdrop-blur-md">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#E5C158]">
            <Bell className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Admin View Mode Toggle */}
      {adminViewActive ? (
        <AdminView />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <OpportunitiesSection />
            <CatalogSection />
            <MachinesSection />
            <AboutSection />
            <CTASection />
            <ContactSection />
          </main>
          <Footer />

          {/* Modals */}
          {selectedProperty && (
            <PropertyDetailModal
              property={selectedProperty}
              onClose={() => setSelectedProperty(null)}
            />
          )}

          {selectedMachine && (
            <MachineDetailModal
              machine={selectedMachine}
              onClose={() => setSelectedMachine(null)}
            />
          )}

          <InterestModal />
        </>
      )}

    </div>
  );
};
