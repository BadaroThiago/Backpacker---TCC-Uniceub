import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./src/stacks/MainStack";

import getEnvVars from "./environment";

import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  const config = getEnvVars().firebase;
  firebase.initializeApp(config);

  if (__DEV__) {
    console.log("Firebase is setting emulator on...");
    console.log(getEnvVars().apiUrl);
    firebase.auth().useEmulator(getEnvVars().firebaseUrl);
  }

  console.log("Firebase is on!");
}

export default () => {
  return (
    <NavigationContainer>
      <MainStack></MainStack>
    </NavigationContainer>
  );
};
