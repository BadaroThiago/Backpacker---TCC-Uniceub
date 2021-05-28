import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import TravelDetail from '../screens/TravelDetail';
import AddTravel from "../screens/AddTravel";
// import EditTravel from '../screens/EditTravel';
import { TravelRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={TravelRoutes.Add}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={TravelRoutes.Add}
        component={AddTravel}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
