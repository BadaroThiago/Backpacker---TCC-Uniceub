import axios from "axios";
import firebase from "firebase";
import moment from "moment";

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

  return await axios.get(BASE_API, {
    headers: { Authorization: token },
    params: { id_viagem: idViagem },
  });
}

export async function getSpot(idTravel: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${idTravel}`;

  return await axios.get(url, {
    headers: { Authorization: token },
  });
}

export async function editSpot(spot: Spot) {
  spot.dt_planejada = moment(spot.dt_planejada, "DD/MM/YYYY").unix();

  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.put(`${BASE_API}/${spot.id_local}`, spot, {
    headers: { Authorization: token },
  });
}

// // TODO: testar
// export async function deleteTravel(idTravel: number) {
// let user = firebase.auth().currentUser;
// let token = await user.getIdToken();

// await axios.delete(`${BASE_API}/${idTravel}`, {
// headers: { Authorization: token },
// });
// }
