import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleSearchCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      Alert.alert('Erro', 'CEP não encontrado. Verifique o número digitado.');
      setAddress(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite o CEP para consultar:</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        placeholder="Ex: 12345-678"
        keyboardType="numeric"
        maxLength={9}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearchCep}>
        <Text style={styles.buttonText}>Consultar</Text>
      </TouchableOpacity>

      {address && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            CEP: {address.cep}
          </Text>
          <Text style={styles.addressText}>
            Logradouro: {address.logradouro}
          </Text>
          <Text style={styles.addressText}>
            Complemento: {address.complemento}
          </Text>
          <Text style={styles.addressText}>
            Bairro: {address.bairro}
          </Text>
          <Text style={styles.addressText}>
            Localidade: {address.localidade} - {address.uf}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#006400',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  addressContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: '100%',
  },
  addressText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
