import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListTravels from "../screens/ListTravels";
import TravelMenu from "../screens/TravelMenu";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Travels"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ListTravels" component={ListTravels} />
      <Stack.Screen name="TravelMenu" component={TravelMenu}  />
    </Stack.Navigator>
  );
};
