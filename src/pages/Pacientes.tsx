import React, { useState } from "react";
import styled from "styled-components";

interface Patient {
  id: number;
  name: string;
  age: number;
}

const Pacientes: React.FC = () => {
  // Dados de pacientes simulados
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: "João Silva", age: 30 },
    { id: 2, name: "Maria Souza", age: 45 },
    { id: 3, name: "Ana Oliveira", age: 37},
  ]);

  const handleEdit = (id: number) => {
    alert(`Editar paciente com ID: ${id}`);
  };

  // Função para excluir paciente
  const handleDelete = (id: number) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <Container>
      <h1>Lista de Pacientes</h1>
      <PatientList patients={patients} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

// Componente que renderiza a lista de pacientes
interface PatientListProps {
  patients: Patient[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const PatientList: React.FC<PatientListProps> = ({ patients, onEdit, onDelete }) => {

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>ID</TableHeader>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Idade</TableHeader>
          <TableHeader>Ações</TableHeader>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <TableRow key={patient.id}>
            <TableData>{patient.id}</TableData>
            <TableData>{patient.name}</TableData>
            <TableData>{patient.age}</TableData>
            <TableData>
              <Button onClick={() => onEdit(patient.id)}>Editar</Button>
              <Button onClick={() => onDelete(patient.id)}>Excluir</Button>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #4caf50;
  color: white;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: #45a049;
  }
`;

export default Pacientes;
