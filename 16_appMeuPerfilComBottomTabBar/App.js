import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Pessoal: {
    name: 'person-circle-outline',
  },
  Formacao: {
    name: 'school-outline',
  },
  Experiencia: {
    name: 'briefcase-outline',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: 'forestgreen',
        activeTintColor: 'white',
        inactiveBackgroundColor: 'green',
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen name="Pessoal" component={Pessoal} />
      <Tab.Screen name="Formacao" component={Formacao} />
      <Tab.Screen name="Experiencia" component={Experiencia} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pessoal"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Experiencia" component={Experiencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
