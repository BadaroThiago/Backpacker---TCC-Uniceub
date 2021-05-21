import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import TravelMenu from "../screens/TravelMenu";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Travels"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ListTravel" component={Home} />
      <Stack.Screen name="TravelMenu" component={TravelMenu}  />
    </Stack.Navigator>
  );
};
