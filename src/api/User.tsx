import axios from "axios";
import firebase from "firebase";
import moment from "moment";

const BASE_API = "http://localhost:8081/user";

export interface UserFormFields {
  nome_usuario?: string;
  email?: string;
  password?: string;
  dt_nascimento?: string;
  token?: string;
}

export async function createUser(
  name: string,
  email: string,
  password: string,
  date: string
) {
  await firebase.auth().createUserWithEmailAndPassword(email, password);

  let unixDate = moment(date, "DD/MM/YYYY");

  await axios.post(`${BASE_API}/new`, {
    nome: name,
    email: email,
    dt_nascimento: unixDate.unix(),
    id_firebase: firebase.auth().currentUser.uid,
  });
}

export async function getUser() {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${user.uid}`;

  await axios.get(url, {
    headers: { Authorization: token }
  });
}

export async function editUser(payload: UserFormFields) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.put(`${BASE_API}/${user.uid}`, payload, {
    headers: { Authorization: token }
  });
}

export async function deleteUser(softDelete = false) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.delete(`${BASE_API}/${user.uid}`, {
    data: { soft_delete: softDelete },
    headers: { Authorization: token }
  });
}
