import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/pages/Inicial'; 
import Sinopse from './src/pages/Sinopse'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Filmes"  component={Inicial} />
        <Stack.Screen name="MovieDetails" component={Sinopse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
