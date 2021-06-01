import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import UserContextProvider from "./src/contexts/UserContext";
import MainStack from "./src/stacks/MainStack";

import getEnvVars from "./environment";

import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  const config = getEnvVars().firebase;
  firebase.initializeApp(config);

  if (__DEV__) {
    firebase.auth().useEmulator("http://localhost:9099/");
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
