import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "../screens/AuthNavigation";
import HomeNavigation from "../screens/HomeNavigation";

import { StackRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={StackRoutes.Auth}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={StackRoutes.Auth} component={AuthNavigation} />
      <Stack.Screen name={StackRoutes.Home} component={HomeNavigation} />
    </Stack.Navigator>
  );
};
