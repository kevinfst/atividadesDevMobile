import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function SegundaPagina({ route }) {
  const { vaga } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{vaga.titulo}</Text>
      <Text style={styles.texto}>Descrição: {vaga.descricao}</Text>
      <Text style={styles.texto}>Salário: {vaga.salario}</Text>
      <Text style={styles.texto}>Contato: {vaga.contato}</Text>
    </View>
  );
}
