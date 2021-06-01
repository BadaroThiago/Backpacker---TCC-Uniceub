import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListExpenses from "../screens/ListExpenses";
import AddExpense from "../screens/AddExpense";
import EditExpense from "../screens/EditExpenses";
import DetailExpense from "../screens/DetailExpenses";

import { ExpenseRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={ExpenseRoutes.List}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ExpenseRoutes.List} component={ListExpenses} />
      <Stack.Screen name={ExpenseRoutes.Add} component={AddExpense} />
      <Stack.Screen name={ExpenseRoutes.Edit} component={EditExpense} />
      <Stack.Screen name={ExpenseRoutes.Detail} component={DetailExpense} />
    </Stack.Navigator>
  );
};
