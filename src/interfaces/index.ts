export interface UserProps {
  nome: string;
  dataInicial: Date | null;
  dataFinal: Date | null;
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

export interface SelectOpstionsProps {
  id: string;
  nome: string;
  cnpj?: string;
}