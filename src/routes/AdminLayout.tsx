import React from 'react';
import Sidebar from '../components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Pacientes from '../pagesAdmin/Pacientes';
import Header from '../components/Header';

import { useAuth } from '../hooks/useAuth';

const AdminLayout: React.FC = () => {

  const { currentUser, logout } = useAuth();

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      
      <Header username='webster'/>
      {/* Menu lateral */}
      <div style={{display: 'flex', flex: 1}}>
        <Sidebar />
        
        {/* Conteúdo principal */}
          <Routes>
            <Route path="/pacientes" element={<Pacientes />} />
          </Routes>
      </div>

    </div>
  );
};

export default AdminLayout;
