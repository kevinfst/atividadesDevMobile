import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../pages/PaginaInicial/styles'; 

export default function Vaga({ vaga, navigation }) {
  const handleSaibaMais = () => {
    navigation.navigate('SegundaPagina', { vaga });
  };

  return (
    <View style={styles.vagaContainer}>
      <Text style={styles.titulo}>{vaga.titulo}</Text>
      <Button title="Saiba mais" color='orange' onPress={handleSaibaMais} />
    </View>
  );
}
