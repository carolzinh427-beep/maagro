import { Property, Machine, Lead } from '../types';

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: 'faz-01',
    name: 'Fazenda Santa Helena',
    negotiationType: 'Venda',
    state: 'Paraná',
    city: 'Cascavel',
    areaHectares: 1250,
    priceDisplay: 'Sob Consulta',
    shortDescription: 'Excelente fazenda produtiva de grãos com dupla aptidão, topografia plana e infraestrutura completa de armazenagem.',
    fullDescription: 'Propriedade de alto padrão agronômico situada em região privilegiada do Paraná. Conta com altitude favorável, alto índice pluviométrico anual e solo vermelho de altíssima fertilidade. Possui sede estruturada, barracões para maquinários e facilidade de acesso a rodovias duplicadas.',
    features: [
      'Dupla aptidão (Soja / Milho / Pecuária)',
      'Solo com teor de argila superior a 60%',
      'Sede principal com casa de alto padrão',
      'Barracão fechado para maquinário (1.200 m²)',
      'Secador e silos com capacidade para 100.000 sacos',
      'Documentação 100% regularizada (GEO/CAR)'
    ],
    infrastructure: ['Energia Trifásica', 'Internet Fibra Óptica', 'Poço Artesiano', 'Balança Rodoviária 80t'],
    soilSuitability: 'Agrícola Intensiva (Grãos)',
    waterSource: 'Rio de médio porte na divisa e 2 nascentes internas',
    photos: [
      '/images/hero.jpg',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Disponível',
    isDemonstration: true
  },
  {
    id: 'faz-02',
    name: 'Fazenda Terra Nobre',
    negotiationType: 'Arrendamento',
    state: 'Mato Grosso',
    city: 'Lucas do Rio Verde',
    areaHectares: 3400,
    priceDisplay: 'Sob Consulta',
    shortDescription: 'Oportunidade para expansão agrícola. Área consolidada para plantio de safra e safrinha de grãos.',
    fullDescription: 'Área de arrendamento com contrato de longo prazo (5 a 10 anos). Solo corrigido, com ótimo histórico de produtividade nas últimas 8 safras. Localizada a 15 km da rodovia principal, facilitando o escoamento direto para as tradings.',
    features: [
      'Contrato flexível de 5 a 10 anos',
      'Área de plantio 100% aberta e lavrada',
      'Topografia levemente ondulada com excelente drenagem',
      'Alojamento para colaboradores e refeitório',
      'Tanque de combustível regularizado (15.000 L)'
    ],
    infrastructure: ['Energia Trifásica', 'Barracão Operacional', 'Casa para Gerente'],
    soilSuitability: 'Soja e Milho Safrinha',
    waterSource: 'Represa com outorga para irrigação por pivô',
    photos: [
      'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Disponível',
    isDemonstration: true
  },
  {
    id: 'faz-03',
    name: 'Estância Ouro Verde',
    negotiationType: 'Venda',
    state: 'Goiás',
    city: 'Rio Verde',
    areaHectares: 890,
    priceDisplay: 'Sob Consulta',
    shortDescription: 'Propriedade modelo altamente sustentável com recurso hídrico abundante e ótima logística de insumos.',
    fullDescription: 'Fazenda estrategicamente posicionada próxima a importantes polos agroindustriais de Goiás. Possui reserva legal demarcada, outorga d’água aprovada e estradas internas cascalhadas transitáveis o ano todo.',
    features: [
      'Outorga de água aprovada para instalação de Pivô Central',
      'Cascalhamento em 100% das vias internas',
      'Curral completo em aroeira com balança digital',
      'Rede de energia própria com transformador dedicado'
    ],
    infrastructure: ['Casa Sede', 'Casa de Caseiro', 'Oficina Mecânica', 'Depósito de Defensivos ABNT'],
    soilSuitability: 'Grãos e Hortifrúti Irrigado',
    waterSource: '2 Rios perenes e lago artificial',
    photos: [
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Disponível',
    isDemonstration: true
  },
  {
    id: 'faz-04',
    name: 'Fazenda Boa Esperança',
    negotiationType: 'Venda',
    state: 'Mato Grosso do Sul',
    city: 'Dourados',
    areaHectares: 2150,
    priceDisplay: 'Sob Consulta',
    shortDescription: 'Propriedade com dupla aptidão consolidada em grãos e pecuária intensiva.',
    fullDescription: 'Fazenda estruturada para confinamento e agricultura de alto rendimento. Instalações modernas, piquetes divididos e solo com alta CTC.',
    features: [
      'Pecuária intensiva + agricultura de precisão',
      'Infraestrutura para confinamento até 3.000 cabeças',
      'Documentação 100% auditada'
    ],
    infrastructure: ['Silo Graneleiro', 'Curral de Manejo', 'Laboratório Veterinário'],
    soilSuitability: 'Soja, Milho e Pecuária de Corte',
    waterSource: 'Poços tubulares profundos',
    photos: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      '/images/hero.jpg'
    ],
    status: 'Em Negociação',
    isDemonstration: true
  }
];

export const INITIAL_MACHINES: Machine[] = [
  {
    id: 'maq-01',
    name: 'Colheitadeira John Deere S770',
    category: 'Colheitadeiras',
    brand: 'John Deere',
    model: 'S770 Rotor',
    year: 2022,
    hoursUsed: 1450,
    location: 'Cascavel - PR',
    priceDisplay: 'Sob Consulta',
    description: 'Colheitadeira em perfeito estado de conservação, com piloto automático integrado, plataforma de corte draper 35 pés e transmissão ProDrive.',
    specs: [
      { label: 'Potência', value: '455 cv' },
      { label: 'Transmissão', value: 'ProDrive Hidrostática' },
      { label: 'Plataforma', value: '35 Pés Draper' },
      { label: 'Capacidade do Tanque', value: '11.600 Litros' }
    ],
    photos: [
      '/images/machine_harvester.jpg',
      'https://images.unsplash.com/photo-1530267981608-bc34547072ab?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Disponível',
    isDemonstration: true
  },
  {
    id: 'maq-02',
    name: 'Trator Case IH Magnum 340',
    category: 'Tratores',
    brand: 'Case IH',
    model: 'Magnum 340 AFS Connect',
    year: 2021,
    hoursUsed: 2200,
    location: 'Rondonópolis - MT',
    priceDisplay: 'Sob Consulta',
    description: 'Trator cabinado de alta potência com rodado duplo traseiro, piloto AFS Vector e histórico completo de revisões em concessionária autorizada.',
    specs: [
      { label: 'Potência Nominal', value: '340 cv' },
      { label: 'Transmissão', value: 'PowerShift 18x4' },
      { label: 'Rodado', value: 'Duplo Traseiro (Radial)' },
      { label: 'Tecnologia', value: 'Telemetria AFS Connect' }
    ],
    photos: [
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530267981608-bc34547072ab?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Disponível',
    isDemonstration: true
  },
  {
    id: 'maq-03',
    name: 'Plantadeira New Holland PL6000',
    category: 'Plantadeiras',
    brand: 'New Holland',
    model: 'PL6000 17 Linhas',
    year: 2023,
    hoursUsed: 680,
    location: 'Rio Verde - GO',
    priceDisplay: 'Sob Consulta',
    description: 'Plantadeira de alta precisão articulada com dosadores a vácuo, corte perfeito de palhada e monitor de sementes tela touch.',
    specs: [
      { label: 'Número de Linhas', value: '17 linhas de 45 cm' },
      { label: 'Sistema de Dosagem', value: 'Vácuo Precision Planting' },
      { label: 'Chassi', value: 'Articulado 3 Módulos' }
    ],
    photos: [
      'https://images.unsplash.com/photo-1530267981608-bc34547072ab?auto=format&fit=crop&w=1200&q=80',
      '/images/machine_harvester.jpg'
    ],
    status: 'Disponível',
    isDemonstration: true
  },
  {
    id: 'maq-04',
    name: 'Pulverizador Autopropelido Stara Imperador 4000',
    category: 'Pulverizadores',
    brand: 'Stara',
    model: 'Imperador 4000 Central',
    year: 2022,
    hoursUsed: 1890,
    location: 'Dourados - MS',
    priceDisplay: 'Sob Consulta',
    description: 'Pulverizador autopropelido com barras centrais de 36 metros, sistema de recirculação contínua e desligamento bico a bico.',
    specs: [
      { label: 'Barra de Pulverização', value: '36 Metros Centrais' },
      { label: 'Reservatório', value: '4.000 Litros' },
      { label: 'Motor', value: 'Cummins 260 cv' }
    ],
    photos: [
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Em Negociação',
    isDemonstration: true
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-101',
    name: 'Roberto Silveira',
    whatsapp: '(45) 99912-3456',
    email: 'roberto.silveira@agrifarm.com.br',
    location: 'Toledo - PR',
    interestType: 'Compra',
    targetTitle: 'Fazenda Santa Helena',
    investmentRange: 'R$ 15MM a R$ 30MM',
    message: 'Gostaria de agendar uma visita técnica à Fazenda Santa Helena e verificar a documentação referente ao CAR e mapa de solo.',
    createdAt: '2026-09-12 14:30',
    status: 'Novo'
  },
  {
    id: 'lead-102',
    name: 'Guilherme Mendes',
    whatsapp: '(66) 98455-7788',
    email: 'gmendes.agro@gmail.com',
    location: 'Sinop - MT',
    interestType: 'Arrendamento',
    targetTitle: 'Fazenda Terra Nobre',
    investmentRange: 'Arrendamento Safra/Safrinha',
    message: 'Tenho interesse na área de 3.400 ha para arrendamento. Gostaria de entender o histórico de produtividade das últimas 3 safras.',
    createdAt: '2026-09-10 09:15',
    status: 'Em atendimento'
  },
  {
    id: 'lead-103',
    name: 'Carlos Eduardo Prado',
    whatsapp: '(62) 99188-2233',
    email: 'carlos.prado@agrodourado.com',
    location: 'Jataí - GO',
    interestType: 'Máquinas',
    targetTitle: 'Colheitadeiras - John Deere S770',
    investmentRange: 'R$ 1,5MM a R$ 3MM',
    message: 'Procuro colheitadeira seminova com plataforma de 35 pés para a próxima colheita de milho safrinha.',
    createdAt: '2026-09-08 16:45',
    status: 'Negociação'
  }
];
