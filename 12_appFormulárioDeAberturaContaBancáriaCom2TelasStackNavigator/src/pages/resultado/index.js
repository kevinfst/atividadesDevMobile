import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { createStackNavigator } from '@react-navigation/stack';

const Resultado = ({ route }) => {
  const { nome, idade, sexo, escolaridade, limiteConta, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.textoExibido}>Nome: {nome}</Text>
      <Text style={styles.textoExibido}>Idade: {idade}</Text>
      <Text style={styles.textoExibido}>Sexo: {sexo}</Text>
      <Text style={styles.textoExibido}>Escolaridade: {escolaridade}</Text>
      <Text style={styles.textoExibido}>Limite na conta: R${limiteConta.toFixed(2)}</Text>
      <Text style={styles.textoExibido}>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  );
};

export default Resultado;
