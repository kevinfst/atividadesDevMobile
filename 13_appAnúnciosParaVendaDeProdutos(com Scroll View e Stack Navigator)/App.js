import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaInicial from './src/pages/PaginaInicial';
import SegundaPagina from './src/pages/SegundaPagina';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PaginaInicial} options={{ title: 'Anúncios' }} />
        <Stack.Screen name="Details" component={SegundaPagina } options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
