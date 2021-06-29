import axios from "axios";
import firebase from "firebase";

import getEnvVars from "../../environment";
import moment from "moment";
import { Travel } from "../models/travel";
import { currencyToNumber, parseDate } from "../helpers/utils";

const BASE_API = `${getEnvVars().apiUrl}/travel`;

function validateInputs(payload: Travel): [Travel, string[]] {
  let errors = new Array<string>();

  if (!payload.nome_viagem) {
    errors = errors.concat("- Nome");
  }

  // Valida datas
  let dt_inicio = parseDate(payload.dt_inicio as string);
  if (!dt_inicio && payload.dt_inicio) { errors = errors.concat("- Data inicio") }

  let dt_fim = parseDate(payload.dt_fim as string);
  if (!dt_fim && payload.dt_fim) { errors = errors.concat("- Data fim") }

  if (dt_inicio && dt_fim && dt_fim < dt_inicio) { errors = errors.concat("- Data inicio apos data fim") }

  payload.dt_inicio = dt_inicio;
  payload.dt_fim = dt_fim;

  let orcamento_viagem = currencyToNumber(payload.orcamento_viagem as string);
  if (orcamento_viagem && orcamento_viagem < 0) { errors = errors.concat("Meta de gastos") }

  payload.orcamento_viagem = orcamento_viagem;

  return [payload, errors];
}

export async function createTravel(travelData: Travel) {
  let [payload, errors] = validateInputs(travelData);
  if (errors.length > 0) {
    throw new Error(`Os seguintes campos estao invalidos:\n${errors.join("\n")}`);
  }

  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.post(`${BASE_API}/new`, payload, {
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

export async function editTravel(travel: Travel) {
  if (travel.dt_inicio === "A definir") { travel.dt_inicio = "" }
  if (travel.dt_fim === "A definir") { travel.dt_fim = "" }

  let [payload, errors] = validateInputs(travel);
  if (errors.length > 0) {
    throw new Error(`Os seguintes campos estao invalidos:\n${errors.join("\n")}`);
  }

  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.put(`${BASE_API}/${travel.id_viagem}`, payload, {
    headers: { Authorization: token },
  });
}

export async function deleteTravel(idTravel: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.delete(`${BASE_API}/${idTravel}`, {
    headers: { Authorization: token },
  });
}
