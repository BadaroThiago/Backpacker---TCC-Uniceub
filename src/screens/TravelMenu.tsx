import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity } from "react-native";

import ExpenseStack from '../screens/ExpenseStack';
import SpotStack from '../screens/SpotStack';
// import DocumentStack from '../screens/DocumentStack';
import DetailTravel from '../screens/DetailTravel';
// import AddTravel from '../screens/AddTravel';

import { ExpenseRoutes, TravelRoutes, SpotRoutes } from '../navigation';

export default () => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName={TravelRoutes.Detail}
      >
        <Tab.Screen name={TravelRoutes.Detail} component={DetailTravel} />
        <Tab.Screen name={SpotRoutes.Stack} component={SpotStack} />
        <Tab.Screen name={ExpenseRoutes.Stack} component={ExpenseStack} />
      </Tab.Navigator>
  );
};
