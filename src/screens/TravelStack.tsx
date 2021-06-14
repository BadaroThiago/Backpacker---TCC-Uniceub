import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import TravelDetail from '../screens/TravelDetail';
import AddTravel from "../screens/AddTravel";
import DetailTravel from "../screens/DetailTravel";
import EditTravel from "../screens/EditTravel";
import Travel from "../screens/AddTraveler";
import { TravelRoutes } from "../navigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={TravelRoutes.Detail}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={TravelRoutes.Add} component={AddTravel} />
      <Stack.Screen name={TravelRoutes.Edit} component={EditTravel} />
      <Stack.Screen name={TravelRoutes.Traveler} component={Travel} />
      <Stack.Screen name={TravelRoutes.Detail} component={DetailTravel} />
    </Stack.Navigator>
  );
};
