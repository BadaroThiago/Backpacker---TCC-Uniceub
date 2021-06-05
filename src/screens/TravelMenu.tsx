import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExpenseStack from "../screens/ExpenseStack";
import SpotStack from "../screens/SpotStack";
import TravelStack from "../screens/TravelStack";
import DocumentStack from "../screens/DocumentStack";

import { Ionicons } from "@expo/vector-icons";

import {
  ExpenseRoutes,
  TravelRoutes,
  SpotRoutes,
  DocRoutes,
} from "../navigation";

import { TravelContext } from "../context";

export default ({ route }) => {
  const [idViagem, setIdViagem] = useState(route.params.id_viagem);
  const Tab = createBottomTabNavigator();

  const value = { idViagem, setIdViagem };

  return (
    // @ts-ignore
    <TravelContext.Provider value={value}>
      <Tab.Navigator
        initialRouteName={TravelRoutes.Stack}
        tabBarOptions={{
          activeTintColor: "#1DA1F2",
          inactiveTintColor: "#ECE9E6",
          style: { backgroundColor: "#333C47", paddingTop: 5 },
        }}
      >
        <Tab.Screen
          name={TravelRoutes.Stack}
          component={TravelStack}
          options={{
            tabBarLabel: "Viagem",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={SpotRoutes.Stack}
          component={SpotStack}
          options={{
            tabBarLabel: "Locais",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pin" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ExpenseRoutes.Stack}
          component={ExpenseStack}
          options={{
            tabBarLabel: "Gastos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pie-chart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={DocRoutes.Stack}
          component={DocumentStack}
          options={{
            tabBarLabel: "Documentos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="folder-open" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </TravelContext.Provider>
  );
};
