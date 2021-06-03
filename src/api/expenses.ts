import axios from "axios";
import firebase from "firebase";
import moment from "moment";

import getEnvVars from "../../environment";
import { Expense } from "../models/expenses";
import { getTravel } from "./travel";

const BASE_API = `${getEnvVars().apiUrl}/expense`;

export async function createExpense(expenseData: Expense) {
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
  console.log(obj);

  return obj;
}

// export async function getSpot(idTravel: number) {
// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// let url = `${BASE_API}/${idTravel}`;

// return await axios.get(url, {
// headers: { Authorization: token },
// });
// }

// export async function editSpot(spot: Spot) {
// spot.dt_planejada = moment(spot.dt_planejada, "DD/MM/YYYY").unix();

// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// await axios.put(`${BASE_API}/${spot.id_local}`, spot, {
// headers: { Authorization: token },
// });
// }

// export async function deleteSpot(idSpot: number) {
// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// await axios.delete(`${BASE_API}/${idSpot}`, {
// headers: { Authorization: token },
// });
// }
