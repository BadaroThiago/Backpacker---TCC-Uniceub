import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "../screens/AuthNavigation";
import HomeNavigation from "../screens/HomeNavigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="Travel" component={HomeNavigation} />
    </Stack.Navigator>
  );
};
