import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ResetPassword from "../screens/ResetPassword";

import Home from "../screens/Home";
import AddTravel from "../screens/AddTravel";
import AddLocal from "../screens/AddLocal";
import AddDoc from "../screens/AddDoc";
import AddSpent from "../screens/AddSpent";
import EditProfile from "../screens/EditProfile";
import ListExpenses from '../screens/ListExpenses';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>

      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="AddTravel" component={AddTravel}></Stack.Screen>
      <Stack.Screen name="AddLocal" component={AddLocal}></Stack.Screen>
      <Stack.Screen name="AddDoc" component={AddDoc}></Stack.Screen>
      <Stack.Screen name="AddSpent" component={AddSpent}></Stack.Screen>

      <Stack.Screen name="ListExpenses" component={ListExpenses}></Stack.Screen>

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
