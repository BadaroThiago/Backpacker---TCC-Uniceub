export interface Expense {
  id_gasto?: number;
  nome_gasto: string;
  dt_gasto: Date | string | number;
  descricao_gasto?: string;
  valor_gasto: number | string;
  link_imagem_gasto?: string;
  id_viagem?: number;
}

export const sumExpenses = (expenses: [Expense]) => {
  return expenses.reduce(
    (acc, value) => (acc += value.valor_gasto as number),
    0
  );
};
