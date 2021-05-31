import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListDocs from '../screens/ListDocs';
import AddDoc from '../screens/AddDoc';
import EditDoc from '../screens/EditDoc';
import DetailDoc from '../screens/DetailDoc';

import { DocRoutes } from '../navigation';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={DocRoutes.List}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={DocRoutes.List} component={ListDocs}></Stack.Screen>
      <Stack.Screen name={DocRoutes.Add} component={AddDoc}></Stack.Screen>
      <Stack.Screen name={DocRoutes.Edit} component={EditDoc}></Stack.Screen>
      <Stack.Screen name={DocRoutes.Detail} component={DetailDoc}></Stack.Screen>
    </Stack.Navigator>
  );
};
