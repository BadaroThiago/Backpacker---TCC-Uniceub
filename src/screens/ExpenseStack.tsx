import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListExpenses from '../screens/ListExpenses';
import AddExpense from '../screens/AddExpense';
import EditExpense from '../screens/EditExpense';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="ListExpenses"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ListExpenses" component={ListExpenses}></Stack.Screen>
      <Stack.Screen name="EditExpense" component={EditExpense}></Stack.Screen>
      <Stack.Screen name="AddExpense" component={AddExpense}></Stack.Screen>
    </Stack.Navigator>
  );
};

