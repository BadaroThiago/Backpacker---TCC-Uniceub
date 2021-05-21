import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity } from "react-native";

import ExpenseStack from '../screens/ExpenseStack';
// import SpotStack from '../screens/SpotStack';
// import DocumentStack from '../screens/DocumentStack';
// import TravelDetail from '../screens/TravelDetail';
import AddTravel from '../screens/AddTravel';

export default () => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator>
        <Tab.Screen name="AddTravel" component={AddTravel} />
        <Tab.Screen name="ExpenseStack" component={ExpenseStack} />
      </Tab.Navigator>
  );
};
