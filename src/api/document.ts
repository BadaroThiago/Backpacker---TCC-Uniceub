import axios from "axios";
import firebase from "firebase";
import moment from "moment";

import getEnvVars from "../../environment";

import { Document } from '../models/document';

const BASE_API = `${getEnvVars().apiUrl}/document`;

export async function createDocument(documentData: Document) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  console.log(documentData);

  await axios.post(`${BASE_API}/new`, documentData, {
    headers: { Authorization: token },
  });
}

export async function getDocuments(idViagem: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let res = await axios.get(BASE_API, {
    headers: { Authorization: token },
    params: { id_viagem: idViagem },
  });

  return res.data;
}

export async function getDocument(idDocument: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  let url = `${BASE_API}/${idDocument}`;

  let res = await axios.get(url, {
    headers: { Authorization: token },
  });

  return res.data;
}

export async function editDocument(document: Document) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  return await axios.put(`${BASE_API}/${document.id_documento}`, document, {
    headers: { Authorization: token },
  });
}

export async function deleteDocument(idDocument: number) {
  let user = firebase.auth().currentUser;
  let token = await user.getIdToken();

  await axios.delete(`${BASE_API}/${idDocument}`, {
    headers: { Authorization: token },
  });
}
