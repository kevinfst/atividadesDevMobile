import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function SegundaPagina({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.image }} style={styles.image} />
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.description}>{produto.description}</Text>
    </View>
  );
}
