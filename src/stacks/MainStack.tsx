import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Preload from "../screens/Preload";
// import Recover from "../screens/Recover";
// import Recover_Code from "../screens/Recover_Code";
// import NewPassword from "../screens/NewPassword";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ResetPassword from "../screens/ResetPassword";
// import SignUp from "../screens/SingUp/index";

// import Home from "../screens/Home";
 import EditProfile from "../screens/EditProfile";

// import MainTab from "../stacks/MainTab";

const Stack = createStackNavigator();

export default () => {
  
  // <Stack.Screen name="Preload" component={Preload}></Stack.Screen>

  // <Stack.Screen name="Home" component={Home}></Stack.Screen>
   
   <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>

   // <Stack.Screen name="MainTab" component={MainTab}></Stack.Screen>

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
