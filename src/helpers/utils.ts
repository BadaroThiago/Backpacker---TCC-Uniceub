import moment from "moment";

export const numberToCurrency = (v: number) => {
  if (!v || v === 0) {
    return "Sem meta de gastos";
  }

  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export const currencyToNumber = (v: string) => {
  if (!v) {
    return;
  }

  return parseFloat(
    v
      .replace(".", ",") // remove o `.` dos milhares
      .replace(",", ".") // substitui a virgula por ponto
      .replace("R$", "") // remove o R$
  );
};

export const formatDate = (date: Date) => {
  return date ? moment(date).format("DD/MM/YYYY") : "A definir";
};
