import axios from "axios";
import firebase from "firebase";
import moment from "moment";

// const BASE_API = "http://localhost:8081/travel";
const BASE_API = "https://tcc-backpacker.herokuapp.com/travel";

export interface TravelFormFields {
  nome_viagem: string;
  descricao?: string;
  dt_inicio?: Date;
  dt_fim?: Date;
  orcamento_viagem?: number;
}

export async function createTravel(travel: TravelFormFields) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.post(`${BASE_API}/new`, travel, {
    headers: { Authorization: token },
  });
}

export async function getTravel(idTravel: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${idTravel}`;

  return await axios.get(url, {
    headers: { Authorization: token },
  });
}

export async function editTravel(idTravel: number, payload: TravelFormFields) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.put(`${BASE_API}/${idTravel}`, payload, {
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
