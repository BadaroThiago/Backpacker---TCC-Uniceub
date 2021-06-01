import moment from "moment";

export const numberToCurrency = (v: number) => {
  if (!v || v === 0) {
    return "Sem meta de gastos";
  }

  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export const formatDate = (date: Date) => {
  return date ? moment(date).format("DD/MM/YYYY") : "A definir";
};
