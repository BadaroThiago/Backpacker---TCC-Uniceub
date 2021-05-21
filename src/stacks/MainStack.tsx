import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import SignIn from "../screens/SignIn";
// import SignUp from "../screens/SignUp";
// import ResetPassword from "../screens/ResetPassword";

// import Home from "../screens/Home";
// import AddTravel from "../screens/AddTravel";
// import AddLocal from "../screens/AddLocal";
// import AddDoc from "../screens/AddDoc";
// import AddSpent from "../screens/AddSpent";
// import EditProfile from "../screens/EditProfile";
// import ListExpenses from "../screens/ListExpenses";
// import TravelMenu from "../screens/TravelMenu";

import AuthNavigation from "../screens/AuthNavigation";
import HomeNavigation from "../screens/HomeNavigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="Travel" component={HomeNavigation} />
    </Stack.Navigator>
  );
};
