import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ResetPassword from "../screens/ResetPassword";

import Home from "../screens/Home";
import AddTravel from "../screens/AddTravel";
import AddLocal from "../screens/AddLocal";
import AddDoc from "../screens/AddDoc";
import AddSpent from "../screens/AddExpenses";
import EditProfile from "../screens/EditProfile";
import DetailTravel from "../screens/DetailTravel";
import DetailLocal from "../screens/DetailLocal";
import DetailDoc from "../screens/DetailDoc";
import DetailExpenses from "../screens/DetailExpenses";
import EditTravel from "../screens/EditTravel";
import EditLocal from "../screens/EditLocal";
import EditDoc from "../screens/EditDoc";
import ListExpenses from '../screens/ListExpenses';
import ListDocs from '../screens/ListDocs';
import Local from '../screens/Local';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="DetailTravel"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>

      <Stack.Screen name="AddTravel" component={AddTravel}></Stack.Screen>
      <Stack.Screen name="AddLocal" component={AddLocal}></Stack.Screen>
      <Stack.Screen name="AddDoc" component={AddDoc}></Stack.Screen>
      <Stack.Screen name="AddSpent" component={AddSpent}></Stack.Screen>

      <Stack.Screen name="ListExpenses" component={ListExpenses}></Stack.Screen>
      <Stack.Screen name="ListDocs" component={ListDocs}></Stack.Screen>

      <Stack.Screen name="DetailTravel" component={DetailTravel}></Stack.Screen>
      <Stack.Screen name="DetailLocal" component={DetailLocal}></Stack.Screen>
      <Stack.Screen name="DetailDoc" component={DetailDoc}></Stack.Screen>
      <Stack.Screen name="DetailExpenses" component={DetailExpenses}></Stack.Screen>

      <Stack.Screen name="EditTravel" component={EditTravel}></Stack.Screen>
      <Stack.Screen name="EditLocal" component={EditLocal}></Stack.Screen>
      <Stack.Screen name="EditDoc" component={EditDoc}></Stack.Screen>
      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>

      <Stack.Screen name="Local" component={Local}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
