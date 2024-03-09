import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, Image, Pressable } from 'react-native';

import { styles } from './styles';

function Jogo() {
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const img = 'https://miro.medium.com/v2/resize:fit:1080/1*n4_Ic0t_s8YJN4YhHxb5xw.gif';

    function Gerar(){
    const calculo = Math.floor(Math.random() * 11)
    setResultado(calculo);
    }
    
  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>
        <Image source={{ uri: img }} style={styles.img} />

        <Text style={styles.resultado}>{resultado}</Text>
        <Button title="Gerar" color="purple" fontFamily='cursive' onPress={Gerar} />

        

      </View>
    </SafeAreaView>
  );
}

export default Jogo;
