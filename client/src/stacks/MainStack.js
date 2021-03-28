import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Recover from '../screens/Recover';
import Recover_Code from '../screens/Recover_Code';
import NewPassword from '../screens/NewPassword';
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';

import Home from '../screens/Home';
import EditProfile from '../screens/EditProfile';

import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => (
        <Stack.Navigator 
        initialRouteName="Preload" 
        screenOptions={{headerShown:false}
        }>


        <Stack.Screen name="Preload" component={Preload}></Stack.Screen>
        <Stack.Screen name="SingIn" component={SingIn}></Stack.Screen>
        <Stack.Screen name="SingUp" component={SingUp}></Stack.Screen>
        <Stack.Screen name="Recover" component={Recover}></Stack.Screen>
        <Stack.Screen name="Recover_Code" component={Recover_Code}></Stack.Screen>
        <Stack.Screen name="NewPassword" component={NewPassword}></Stack.Screen>

        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>

        <Stack.Screen name="MainTab" component={MainTab}></Stack.Screen>
    
    </Stack.Navigator>
);