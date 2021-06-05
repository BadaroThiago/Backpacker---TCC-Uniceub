import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListSpots from "../screens/ListSpots";
import AddSpot from "../screens/AddSpot";
import EditSpot from "../screens/EditSpot";
import DetailSpot from "../screens/DetailSpot";

import { SpotRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={SpotRoutes.List}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SpotRoutes.List} component={ListSpots}></Stack.Screen>
      <Stack.Screen name={SpotRoutes.Add} component={AddSpot}></Stack.Screen>
      <Stack.Screen name={SpotRoutes.Edit} component={EditSpot}></Stack.Screen>
      <Stack.Screen
        name={SpotRoutes.Detail}
        component={DetailSpot}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
