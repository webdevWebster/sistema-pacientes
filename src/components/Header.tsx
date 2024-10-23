import styled from 'styled-components';

interface HeaderProps {
    username: string; // Nome do usuário para exibir na sessão
}

const HeaderContainer = styled.header`
    background-color: #0c13b7; /* Cor de fundo */
    color: white; /* Cor do texto */
    padding: 10px 20px; /* Espaçamento interno */
    display: flex; /* Flexbox para layout */
    justify-content: space-between; /* Espaço entre os itens */
    align-items: center; /* Alinhamento vertical */
`;

const Logo = styled.div`
    font-size: 24px; /* Tamanho da fonte do logotipo */
    font-weight: bold; /* Negrito */
`;

const UserSession = styled.div`
    display: flex; /* Flexbox para a sessão do usuário */
    align-items: center;
`;

const UserName = styled.span`
    margin-right: 10px; /* Espaçamento entre o nome e o ícone */
`;

const UserIcon = styled.img`
    width: 30px; /* Largura do ícone do usuário */
    height: 30px; /* Altura do ícone do usuário */
    border-radius: 50%; /* Arredondar a imagem */
`;


export function Header({ username }: HeaderProps) {
    return (
        <HeaderContainer>
            <Logo>UNECIM | AEE</Logo>
            <UserSession>
                <UserName>{username}</UserName>
                <UserIcon src="user-icon.png" alt="Usuário" />
            </UserSession>
        </HeaderContainer>
    );
};

export default Header;
