import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext'
import MainStack from './src/stacks/MainStack';

import firebase from 'firebase';
import apiKeys from './keys';

if (!firebase.apps.length) {
  firebase.initializeApp(apiKeys.firebaseConfig);
  console.log('Firebase is on!');
}

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack></MainStack>
      </NavigationContainer>
    </UserContextProvider>
  );
}
