// Login.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Estilização com styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 40px;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  color: #333;
  font-size: 24px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6e8efb;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6e8efb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #576dec;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #4a5dc6;
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ForgotPasswordLink = styled.a`
  display: block;
  font-size: 12px;
  color: #6e8efb;
  margin-bottom: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface LoginData {
  email: string;
  password: string;
}

export function Login(){
  const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Email inválido.');
      return;
    }
    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setError('');
    console.log('Dados de login:', formData);
    // Adicione a lógica de autenticação aqui
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Bem-vindo</Title>

        <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email:</Label>
            <Input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <Label htmlFor="password">Senha:</Label>
            <Input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
                required
            />

          <ForgotPasswordLink href="#">Esqueceu sua senha?</ForgotPasswordLink>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit">Entrar</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
