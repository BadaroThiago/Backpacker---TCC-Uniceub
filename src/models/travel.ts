export interface Travel {
  id_viagem?: number;
  nome_viagem: string;
  orcamento_viagem?: number | string;
  dt_inicio?: Date | string | number;
  dt_fim?: Date | string | number;
  descricao?: string;
}
