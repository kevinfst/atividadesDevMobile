import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';




const Banco = ({ navigation }) => { // Recebe 'navigation' como prop
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limiteConta, setLimiteConta] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [confirmado, setConfirmado] = useState(false); 

  const handleConfirmar = () => {
    setConfirmado(true); 
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Sexo:', sexo);
    console.log('Escolaridade:', escolaridade);
    console.log('Limite na conta:', limiteConta);
    console.log('Brasileiro:', brasileiro);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> CONTA BANCARIA</Text>
      <ScrollView>
        <TextInput
          style={styles.entradaTexto}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder="Idade"
          value={idade}
          onChangeText={text => setIdade(text)}
          keyboardType="numeric"
        />
        <Picker
          style={styles.entradaTexto}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
        <Picker
          style={styles.entradaTexto}
          selectedValue={escolaridade}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
        >
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Graduação" value="Graduação" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
        <Slider
          style={styles.controleDeslizante}
          minimumValue={0}
          maximumValue={1000}
          value={limiteConta}
          onValueChange={value => setLimiteConta(value)}
        />
        <Text>Limite na conta: R${limiteConta.toFixed(2)}</Text>
        <View style={styles.containerSwitch}>
          <Text>Brasileiro:</Text>
          <Switch
            value={brasileiro}
            onValueChange={value => setBrasileiro(value)}
          />
        </View>
        <Button title="Confirmar" onPress={handleConfirmar} />
        {confirmado && (
          <Button
            title="Ver Resultado"
            onPress={() => navigation.navigate('Resultado', { nome, idade, sexo, escolaridade, limiteConta, brasileiro })}
          />
        )}
      </ScrollView>
    </View>
  );
};

const Resultado = ({ route }) => {
  const { nome, idade, sexo, escolaridade, limiteConta, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.textoExibido}>Nome: {nome}</Text>
      <Text style={styles.textoExibido}>Idade: {idade}</Text>
      <Text style={styles.textoExibido}>Sexo: {sexo}</Text>
      <Text style={styles.textoExibido}>Escolaridade: {escolaridade}</Text>
      <Text style={styles.textoExibido}>Limite na conta: R${limiteConta.toFixed(2)}</Text>
      <Text style={styles.textoExibido}>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  );
};


export default Banco;
