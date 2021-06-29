import axios from "axios";
import firebase from "firebase";
import getEnvVars from "../../environment";
import { parseDate } from "../helpers/utils";

const BASE_API = `${getEnvVars().apiUrl}/user`;

export interface UserFormFields {
  nome_usuario?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  dt_nascimento?: string;
}

export async function createUser(
  name: string,
  email: string,
  password: string,
  date: string
) {
  let payload = {
    nome: name,
    email: email,
    password: password
  }

  let parsedDate = parseDate(date);
  if (parsedDate) {
    // @ts-ignore
    payload.dt_nascimento = parsedDate;
  }

  await axios.post(`${BASE_API}/new`, payload);
}

export async function getUser() {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${user.uid}`;

  let data = await axios.get(url, {
    headers: { Authorization: token },
  });

  return data;
}

export async function editUser(payload: UserFormFields) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  // Caso os emais sejam diferentes, atualiza no firebase
  if (user.email !== payload.email) {
    await user.updateEmail(payload.email);
    user = firebase.auth().currentUser;
  }
  // Caso tente atualiza a senha, garante que elas batem
  if (payload.password && payload.password === payload.confirmPassword) {
    await user.updatePassword(payload.password);
  }

  delete payload.password;
  delete payload.confirmPassword;

  return await axios.put(`${BASE_API}/${user.uid}`, payload, {
    headers: { Authorization: token },
  });
}

export async function deleteUser(softDelete = false) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.delete(`${BASE_API}/${user.uid}`, {
    data: { soft_delete: softDelete },
    headers: { Authorization: token },
  });
}
