import React, { useState } from 'react';
import { 
  ShieldCheck, LayoutDashboard, Warehouse, Tractor, Users, LogOut, Plus, Edit, Trash2, 
  CheckCircle, MessageSquare, Phone, MapPin, Eye, Search, Filter, Lock, ArrowLeft, RefreshCw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Property, Machine, Lead, LeadStatus, ListingStatus } from '../../types';

export const AdminView: React.FC = () => {
  const { 
    properties, saveProperty, deleteProperty, togglePropertyStatus,
    machines, saveMachine, deleteMachine, toggleMachineStatus,
    leads, updateLeadStatus, deleteLead,
    isAdminLoggedIn, loginAdmin, logoutAdmin, setAdminViewActive
  } = useApp();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'properties' | 'machines' | 'leads'>('dashboard');

  // Login Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Property Modal Form state
  const [editingProperty, setEditingProperty] = useState<Partial<Property> | null>(null);

  // Machine Modal Form state
  const [editingMachine, setEditingMachine] = useState<Partial<Machine> | null>(null);

  // Lead Filter state
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('Todos');

  // Login Handler
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(username, password);
    if (!success) {
      setLoginError(true);
    }
  };

  // Quick Demo Login
  const handleQuickDemoLogin = () => {
    loginAdmin('maagro', 'maagro26');
  };

  // Render Login Screen if not authenticated
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0A0C10] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#12151C] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl relative">
          
          <button
            onClick={() => setAdminViewActive(false)}
            className="absolute top-6 left-6 text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </button>

          <div className="text-center pt-6 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E5C158] to-[#9A7B1C] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D4AF37]/20">
              <Lock className="w-7 h-7 text-[#0A0C10]" />
            </div>
            <h2 className="text-2xl font-bold text-white font-outfit">Painel Administrativo</h2>
            <p className="text-slate-400 text-xs mt-1">M.A. Agronegócios • Gestão de Catálogo & Leads</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Usuário</label>
              <input
                type="text"
                value={username}
                onChange={e => { setUsername(e.target.value); setLoginError(false); }}
                placeholder="maagro"
                className="w-full bg-[#1A1D26] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setLoginError(false); }}
                placeholder="maagro26"
                className="w-full bg-[#1A1D26] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {loginError && (
              <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-300 text-xs rounded">
                Credenciais incorretas. Utilize <strong>maagro</strong> / <strong>maagro26</strong>.
              </div>
            )}

            <button
              type="submit"
              className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#0A0C10] font-bold text-sm py-3 rounded shadow-lg shadow-[#D4AF37]/20"
            >
              Acessar Painel Admin
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <button
              onClick={handleQuickDemoLogin}
              className="w-full bg-[#1A1D26] hover:bg-[#262B36] text-[#E5C158] border border-[#D4AF37]/30 text-xs font-semibold py-2.5 rounded transition-colors"
            >
              Demo Login de 1-Clique
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Dashboard Metrics Calculation
  const totalFazendas = properties.filter(p => p.negotiationType === 'Venda').length;
  const totalArrendamentos = properties.filter(p => p.negotiationType === 'Arrendamento').length;
  const totalMaquinas = machines.length;
  const totalInteressados = leads.length;
  const novosInteressados = leads.filter(l => l.status === 'Novo').length;

  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-100 font-sans flex flex-col">
      
      {/* Top Bar */}
      <header className="bg-[#12151C] border-b border-[#D4AF37]/30 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-[#D4AF37] text-[#0A0C10] font-bold flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white font-outfit leading-none">M.A. AGRONEGÓCIOS</h1>
            <span className="text-[11px] text-[#E5C158] font-mono">Painel de Gestão Comercial</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdminViewActive(false)}
            className="px-3.5 py-1.5 rounded bg-[#1A1D26] text-slate-300 hover:text-white text-xs font-medium border border-slate-700/80 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Ver Site Público</span>
          </button>

          <button
            onClick={logoutAdmin}
            className="px-3 py-1.5 rounded bg-red-950/60 hover:bg-red-900/80 text-red-300 text-xs font-medium border border-red-500/30 flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair</span>
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 bg-[#0F1218] border-r border-slate-800 p-4 space-y-2 shrink-0">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full p-3 rounded-lg text-xs font-bold flex items-center gap-3 transition-colors ${
              activeTab === 'dashboard' ? 'gold-gradient-bg text-[#0A0C10]' : 'text-slate-300 hover:bg-[#161920]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('properties')}
            className={`w-full p-3 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
              activeTab === 'properties' ? 'gold-gradient-bg text-[#0A0C10]' : 'text-slate-300 hover:bg-[#161920]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Warehouse className="w-4 h-4" />
              <span>Fazendas & Arrendamentos</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-black/30 font-mono">{properties.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('machines')}
            className={`w-full p-3 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
              activeTab === 'machines' ? 'gold-gradient-bg text-[#0A0C10]' : 'text-slate-300 hover:bg-[#161920]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Tractor className="w-4 h-4" />
              <span>Máquinas Agrícolas</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-black/30 font-mono">{machines.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full p-3 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
              activeTab === 'leads' ? 'gold-gradient-bg text-[#0A0C10]' : 'text-slate-300 hover:bg-[#161920]'
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4" />
              <span>Leads / Interessados</span>
            </div>
            {novosInteressados > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500 text-black font-extrabold font-mono animate-pulse">
                {novosInteressados} novo(s)
              </span>
            )}
          </button>
        </aside>

        {/* Tab Content Panel */}
        <main className="flex-1 p-6 overflow-y-auto">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-white font-outfit">Visão Geral do Sistema</h2>
                <p className="text-slate-400 text-xs">Métricas de catálogo e solicitações comerciais recebidas</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Fazendas (Venda)</span>
                  <div className="text-3xl font-extrabold text-white mt-2 font-mono">{totalFazendas}</div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Propriedades ativas</span>
                </div>

                <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Arrendamentos</span>
                  <div className="text-3xl font-extrabold text-[#E5C158] mt-2 font-mono">{totalArrendamentos}</div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Contratos disponíveis</span>
                </div>

                <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Máquinas Agrícolas</span>
                  <div className="text-3xl font-extrabold text-white mt-2 font-mono">{totalMaquinas}</div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Tratores/Colheitadeiras</span>
                </div>

                <div className="bg-[#12151C] p-5 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 uppercase font-mono block">Total Interessados</span>
                  <div className="text-3xl font-extrabold text-blue-400 mt-2 font-mono">{totalInteressados}</div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Leads cadastrados</span>
                </div>

                <div className="bg-[#12151C] p-5 rounded-xl border border-emerald-500/40">
                  <span className="text-xs text-emerald-400 uppercase font-mono font-bold block">Novos Interessados</span>
                  <div className="text-3xl font-extrabold text-emerald-400 mt-2 font-mono">{novosInteressados}</div>
                  <span className="text-[11px] text-emerald-300 mt-1 block">Aguardando atendimento</span>
                </div>

              </div>

              {/* Recent Leads Preview */}
              <div className="bg-[#12151C] rounded-xl border border-slate-800 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-outfit">Últimos Leads Recebidos</h3>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs text-[#E5C158] hover:underline font-semibold"
                  >
                    Ver todos ({leads.length})
                  </button>
                </div>

                <div className="space-y-3">
                  {leads.slice(0, 3).map(lead => (
                    <div key={lead.id} className="p-4 rounded-lg bg-[#161920] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{lead.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono">
                            {lead.status}
                          </span>
                        </div>
                        <p className="text-slate-400 mt-1">Interesse: <strong className="text-slate-200">{lead.targetTitle || lead.interestType}</strong> ({lead.location})</p>
                      </div>
                      
                      <div className="text-slate-400 font-mono text-[11px]">
                        {lead.createdAt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: FAZENDAS & ARRENDAMENTOS CRUD */}
          {activeTab === 'properties' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white font-outfit">Gestão de Fazendas & Arrendamentos</h2>
                  <p className="text-slate-400 text-xs">Cadastre, edite ou altere o status das propriedades rurais</p>
                </div>

                <button
                  onClick={() => setEditingProperty({
                    id: `faz-${Date.now()}`,
                    name: '',
                    negotiationType: 'Venda',
                    state: 'Paraná',
                    city: '',
                    areaHectares: 500,
                    priceDisplay: 'Sob Consulta',
                    shortDescription: '',
                    fullDescription: '',
                    features: ['Dupla aptidão', 'Solo fértil'],
                    infrastructure: ['Energia Trifásica', 'Silo'],
                    soilSuitability: 'Grãos',
                    waterSource: 'Nascentes',
                    photos: ['/images/hero.jpg'],
                    status: 'Disponível',
                    isDemonstration: false
                  })}
                  className="gold-gradient-bg text-[#0A0C10] font-extrabold text-xs px-5 py-2.5 rounded flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Nova Propriedade</span>
                </button>
              </div>

              {/* Properties Table */}
              <div className="bg-[#12151C] rounded-xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#161920] text-slate-400 uppercase font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-4">Propriedade</th>
                      <th className="p-4">Tipo</th>
                      <th className="p-4">Localização</th>
                      <th className="p-4">Área (ha)</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {properties.map(p => (
                      <tr key={p.id} className="hover:bg-[#161920]">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{p.name}</div>
                          <span className="text-[10px] text-slate-400 block line-clamp-1">{p.shortDescription}</span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            p.negotiationType === 'Venda' ? 'bg-[#D4AF37]/20 text-[#E5C158]' : 'bg-emerald-950 text-emerald-400'
                          }`}>
                            {p.negotiationType}
                          </span>
                        </td>
                        <td className="p-4">{p.city} - {p.state}</td>
                        <td className="p-4 font-mono font-bold text-[#E5C158]">{p.areaHectares.toLocaleString('pt-BR')} ha</td>
                        <td className="p-4">
                          <select
                            value={p.status}
                            onChange={(e) => togglePropertyStatus(p.id, e.target.value as ListingStatus)}
                            className="bg-[#1A1D26] border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200"
                          >
                            <option value="Disponível">Disponível</option>
                            <option value="Em Negociação">Em Negociação</option>
                            <option value="Vendido">Vendido</option>
                          </select>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setEditingProperty(p)}
                            className="p-1.5 rounded bg-blue-950 text-blue-400 hover:bg-blue-900"
                            title="Editar"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteProperty(p.id)}
                            className="p-1.5 rounded bg-red-950 text-red-400 hover:bg-red-900"
                            title="Excluir"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* TAB 3: MÁQUINAS CRUD */}
          {activeTab === 'machines' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white font-outfit">Gestão de Máquinas Agrícolas</h2>
                  <p className="text-slate-400 text-xs">Controle de tratores, colheitadeiras e implementos</p>
                </div>

                <button
                  onClick={() => setEditingMachine({
                    id: `maq-${Date.now()}`,
                    name: '',
                    category: 'Tratores',
                    brand: 'John Deere',
                    model: '',
                    year: 2023,
                    hoursUsed: 1000,
                    location: 'Cascavel - PR',
                    priceDisplay: 'Sob Consulta',
                    description: '',
                    specs: [{ label: 'Potência', value: '300 cv' }],
                    photos: ['/images/machine_harvester.jpg'],
                    status: 'Disponível',
                    isDemonstration: false
                  })}
                  className="gold-gradient-bg text-[#0A0C10] font-extrabold text-xs px-5 py-2.5 rounded flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Nova Máquina</span>
                </button>
              </div>

              {/* Machines Table */}
              <div className="bg-[#12151C] rounded-xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#161920] text-slate-400 uppercase font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-4">Máquina</th>
                      <th className="p-4">Categoria</th>
                      <th className="p-4">Ano / Horas</th>
                      <th className="p-4">Localização</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {machines.map(m => (
                      <tr key={m.id} className="hover:bg-[#161920]">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{m.name}</div>
                          <span className="text-[10px] text-[#E5C158] font-mono">{m.brand} {m.model}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-[#1A1D26] text-slate-300 font-bold">
                            {m.category}
                          </span>
                        </td>
                        <td className="p-4 font-mono">{m.year} • {m.hoursUsed.toLocaleString('pt-BR')} h</td>
                        <td className="p-4">{m.location}</td>
                        <td className="p-4">
                          <select
                            value={m.status}
                            onChange={(e) => toggleMachineStatus(m.id, e.target.value as ListingStatus)}
                            className="bg-[#1A1D26] border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200"
                          >
                            <option value="Disponível">Disponível</option>
                            <option value="Em Negociação">Em Negociação</option>
                            <option value="Vendido">Vendido</option>
                          </select>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setEditingMachine(m)}
                            className="p-1.5 rounded bg-blue-950 text-blue-400 hover:bg-blue-900"
                            title="Editar"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteMachine(m.id)}
                            className="p-1.5 rounded bg-red-950 text-red-400 hover:bg-red-900"
                            title="Excluir"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: LEADS MANAGER */}
          {activeTab === 'leads' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-white font-outfit">Gestão de Leads & Atendimento Comercial</h2>
                <p className="text-slate-400 text-xs">Visualize os interessados recebidos via formulários e inicie o atendimento</p>
              </div>

              {/* Filter Toolbar */}
              <div className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, e-mail, cidade ou item de interesse..."
                    value={leadSearch}
                    onChange={e => setLeadSearch(e.target.value)}
                    className="w-full bg-[#161920] border border-slate-700 rounded pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-400">Status:</span>
                  <select
                    value={leadStatusFilter}
                    onChange={e => setLeadStatusFilter(e.target.value)}
                    className="bg-[#161920] border border-slate-700 rounded px-3 py-2 text-xs text-slate-200"
                  >
                    <option value="Todos">Todos os Status</option>
                    <option value="Novo">Novo</option>
                    <option value="Em atendimento">Em atendimento</option>
                    <option value="Negociação">Negociação</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>
              </div>

              {/* Leads Table */}
              <div className="bg-[#12151C] rounded-xl border border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#161920] text-slate-400 uppercase font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-4">Interessado</th>
                      <th className="p-4">Contato (WhatsApp)</th>
                      <th className="p-4">Interesse / Item</th>
                      <th className="p-4">Data</th>
                      <th className="p-4">Status Atendimento</th>
                      <th className="p-4 text-right">Ação Direta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-200">
                    {leads
                      .filter(l => {
                        if (leadStatusFilter !== 'Todos' && l.status !== leadStatusFilter) return false;
                        if (leadSearch) {
                          const q = leadSearch.toLowerCase();
                          return (
                            l.name.toLowerCase().includes(q) ||
                            l.email.toLowerCase().includes(q) ||
                            l.location.toLowerCase().includes(q) ||
                            (l.targetTitle && l.targetTitle.toLowerCase().includes(q))
                          );
                        }
                        return true;
                      })
                      .map(lead => {
                        const cleanPhone = lead.whatsapp.replace(/\D/g, '');
                        return (
                          <tr key={lead.id} className="hover:bg-[#161920]">
                            <td className="p-4">
                              <div className="font-bold text-white text-sm">{lead.name}</div>
                              <span className="text-[10px] text-slate-400 block">{lead.email} • {lead.location}</span>
                            </td>
                            <td className="p-4 font-mono text-emerald-400 font-bold">{lead.whatsapp}</td>
                            <td className="p-4">
                              <span className="font-bold text-white">{lead.targetTitle || lead.interestType}</span>
                              <span className="text-[10px] text-slate-400 block">{lead.investmentRange}</span>
                            </td>
                            <td className="p-4 font-mono text-[11px] text-slate-400">{lead.createdAt}</td>
                            <td className="p-4">
                              <select
                                value={lead.status}
                                onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                                className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                                  lead.status === 'Novo' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' :
                                  lead.status === 'Em atendimento' ? 'bg-blue-950 text-blue-400 border border-blue-500/40' :
                                  lead.status === 'Negociação' ? 'bg-amber-950 text-amber-400 border border-amber-500/40' :
                                  'bg-slate-800 text-slate-400'
                                }`}
                              >
                                <option value="Novo">Novo</option>
                                <option value="Em atendimento">Em atendimento</option>
                                <option value="Negociação">Negociação</option>
                                <option value="Concluído">Concluído</option>
                              </select>
                            </td>
                            <td className="p-4 text-right space-x-2">
                              <a
                                href={`https://wa.me/55${cleanPhone}?text=${encodeURIComponent(`Olá ${lead.name}, tudo bem? Sou da equipe da M.A. Agronegócios referente ao seu interesse em ${lead.targetTitle || lead.interestType}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] inline-flex items-center gap-1"
                              >
                                <MessageSquare className="w-3 h-3" />
                                <span>WhatsApp</span>
                              </a>

                              <button
                                onClick={() => deleteLead(lead.id)}
                                className="p-1.5 rounded bg-red-950 text-red-400 hover:bg-red-900"
                                title="Excluir Lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* PROPERTY FORM MODAL (CREATE / EDIT) */}
      {editingProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0D0F14] border border-[#D4AF37]/40 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-bold text-white font-outfit">
              {editingProperty.id && properties.some(p => p.id === editingProperty.id) ? 'Editar Propriedade' : 'Cadastrar Nova Propriedade'}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Nome da Propriedade *</label>
                <input
                  type="text"
                  value={editingProperty.name || ''}
                  onChange={e => setEditingProperty({ ...editingProperty, name: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Tipo de Negociação *</label>
                <select
                  value={editingProperty.negotiationType || 'Venda'}
                  onChange={e => setEditingProperty({ ...editingProperty, negotiationType: e.target.value as any })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                >
                  <option value="Venda">Venda</option>
                  <option value="Arrendamento">Arrendamento</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Cidade *</label>
                <input
                  type="text"
                  value={editingProperty.city || ''}
                  onChange={e => setEditingProperty({ ...editingProperty, city: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Estado *</label>
                <input
                  type="text"
                  value={editingProperty.state || ''}
                  onChange={e => setEditingProperty({ ...editingProperty, state: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Área (Hectares) *</label>
                <input
                  type="number"
                  value={editingProperty.areaHectares || 0}
                  onChange={e => setEditingProperty({ ...editingProperty, areaHectares: Number(e.target.value) })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100 font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Valor Exibição</label>
                <input
                  type="text"
                  value={editingProperty.priceDisplay || 'Sob Consulta'}
                  onChange={e => setEditingProperty({ ...editingProperty, priceDisplay: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 mb-1 font-semibold">Breve Descrição</label>
              <textarea
                rows={2}
                value={editingProperty.shortDescription || ''}
                onChange={e => setEditingProperty({ ...editingProperty, shortDescription: e.target.value })}
                className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
              />
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 mb-1 font-semibold">Descrição Detalhada Completa</label>
              <textarea
                rows={4}
                value={editingProperty.fullDescription || ''}
                onChange={e => setEditingProperty({ ...editingProperty, fullDescription: e.target.value })}
                className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setEditingProperty(null)}
                className="px-4 py-2 rounded bg-slate-800 text-slate-300 text-xs"
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  if (editingProperty.name && editingProperty.city) {
                    saveProperty(editingProperty as Property);
                    setEditingProperty(null);
                  }
                }}
                className="gold-gradient-bg text-[#0A0C10] font-bold text-xs px-6 py-2 rounded"
              >
                Salvar Propriedade
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MACHINE FORM MODAL (CREATE / EDIT) */}
      {editingMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0D0F14] border border-[#D4AF37]/40 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-bold text-white font-outfit">
              {editingMachine.id && machines.some(m => m.id === editingMachine.id) ? 'Editar Máquina' : 'Cadastrar Nova Máquina'}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Nome Completo *</label>
                <input
                  type="text"
                  value={editingMachine.name || ''}
                  onChange={e => setEditingMachine({ ...editingMachine, name: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Categoria *</label>
                <select
                  value={editingMachine.category || 'Tratores'}
                  onChange={e => setEditingMachine({ ...editingMachine, category: e.target.value as any })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                >
                  <option value="Tratores">Tratores</option>
                  <option value="Colheitadeiras">Colheitadeiras</option>
                  <option value="Plantadeiras">Plantadeiras</option>
                  <option value="Pulverizadores">Pulverizadores</option>
                  <option value="Implementos">Implementos</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Marca *</label>
                <input
                  type="text"
                  value={editingMachine.brand || ''}
                  onChange={e => setEditingMachine({ ...editingMachine, brand: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Modelo *</label>
                <input
                  type="text"
                  value={editingMachine.model || ''}
                  onChange={e => setEditingMachine({ ...editingMachine, model: e.target.value })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Ano</label>
                <input
                  type="number"
                  value={editingMachine.year || 2023}
                  onChange={e => setEditingMachine({ ...editingMachine, year: Number(e.target.value) })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Horas de Uso</label>
                <input
                  type="number"
                  value={editingMachine.hoursUsed || 0}
                  onChange={e => setEditingMachine({ ...editingMachine, hoursUsed: Number(e.target.value) })}
                  className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100 font-mono"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 mb-1 font-semibold">Descrição da Máquina</label>
              <textarea
                rows={3}
                value={editingMachine.description || ''}
                onChange={e => setEditingMachine({ ...editingMachine, description: e.target.value })}
                className="w-full bg-[#161920] border border-slate-700 rounded p-2 text-slate-100"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setEditingMachine(null)}
                className="px-4 py-2 rounded bg-slate-800 text-slate-300 text-xs"
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  if (editingMachine.name && editingMachine.brand) {
                    saveMachine(editingMachine as Machine);
                    setEditingMachine(null);
                  }
                }}
                className="gold-gradient-bg text-[#0A0C10] font-bold text-xs px-6 py-2 rounded"
              >
                Salvar Máquina
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
