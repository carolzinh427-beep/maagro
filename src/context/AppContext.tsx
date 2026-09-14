import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, Machine, Lead, LeadStatus } from '../types';
import { INITIAL_PROPERTIES, INITIAL_MACHINES, INITIAL_LEADS } from '../data/initialData';

interface AppContextType {
  properties: Property[];
  machines: Machine[];
  leads: Lead[];
  
  // Modals & Active Selections
  selectedProperty: Property | null;
  setSelectedProperty: (property: Property | null) => void;
  
  selectedMachine: Machine | null;
  setSelectedMachine: (machine: Machine | null) => void;
  
  interestModalOpen: boolean;
  openInterestModal: (item?: { type: 'Compra' | 'Venda' | 'Arrendamento' | 'Máquinas'; title: string }) => void;
  closeInterestModal: () => void;
  interestInitialItem: { type: 'Compra' | 'Venda' | 'Arrendamento' | 'Máquinas'; title: string } | null;

  // Navigation / Admin State
  adminViewActive: boolean;
  setAdminViewActive: (active: boolean) => void;
  isAdminLoggedIn: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Actions
  addLead: (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) => void;
  updateLeadStatus: (leadId: string, status: LeadStatus) => void;
  deleteLead: (leadId: string) => void;

  saveProperty: (property: Property) => void;
  deleteProperty: (propertyId: string) => void;
  togglePropertyStatus: (propertyId: string, status: Property['status']) => void;

  saveMachine: (machine: Machine) => void;
  deleteMachine: (machineId: string) => void;
  toggleMachineStatus: (machineId: string, status: Machine['status']) => void;

  // Toast Notification
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(() => {
    const saved = localStorage.getItem('ma_properties');
    return saved ? JSON.parse(saved) : INITIAL_PROPERTIES;
  });

  const [machines, setMachines] = useState<Machine[]>(() => {
    const saved = localStorage.getItem('ma_machines');
    return saved ? JSON.parse(saved) : INITIAL_MACHINES;
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('ma_leads');
    return saved ? JSON.parse(saved) : INITIAL_LEADS;
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [interestInitialItem, setInterestInitialItem] = useState<{ type: 'Compra' | 'Venda' | 'Arrendamento' | 'Máquinas'; title: string } | null>(null);

  const [adminViewActive, setAdminViewActive] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('ma_admin_auth') === 'true';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('ma_properties', JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem('ma_machines', JSON.stringify(machines));
  }, [machines]);

  useEffect(() => {
    localStorage.setItem('ma_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    // Check URL hash for #admin or /admin routing simulation
    if (window.location.hash === '#admin' || window.location.pathname.includes('/admin')) {
      setAdminViewActive(true);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openInterestModal = (item?: { type: 'Compra' | 'Venda' | 'Arrendamento' | 'Máquinas'; title: string }) => {
    if (item) {
      setInterestInitialItem(item);
    } else {
      setInterestInitialItem(null);
    }
    setInterestModalOpen(true);
  };

  const closeInterestModal = () => {
    setInterestModalOpen(false);
  };

  const loginAdmin = (user: string, pass: string) => {
    if ((user.toLowerCase() === 'maagro' && pass === 'maagro26') || (user.toLowerCase() === 'admin' && pass === 'admin123')) {
      setIsAdminLoggedIn(true);
      localStorage.setItem('ma_admin_auth', 'true');
      showToast('Autenticado com sucesso no Painel Admin');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('ma_admin_auth');
    setAdminViewActive(false);
    showToast('Sessão encerrada com sucesso.');
  };

  const addLead = (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
    const newLead: Lead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }),
      status: 'Novo'
    };
    setLeads(prev => [newLead, ...prev]);
    showToast('Seu interesse foi registrado com sucesso! Entraremos em contato em breve.');
  };

  const updateLeadStatus = (leadId: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status } : l));
    showToast(`Status do Lead atualizado para "${status}".`);
  };

  const deleteLead = (leadId: string) => {
    setLeads(prev => prev.filter(l => l.id !== leadId));
    showToast('Lead excluído do sistema.');
  };

  const saveProperty = (property: Property) => {
    setProperties(prev => {
      const exists = prev.some(p => p.id === property.id);
      if (exists) {
        return prev.map(p => p.id === property.id ? property : p);
      } else {
        return [property, ...prev];
      }
    });
    showToast(`Propriedade "${property.name}" salva com sucesso!`);
  };

  const deleteProperty = (propertyId: string) => {
    setProperties(prev => prev.filter(p => p.id !== propertyId));
    showToast('Propriedade removida do catálogo.');
  };

  const togglePropertyStatus = (propertyId: string, status: Property['status']) => {
    setProperties(prev => prev.map(p => p.id === propertyId ? { ...p, status } : p));
    showToast(`Status da propriedade alterado para ${status}.`);
  };

  const saveMachine = (machine: Machine) => {
    setMachines(prev => {
      const exists = prev.some(m => m.id === machine.id);
      if (exists) {
        return prev.map(m => m.id === machine.id ? machine : m);
      } else {
        return [machine, ...prev];
      }
    });
    showToast(`Máquina "${machine.name}" salva com sucesso!`);
  };

  const deleteMachine = (machineId: string) => {
    setMachines(prev => prev.filter(m => m.id !== machineId));
    showToast('Máquina removida do catálogo.');
  };

  const toggleMachineStatus = (machineId: string, status: Machine['status']) => {
    setMachines(prev => prev.map(m => m.id === machineId ? { ...m, status } : m));
    showToast(`Status da máquina alterado para ${status}.`);
  };

  return (
    <AppContext.Provider
      value={{
        properties,
        machines,
        leads,
        selectedProperty,
        setSelectedProperty,
        selectedMachine,
        setSelectedMachine,
        interestModalOpen,
        openInterestModal,
        closeInterestModal,
        interestInitialItem,
        adminViewActive,
        setAdminViewActive,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        addLead,
        updateLeadStatus,
        deleteLead,
        saveProperty,
        deleteProperty,
        togglePropertyStatus,
        saveMachine,
        deleteMachine,
        toggleMachineStatus,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
