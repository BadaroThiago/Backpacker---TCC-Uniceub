import axios from "axios";
import firebase from "firebase";
import moment from "moment";

const BASE_API = "http://localhost:8081/user";

interface UserFormFields {
  name?: string;
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
    firebase_id: firebase.auth().currentUser.uid,
  });
}

export async function getUser() {
  let user = firebase.auth().currentUser;
  // let token = await user.getIdToken();
  let url = `${BASE_API}/${user.uid}`
  return await axios.get(url);
}

export async function editUser(
  name?: string,
  email?: string,
  password?: string,
  date?: string
) {
  let editFields: UserFormFields = {};
  let user = firebase.auth().currentUser;

  // Se mudar email ou senha, precisa atualizar no firebase
  if (typeof email !== "undefined") {
    editFields.email = email;
    user.email = email;
  }
  if (typeof password !== "undefined") {
    editFields.password = password;
    await user.updatePassword(password);
  }

  // realiza updates no firebase
  await firebase.auth().updateCurrentUser(user);

  // TODO: melhorar isso
  if (typeof name !== "undefined") {
    editFields.name = name;
  }
  if (typeof date !== "undefined") {
    editFields.dt_nascimento = date;
  }

  // adiciona o token
  editFields.token = await user.getIdToken();
  await axios.post(`${BASE_API}/${user.uid}/edit`, editFields);
}

export async function deleteUser(softDelete = false) {}
