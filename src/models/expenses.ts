export interface Expense {
  id_gasto?: number;
  nome_gasto: string;
  dt_gasto: Date;
  descricao_gasto?: string;
  valor_gasto: number;
  link_imagem_gasto?: string;
  id_viagem?: number;
}

export const sumExpenses = (expenses: [Expense]) => {
  return expenses.reduce((acc, value) => (acc += value.valor_gasto), 0);
};
