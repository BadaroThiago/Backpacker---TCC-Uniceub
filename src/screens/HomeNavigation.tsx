import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListTravels from "../screens/ListTravels";
import TravelMenu from "../screens/TravelMenu";
import AddTravel from "../screens/AddTravel";
import EditProfile from "../screens/EditProfile";
import EditTravel from "../screens/EditTravel";

import { TravelRoutes, UserRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={TravelRoutes.List}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={TravelRoutes.List} component={ListTravels} />

      <Stack.Screen name={TravelRoutes.Stack} component={TravelMenu} />
      <Stack.Screen name={TravelRoutes.Add} component={AddTravel} />
      <Stack.Screen name={UserRoutes.Edit} component={EditProfile} />
    </Stack.Navigator>
  );
};
