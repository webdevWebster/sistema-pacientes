import { useState } from 'react';
import { FaHome, FaUser, FaCog, FaChartPie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? '80px' : '250px')};
  background-color: #030656;
  color: #ffffff;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: #dfe4ea;
  text-decoration: none;
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

const menuItems = [
  { icon: <FaHome />, label: 'Dashboard', path: '/' },
  { icon: <FaUser />, label: 'Pacientes', path: '/pacientes' },
  { icon: <FaChartPie />, label: 'Relatórios', path: '/relatorios' },
  { icon: <FaCog />, label: 'Configurações', path: '/configuracoes' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} to={item.path}>
          <IconWrapper>{item.icon}</IconWrapper>
          {!isCollapsed && <MenuText>{item.label}</MenuText>}
        </MenuItem>
      ))}
      <ToggleButton onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
