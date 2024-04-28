export interface UserProps {
  nome: string;
  dataInicial: Date;
  dataFinal: Date;
  cnpj: string;
  infosPropriedade: {
    id: string;
    nome: string;
  };
  laboratorio: {
    id: string;
    nome: string;
  };
  observacoes: string;
}

export interface LaboratoryProps {
  id: string;
  nome: string;
}

export interface PropertyProps {
  id: string;
  nome: string;
  cnpj: string;
}