import axios from "axios";
import firebase from "firebase";

import getEnvVars from "../../environment";
import moment from "moment";

const BASE_API = `${getEnvVars().apiUrl}/travel`;

export interface Travel {
  id_viagem?: number;
  nome_viagem: string;
  orcamento_viagem?: number | string;
  dt_inicio?: Date | string | number;
  dt_fim?: Date | string | number;
  descricao?: string;
}

export async function createTravel(travelData: Travel) {
  travelData.orcamento_viagem = parseFloat(
    travelData.orcamento_viagem as string
  );
  travelData.dt_inicio = moment(travelData.dt_inicio, "dd/mm/yyyy").unix();
  travelData.dt_fim = moment(travelData.dt_fim, "dd/mm/yyyy").unix();

  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.post(`${BASE_API}/new`, travelData, {
    headers: { Authorization: token },
  });
}

export async function getTravels() {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let data = await axios.get(BASE_API, {
    headers: { Authorization: token },
  });

  return data;
}

export async function getTravel(idTravel: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${idTravel}`;

  let data = await axios.get(url, {
    headers: { Authorization: token },
  });

  return data;
}

// TODO: testar
export async function editTravel(travel: Travel) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.put(`${BASE_API}/${travel.id_viagem}`, travel, {
    headers: { Authorization: token },
  });
}

// TODO: testar
export async function deleteTravel(idTravel: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.delete(`${BASE_API}/${idTravel}`, {
    headers: { Authorization: token },
  });
}
