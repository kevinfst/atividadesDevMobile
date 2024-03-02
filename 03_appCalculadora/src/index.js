import React, { useState } from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { styles } from './styles';
 
const Multiplicar = () => {
  const [resultado, setResultado] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
 
  const multiplica = () => {
    const resultadoCalculado = parseFloat(n1) * parseFloat(n2);
    setResultado(resultadoCalculado.toString());
  };
 
  const img = 'https://cdn.pixabay.com/animation/2023/10/07/12/59/12-59-14-660_512.gif';
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MULTIPLICADOR DE NÚMEROS</Text>
      <Image source={{ uri: img }} style={styles.img} />
      <TextInput
        style={styles.entrada}
        placeholder="Digite o primeiro nº"
        onChangeText={(num1) => setN1(num1)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.entrada}
        placeholder="Digite o segundo nº"
        onChangeText={(num2) => setN2(num2)}
        keyboardType="numeric"
      />
      <Pressable style={styles.botao} onPress={multiplica}>
        <Text style={styles.textoBotao}>CALCULAR</Text>
      </Pressable>
      <Text style={styles.resultado}>RESULTADO: {resultado}</Text>
    </View>
  );
};
 
export default Multiplicar;