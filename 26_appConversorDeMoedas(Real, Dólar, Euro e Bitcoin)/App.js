import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('BRL');
  const [result, setResult] = useState(null);

  const handleConversion = async () => {
    const url = `https://economia.awesomeapi.com.br/json/last/${sourceCurrency}-${targetCurrency}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const exchangeRate = data[`${sourceCurrency}${targetCurrency}`].ask;
      const conversionResult = parseFloat(amount) * parseFloat(exchangeRate);
      setResult(conversionResult.toFixed(2));
    } catch (error) {
      console.error("Erro ao buscar taxa de conversão:", error);
    }
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Conversor de Moedas</Text>
      <TextInput
        style={appStyles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={appStyles.pickerContainer}>
        <Text style={appStyles.label}>De:</Text>
        <Picker
          selectedValue={sourceCurrency}
          onValueChange={setSourceCurrency}
          style={appStyles.picker}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Bitcoin (BTC)" value="BTC" />
        </Picker>
      </View>
      <View style={appStyles.pickerContainer}>
        <Text style={appStyles.label}>Para:</Text>
        <Picker
          selectedValue={targetCurrency}
          onValueChange={setTargetCurrency}
          style={appStyles.picker}
        >
          <Picker.Item label="Real (BRL)" value="BRL" />
        </Picker>
      </View>
      <TouchableOpacity style={appStyles.button} onPress={handleConversion}>
        <Text style={appStyles.buttonText}>Converter</Text>
      </TouchableOpacity>
      {result !== null && (
        <Text style={appStyles.result}>Valor convertido: {result}</Text>
      )}
    </View>
  );
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    marginTop: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#333',
  },
  picker: {
    height: 55,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50', // Cor verde personalizada
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    marginTop: 25,
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
});

export default CurrencyConverter;
