import React, { useState } from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { styles } from './styles';

const calcularVantagem = (precoEtanol, precoGasolina) => {
  const resultadoCalculado = parseFloat(precoEtanol) / parseFloat(precoGasolina);
  if (resultadoCalculado < 0.7) {
    return 'Álcool é vantajoso';
  } else {
    return 'Gasolina é vantajosa';
  }
};

const Verificar = () => {
  const [resultado, setResultado] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');

  const verificarVantagem = () => {
    if (n1 && n2) {
      const resultadoVantagem = calcularVantagem(n1, n2);
      setResultado(resultadoVantagem);
    } else {
      setResultado('Por favor, preencha ambos os campos');
    }
  };

  const img = 'https://2.bp.blogspot.com/-vGmAOw0pG5Y/TdglpkR6f0I/AAAAAAAAA3w/mr1Xt6zXZUM/s1600/Alcool+e+Gasolina.jpg';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ÁLCOOL OU GASOLINA</Text>
      <Image source={{ uri: img }} style={styles.img} />
      <TextInput
        style={styles.entrada}
        placeholder="Preço do Álcool"
        onChangeText={(num1) => setN1(num1)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.entrada}
        placeholder="Preço da Gasolina"
        onChangeText={(num2) => setN2(num2)}
        keyboardType="numeric"
      />
      <Pressable style={styles.botao} onPress={verificarVantagem}>
        <Text style={styles.textoBotao}>VERIFICAR</Text>
      </Pressable>
      <Text style={styles.resultado}>RESULTADO: {resultado}</Text>
    </View>
  );
};

export default Verificar;
