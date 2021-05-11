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
import DetailTrip from "../screens/DetailTrip";
import DetailLocal from "../screens/DetailLocal";
import DetailDoc from "../screens/DetailDoc";
import DetailExpenses from "../screens/DetailExpenses";
import EditTrip from "../screens/EditTrip";
import EditLocal from "../screens/EditLocal";
import EditDoc from "../screens/EditDoc";
import ListExpenses from '../screens/ListExpenses';
import Local from '../screens/Local';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="EditTrip"
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
      <Stack.Screen name="DetailTrip" component={DetailTrip}></Stack.Screen>
      <Stack.Screen name="DetailLocal" component={DetailLocal}></Stack.Screen>
      <Stack.Screen name="DetailDoc" component={DetailDoc}></Stack.Screen>
      <Stack.Screen name="DetailExpenses" component={DetailExpenses}></Stack.Screen>
      <Stack.Screen name="EditTrip" component={EditTrip}></Stack.Screen>
      <Stack.Screen name="EditLocal" component={EditLocal}></Stack.Screen>
      <Stack.Screen name="EditDoc" component={EditDoc}></Stack.Screen>
      <Stack.Screen name="Local" component={Local}></Stack.Screen>

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
