// AdminLayout.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaCog, FaChartPie } from 'react-icons/fa';

// Estilização do layout
const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? '80px' : '250px')};
  background-color: #2f3542;
  color: #ffffff;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  color: #dfe4ea;

  &:hover {
    background-color: #57606f;
  }
`;

const IconWrapper = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
`;

const MenuText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 20px auto;
  width: 40px;

  &:hover {
    background-color: #57606f;
  }
`;

const Content = styled.div`
  background-color: #f1f2f6;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #2f3542;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const menuItems = [
  { icon: <FaHome />, label: 'Dashboard' },
  { icon: <FaUser />, label: 'Pacientes' },
  { icon: <FaChartPie />, label: 'Relatórios' },
  { icon: <FaCog />, label: 'Configurações' },
];

export function AdminLayout(){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Layout>
      {/* Menu Lateral */}
      <Sidebar isCollapsed={isCollapsed}>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            {!isCollapsed && <MenuText>{item.label}</MenuText>}
          </MenuItem>
        ))}
        <ToggleButton onClick={toggleSidebar}>
          {isCollapsed ? '>' : '<'}
        </ToggleButton>
      </Sidebar>

      {/* Conteúdo Principal */}
      <Content>
        <Header>
          <PageTitle>Painel de Controle</PageTitle>
        </Header>
        <CardGrid>
          <Card>Card 1</Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
          <Card>Card 4</Card>
        </CardGrid>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
