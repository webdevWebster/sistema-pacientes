// AnamneseForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Fieldset = styled.fieldset`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 30px;
`;

const Legend = styled.legend`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  color: green;
  text-align: center;
`;

// Tipagem para os dados do formulário
interface AnamneseData {
  nome: string;
  idade: string;
  sexo: string;
  contato: string;
  doencas: string;
  medicamentos: string;
  alergias: string;
  queixa: string;
  tratamentos: string;
  expectativas: string;
}

export function AnamneseForm(){
  const [formData, setFormData] = useState<AnamneseData>({
    nome: '',
    idade: '',
    sexo: '',
    contato: '',
    doencas: '',
    medicamentos: '',
    alergias: '',
    queixa: '',
    tratamentos: '',
    expectativas: ''
  });

  const [mensagem, setMensagem] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados da Anamnese:', formData);
    setMensagem('Anamnese salva com sucesso!');
    
    // Limpa o formulário após o envio
    setFormData({
      nome: '',
      idade: '',
      sexo: '',
      contato: '',
      doencas: '',
      medicamentos: '',
      alergias: '',
      queixa: '',
      tratamentos: '',
      expectativas: ''
    });
  };

  return (
    <Container>
      <Title>Anamnese do Paciente</Title>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>Informações Pessoais</Legend>

          <Label htmlFor="nome">Nome Completo:</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <Label htmlFor="idade">Idade:</Label>
          <Input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />

          <Label htmlFor="sexo">Sexo:</Label>
          <Select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </Select>

          <Label htmlFor="contato">Contato (Telefone ou Email):</Label>
          <Input
            type="text"
            id="contato"
            name="contato"
            value={formData.contato}
            onChange={handleChange}
            required
          />
        </Fieldset>

        <Fieldset>
          <Legend>Histórico Médico</Legend>

          <Label htmlFor="doencas">Possui doenças pré-existentes?</Label>
          <Textarea
            id="doencas"
            name="doencas"
            rows={3}
            value={formData.doencas}
            onChange={handleChange}
          />

          <Label htmlFor="medicamentos">Faz uso de medicamentos? Se sim, quais?</Label>
          <Textarea
            id="medicamentos"
            name="medicamentos"
            rows={3}
            value={formData.medicamentos}
            onChange={handleChange}
          />

          <Label htmlFor="alergias">Possui alergias?</Label>
          <Textarea
            id="alergias"
            name="alergias"
            rows={2}
            value={formData.alergias}
            onChange={handleChange}
          />
        </Fieldset>

        <Fieldset>
          <Legend>Histórico Psicológico</Legend>

          <Label htmlFor="queixa">Queixa principal:</Label>
          <Textarea
            id="queixa"
            name="queixa"
            rows={3}
            value={formData.queixa}
            onChange={handleChange}
            required
          />

          <Label htmlFor="tratamentos">Já fez algum tratamento psicológico ou psiquiátrico?</Label>
          <Textarea
            id="tratamentos"
            name="tratamentos"
            rows={3}
            value={formData.tratamentos}
            onChange={handleChange}
          />

          <Label htmlFor="expectativas">O que espera do tratamento psicológico?</Label>
          <Textarea
            id="expectativas"
            name="expectativas"
            rows={3}
            value={formData.expectativas}
            onChange={handleChange}
          />
        </Fieldset>

        <Button type="submit">Salvar Anamnese</Button>
      </Form>
      {mensagem && <Message>{mensagem}</Message>}
    </Container>
  );
};

export default AnamneseForm;
