import moment from "moment";
import currencyFormatter from 'currency-formatter';

export const numberToCurrency = (v: number) => {
  if (!v || v === 0) {
    return "Sem meta de gastos";
  }

  return currencyFormatter.format(v, { code: "BRL" });
};

export const currencyToNumber = (v: string | number) => {
  if (!v) {
    return;
  }

  if (typeof v === 'number') { return v }

  return parseFloat(
    v
      .replace(".", "")  // remove o `.` dos milhares
      .replace(",", ".") // substitui a virgula por ponto
      .replace("R$", "") // remove o R$
  );
};

export const formatDate = (date: Date) => {
  return date ? moment(date).format("DD/MM/YYYY") : "A definir";
};
