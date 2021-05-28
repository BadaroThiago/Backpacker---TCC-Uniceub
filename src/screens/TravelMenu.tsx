import React, { useContext, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExpenseStack from "../screens/ExpenseStack";
import SpotStack from "../screens/SpotStack";
import TravelStack from '../screens/TravelStack';
// import DocumentStack from '../screens/DocumentStack';
import DetailTravel from "../screens/DetailTravel";
import EditTravel from '../screens/EditTravel';

import { ExpenseRoutes, TravelRoutes, SpotRoutes } from "../navigation";

import { TravelContext } from '../context';

export default ({ route }) => {
  const [idViagem, setIdViagem] = useState(route.params.id_viagem);
  const Tab = createBottomTabNavigator();

  const value = { idViagem, setIdViagem };

  return (
  // @ts-ignore
  <TravelContext.Provider value={value}>
    <Tab.Navigator initialRouteName={TravelRoutes.Stack}>
      <Tab.Screen name={TravelRoutes.Stack} component={TravelStack} />
      <Tab.Screen name={SpotRoutes.Stack} component={SpotStack} />
      <Tab.Screen name={ExpenseRoutes.Stack} component={ExpenseStack} />
    </Tab.Navigator>
  </TravelContext.Provider>
  );
};
