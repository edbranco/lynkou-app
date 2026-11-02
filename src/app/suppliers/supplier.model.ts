/** Fornecedor retornado pela API de busca. */
export interface Supplier {
  id: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  descricao: string;
  atendimento: string;
  faturamentoPrazo: string;
  whatsapp: string;
  emailComercial: string;
  telefone: string;
  status: string;
  plano: string;
  cidade: string;
  uf: string;
  categorias: readonly string[];
}
