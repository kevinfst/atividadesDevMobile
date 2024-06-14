import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createMaterialTopTabNavigator();


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
        topTapBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      topTapBarOptions={{
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

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao} />
        <Tab.Screen name='Experiencia' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

