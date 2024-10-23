import React from 'react';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Pacientes from '../pages/Pacientes';
import Relatorios from '../pages/Relatorios';
import Configuracoes from '../pages/Configuracoes';

const AdminLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Menu lateral */}
      <Sidebar />
      
      {/* Conteúdo principal */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
