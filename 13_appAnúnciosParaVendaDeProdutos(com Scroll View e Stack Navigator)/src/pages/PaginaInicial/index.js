import React from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { styles } from './styles';
import produtos from '../../produtos/produtos';

export default function PaginaInicial({ navigation }) {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {produtos.map((produto) => (
        <View key={produto.id} style={styles.product}>
          <Image source={{ uri: produto.image }} style={styles.image} />
          <Text style={styles.title}>{produto.title}</Text>
          <Button
            title="Ver detalhes" color='grey'
            onPress={() => navigation.navigate('Details', { produto })}
          />
        </View>
      ))}
    </ScrollView>
  );
}
