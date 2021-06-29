import axios from "axios";
import firebase from "firebase";
import moment from "moment";

import getEnvVars from "../../environment";
import { currencyToNumber, parseDate } from "../helpers/utils";
import { Expense } from "../models/expenses";
import { getTravel } from "./travel";

const BASE_API = `${getEnvVars().apiUrl}/expense`;

function validateInputs(payload: Expense): [Expense, string[]] {
  let errors = new Array<string>();

  if (!payload.nome_gasto) {
    errors = errors.concat("- Nome");
  }

  let dt_gasto = parseDate(payload.dt_gasto as string);
  if (!dt_gasto && payload.dt_gasto) {
    errors = errors.concat("- Data início");
  }
  payload.dt_gasto = dt_gasto;

  let valor_gasto = currencyToNumber(payload.valor_gasto as string);
  if (!valor_gasto || valor_gasto < 0) {
    errors = errors.concat("- Valor");
  }
  payload.valor_gasto = valor_gasto;

  return [payload, errors];
}

export async function createExpense(expenseData: Expense) {
  let [payload, errors] = validateInputs(expenseData);
  if (errors.length > 0) {
    throw new Error(
      `Os seguintes campos estão inválidos:\n${errors.join("\n")}`
    );
  }

  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.post(`${BASE_API}/new`, payload, {
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

export async function deleteExpense(idExpense: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.delete(`${BASE_API}/${idExpense}`, {
    headers: { Authorization: token },
  });
}
