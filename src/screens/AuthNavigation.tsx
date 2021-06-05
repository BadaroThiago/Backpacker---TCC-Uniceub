import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ResetPassword from "../screens/ResetPassword";

import { AuthRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRoutes.SignIn}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={AuthRoutes.SignIn} component={SignIn}></Stack.Screen>
      <Stack.Screen name={AuthRoutes.SignUp} component={SignUp}></Stack.Screen>
      <Stack.Screen
        name={AuthRoutes.ResetPassword}
        component={ResetPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
