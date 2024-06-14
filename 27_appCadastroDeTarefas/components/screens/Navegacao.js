import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './Lista';
import TaskForm from './Formulario';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{ 
            title: 'Tarefas',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
          }}
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskForm}
          options={{ 
            title: 'Incluir/Editar Tarefa',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red', 
  },
  headerTitle: {
    color: '#fff', 
    fontWeight: 'bold', 
  },
});

export default AppNavigator;

