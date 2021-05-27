import moment from "moment";

export const numberToCurrency = (v: number) => {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export const formatDate = (d: Date) => {
  return moment(d).format("DD/MM/YYYY");
};
