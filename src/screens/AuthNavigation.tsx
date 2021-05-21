import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ResetPassword from "../screens/ResetPassword";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen>
    </Stack.Navigator>
  );
};
