import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons';

function Viagem() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#27323E' }}>
      <Text style={{color:'#ECE9E6'}}>Viagem!</Text>
    </View>
  );
}

function Locais() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#27323E' }}>
      <Text style={{color:'#ECE9E6'}}>Locais!</Text>
    </View>
  );
}

function Documentos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#27323E' }}>
      <Text style={{color:'#ECE9E6'}}>Documentos!</Text>
    </View>
  );
}

function Gastos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#27323E' }}>
      <Text style={{color:'#ECE9E6'}}>Gastos!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#1DA1F2',
        inactiveTintColor: '#ECE9E6',
        style: {backgroundColor: '#333C47'},
      }}
    >
      <Tab.Screen
        name="Viagem"
        component={Viagem}
        options={{
          tabBarLabel: 'Viagem',
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-pin" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Locais"
        component={Locais}
        options={{
          tabBarLabel: 'Locais',
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-pin" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Documentos"
        component={Documentos}
        options={{
          tabBarLabel: 'Documentos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="folder-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Gastos"
        component={Gastos}
        options={{
          tabBarLabel: 'Gastos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pie-chart" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/> 
    </NavigationContainer>
  );
}
