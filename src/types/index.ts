export type NegotiationType = 'Venda' | 'Arrendamento';

export type ListingStatus = 'Disponível' | 'Em Negociação' | 'Vendido';

export interface Property {
  id: string;
  name: string;
  negotiationType: NegotiationType;
  state: string;
  city: string;
  areaHectares: number;
  priceDisplay: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  photos: string[];
  status: ListingStatus;
  infrastructure: string[];
  soilSuitability: string;
  waterSource: string;
  isDemonstration?: boolean;
}

export type MachineCategory = 'Tratores' | 'Colheitadeiras' | 'Plantadeiras' | 'Pulverizadores' | 'Implementos';

export interface Machine {
  id: string;
  name: string;
  category: MachineCategory;
  brand: string;
  model: string;
  year: number;
  hoursUsed: number;
  location: string;
  priceDisplay: string;
  description: string;
  specs: { label: string; value: string }[];
  photos: string[];
  status: ListingStatus;
  isDemonstration?: boolean;
}

export type LeadStatus = 'Novo' | 'Em atendimento' | 'Negociação' | 'Concluído';

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  location: string; // Cidade/Estado
  interestType: 'Compra' | 'Venda' | 'Arrendamento' | 'Máquinas';
  targetTitle?: string;
  investmentRange: string;
  message: string;
  createdAt: string;
  status: LeadStatus;
}

export interface PropertyFilter {
  type: 'Todos' | 'Venda' | 'Arrendamento';
  state: string;
  minArea: number;
  maxArea: number;
  search: string;
}

export interface MachineFilter {
  category: 'Todas' | MachineCategory;
  brand: string;
  search: string;
}
