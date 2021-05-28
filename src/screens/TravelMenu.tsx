import React, { createContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExpenseStack from "../screens/ExpenseStack";
import SpotStack from "../screens/SpotStack";
// import DocumentStack from '../screens/DocumentStack';
import DetailTravel from "../screens/DetailTravel";
// import AddTravel from '../screens/AddTravel';

import { ExpenseRoutes, TravelRoutes, SpotRoutes } from "../navigation";

import { TravelContext } from '../context';

export default ({ route }) => {
  const Tab = createBottomTabNavigator();
  const id_viagem = route.params.id_viagem;

  return (
  <TravelContext.Provider value={id_viagem}>
    <Tab.Navigator initialRouteName={TravelRoutes.Detail}>
      <Tab.Screen name={TravelRoutes.Detail} component={DetailTravel} />
      <Tab.Screen name={SpotRoutes.Stack} component={SpotStack} />
      <Tab.Screen name={ExpenseRoutes.Stack} component={ExpenseStack} />
    </Tab.Navigator>
  </TravelContext.Provider>
  );
};
