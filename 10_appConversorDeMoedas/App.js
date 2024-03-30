import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('USD');
  const [moedaPara, setMoedaPara] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const converterMoeda = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${moedaDe}`);
      const data = await response.json();
      const taxaDeCambio = data.rates[moedaPara];
      const resultadoConvertido = (valor * taxaDeCambio).toFixed(2);
      setResultado(resultadoConvertido);
    } catch (error) {
      console.error('Erro ao converter moeda:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View style={styles.inputContainer}>
        <Text>Valor:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={(text) => setValor(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>De:</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaDe}
          onValueChange={(itemValue) => setMoedaDe(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text>Para:</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaPara}
          onValueChange={(itemValue) => setMoedaPara(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
        </Picker>
      </View>
      <Text style={styles.result}>Resultado: {resultado}</Text>
      <TouchableOpacity style={styles.button} onPress={converterMoeda}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  picker: {
    width: 150,
    marginLeft: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
