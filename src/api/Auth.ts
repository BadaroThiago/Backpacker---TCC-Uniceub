import { AsyncStorage } from "react-native";
import firebase from "firebase";

export const getToken = async () => {
  let email = await AsyncStorage.getItem("email");
  let password = await AsyncStorage.getItem("password");

  if (email && password) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return;
  }

  throw new Error("Usuario nao logado previamente");
};

export const setToken = async (email: string, password: string) => {
  await AsyncStorage.setItem("email", email);
  await AsyncStorage.setItem("password", password);
};

export const deleteTokens = async () => {
  await AsyncStorage.multiRemove(["email", "password"]);
}
