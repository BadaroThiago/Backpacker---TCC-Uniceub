import axios from "axios";
import firebase from "firebase";

import getEnvVars from "../../environment";
import { Spot } from "../models/spot";

const BASE_API = `${getEnvVars().apiUrl}/spot`;

export async function createSpot(spotData: Spot) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.post(`${BASE_API}/new`, spotData, {
    headers: { Authorization: token },
  });
}

export async function getSpots(idViagem: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  console.log("idViagem:", idViagem);
  console.log(token);
  console.log(BASE_API);

  return await axios.get(BASE_API, {
    headers: { Authorization: token },
    params: { id_viagem: idViagem },
  });
}

// export async function getTravel(idTravel: number) {
// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// let url = `${BASE_API}/${idTravel}`;

// let data = await axios.get(url, {
// headers: { Authorization: token },
// });

// return data;
// }

// // TODO: testar
// export async function editTravel(travel: Travel) {
// travel.orcamento_viagem = parseFloat(travel.orcamento_viagem as string);
// travel.dt_inicio = moment(travel.dt_inicio, "dd/mm/yyyy").unix();
// travel.dt_fim = moment(travel.dt_fim, "dd/mm/yyyy").unix();

// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// await axios.put(`${BASE_API}/${travel.id_viagem}`, travel, {
// headers: { Authorization: token },
// });
// }

// // TODO: testar
// export async function deleteTravel(idTravel: number) {
// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// await axios.delete(`${BASE_API}/${idTravel}`, {
// headers: { Authorization: token },
// });
// }
