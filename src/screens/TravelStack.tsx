import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TravelDetail from '../screens/TravelDetail';
import AddTravel from '../screens/AddTravel';
// import EditTravel from '../screens/EditTravel';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="TravelDetail"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TravelDetail" component={TravelDetail}></Stack.Screen>
      <Stack.Screen name="AddTravel" component={AddTravel}></Stack.Screen>
      <Stack.Screen name="EditTravel" component={ResetPassword}></Stack.Screen>
    </Stack.Navigator>
  );
};

