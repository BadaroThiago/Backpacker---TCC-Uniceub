import axios from "axios";
import firebase from "firebase";
import moment from "moment";

import getEnvVars from "../../environment";
import { currencyToNumber } from "../helpers/utils";
import { Expense } from "../models/expenses";
import { getTravel } from "./travel";

const BASE_API = `${getEnvVars().apiUrl}/expense`;

export async function createExpense(expenseData: Expense) {
  expenseData.valor_gasto = currencyToNumber(expenseData.valor_gasto as string);

  expenseData.dt_gasto
    ? (expenseData.dt_gasto = moment(expenseData.dt_gasto, "DD/MM/YYYY").unix())
    : (expenseData.dt_gasto = undefined);

  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.post(`${BASE_API}/new`, expenseData, {
    headers: { Authorization: token },
  });
}

export async function getExpenses(idViagem: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let resExpense = await axios.get(BASE_API, {
    headers: { Authorization: token },
    params: { id_viagem: idViagem },
  });

  let resTravel = await getTravel(idViagem);

  let obj = { travel: resTravel.data, expense: resExpense.data };

  return obj;
}

export async function getExpense(idExpense: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${idExpense}`;

  return await axios.get(url, {
    headers: { Authorization: token },
  });
}

export async function editExpense(expense: Expense) {
  expense.dt_gasto = moment(expense.dt_gasto, "DD/MM/YYYY").unix();
  expense.valor_gasto = currencyToNumber(expense.valor_gasto as string);


  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  return await axios.put(`${BASE_API}/${expense.id_gasto}`, expense, {
    headers: { Authorization: token },
  });
}

// export async function deleteSpot(idSpot: number) {
// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// await axios.delete(`${BASE_API}/${idSpot}`, {
// headers: { Authorization: token },
// });
// }
