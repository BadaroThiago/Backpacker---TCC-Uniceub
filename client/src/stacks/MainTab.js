import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Travel from '../screens/Travel';
import Local from '../screens/Local';
import Documents from '../screens/Documents';
import Spending from '../screens/Spending';

const Tab = createBottomTabNavigator ();

export default () => (
    <Tab.navigator>
        <Tab.Screen name="Travel" component = {Travel} />
        <Tab.Screen name="Local" component = {Local} />
        <Tab.Screen name="Documents" component = {Documents} />
        <Tab.Screen name="Spending" component = {Spending} />
    </Tab.navigator>
);