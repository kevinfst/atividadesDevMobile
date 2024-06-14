import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import Vaga from '../../components/Vaga';
import vagasTI from '../../vagas/vagas';

export default function PaginaInicial({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.tela}>
        {vagasTI.map((vaga) => (
          <Vaga key={vaga.id} vaga={vaga} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
}
