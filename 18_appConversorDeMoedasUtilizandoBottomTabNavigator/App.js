import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import Bitcoin from './src/pages/RealBit';
import Dolar from './src/pages/RealDolar';
import Euro from './src/pages/RealEuro';

const Tab = createBottomTabNavigator();


const icons = {
  Bitcoin:{
    name: 'logo-bitcoin',
  },
  Dolar:{
    name: 'logo-usd',
  },
  Euro:{
    name: 'logo-euro',
  }
}


export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >
        <Tab.Screen name='Bitcoin' component={Bitcoin} />
        <Tab.Screen name='Dolar' component={Dolar} />
        <Tab.Screen name='Euro' component={Euro} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

<NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        activeBackgroundColor: 'lightgray',
        activeTintColor: 'red',
        inactiveBackgroundColor: 'yellow',
        inactiveTintColor: 'blue'
      }}
      >
        <Tab.Screen name='Bitcoin' component={Bitcoin} />
        <Tab.Screen name='Dolar' component={Dolar} />
        <Tab.Screen name='Euro' component={Euro} />
      </Tab.Navigator>
</NavigationContainer>

