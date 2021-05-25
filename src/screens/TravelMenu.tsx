import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity } from "react-native";

import ExpenseStack from '../screens/ExpenseStack';
// import SpotStack from '../screens/SpotStack';
// import DocumentStack from '../screens/DocumentStack';
// import TravelDetail from '../screens/TravelDetail';
import AddTravel from '../screens/AddTravel';

import { ExpenseRoutes, TravelRoutes } from '../navigation';

export default () => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator>
        <Tab.Screen name={TravelRoutes.Add} component={AddTravel} />
        <Tab.Screen name={ExpenseRoutes.Stack} component={ExpenseStack} />
      </Tab.Navigator>
  );
};
