import axios from "axios";
import firebase from "firebase";
import moment from "moment";

// const BASE_API = "http://localhost:8081/travel";
const BASE_API = "https://tcc-backpacker.herokuapp.com/travel";

export interface Travel {
  id_viagem: number;
  nome_viagem: string;
  orcamento_viagem?: number;
  dt_inicio: Date;
  dt_fim: Date;
  descricao: string;
}

export async function createTravel(travel: Travel) {
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

  let data = await axios.get(url, {
    headers: { Authorization: token },
  });

  return data;
}

export async function editTravel(travel: Travel) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.put(`${BASE_API}/${travel.id_viagem}`, travel, {
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
