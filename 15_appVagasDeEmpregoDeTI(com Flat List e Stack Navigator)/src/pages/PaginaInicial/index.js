import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import Vaga from '../../components/Vaga';
import vagasTI from '../../vagas/vagas';

export default function PaginaInicial({ navigation }) {
  const renderItem = ({ item }) => (
    <Vaga vaga={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vagasTI}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
