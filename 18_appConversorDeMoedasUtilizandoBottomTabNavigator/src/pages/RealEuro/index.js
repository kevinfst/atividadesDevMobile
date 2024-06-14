import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const Euro = () => {
  const [valor, setValor] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('euro');
  const [exibirResultado, setExibirResultado] = useState('');

  const taxaConversao = { euro: 5.77,
  };

  const converterMoeda = () => {
    const valorFloat = parseFloat(valor.replace(',', '.'));
    const valorConvertido = valorFloat * taxaConversao[moedaDestino];

    const resultadoFormatado = 'RESULTADO: ' + valorConvertido.toFixed(2).replace('.', ',');

    setExibirResultado(resultadoFormatado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONVERSOR DE MOEDAS </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          value={valor}
          placeholder="Digite o valor em R$"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={converterMoeda}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
      <View style={styles.exibirResultadoContainer}>
        <Text style={styles.exibirResultado}>{exibirResultado}</Text>
      </View>
    </View>
  );
}


export default Euro;