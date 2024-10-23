import React from 'react';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Pacientes from '../pages/Pacientes';
import Relatorios from '../pages/Relatorios';
import Configuracoes from '../pages/Configuracoes';
import Header from './Header';

const AdminLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      
      <Header username='webster'/>
      {/* Menu lateral */}
      <div style={{display: 'flex', flex: 1}}>
        <Sidebar />
        
        {/* Conteúdo principal */}
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
