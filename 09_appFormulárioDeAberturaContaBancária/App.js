import { useState } from 'react';
import { View, Text, Switch, TextInput, Picker, Button, Pressable} from 'react-native';
import {styles} from './styles';
import Slider from '@react-native-community/slider';

function App() {


  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Selecione');
  const [escolaridade, setEscolaridade] = useState('Selecione');
  const [valor, setValor] = useState(0)
  const [status, setStatus] = useState(false)

  const [confirmarDados, setConfirmarDados] = useState(false);

  const ButtonConfirmar = () => {
    setConfirmarDados(true);
  };



  return (

    <View>

      <Text style={styles.titulo}>Abertura de Conta</Text>

    <TextInput style={styles.global}
    placeholder="Nome"
    onChangeText={setNome}
    />

    <TextInput
    style={styles.global}
    placeholder="Idade"
    onChangeText={setIdade}
    />

  

    <View style={styles.global}>

    <Text style={styles.global}>Sexo:</Text>

    <Picker
          style={styles.global}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item value={''} label='Selecione'/>
          <Picker.Item value={"Masculino"} label="Masculino"/>
          <Picker.Item value={"Feminino"} label="Feminino"/>
        </Picker>

    </View>

    <View>

    <Text style={styles.global}>Escolaridade:</Text>

    <Picker
          style={styles.global}
          selectedValue={escolaridade}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
    >
      <Picker.Item key={1} value={1} label="Selecione" />
      <Picker.Item key={2} value={2} label="Incompleto" />
      <Picker.Item key={3} value={3} label="Completo" />
    </Picker>

    </View>

    <View style={styles.botao}>

    <Text style={styles.global}>Limite: </Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
        value={valor}
      />

       <Text style={{textAlign: 'center', fontSize: 30}}>
        {valor.toFixed(0)}
      </Text>

    </View>
    
   <View style={styles.botao}>

    <Text style={styles.global}>
        {(status) ? "Brasileiro" : "Brasileiro"}
    </Text>

    <Switch
      value={status}
      onValueChange={ (valorSwitch) => setStatus(valorSwitch) }
    />

    </View>

    <View>

      
     <Pressable style={styles.confirmar} onPress={ButtonConfirmar} >
        <Text style={styles.confirmarText}> Confirmar </Text>
      </Pressable>
     
      {confirmarDados && (
        <View style={styles.global}>
          <Text style={styles.texto}>Nome: {nome}</Text>
          <Text style={styles.texto}>Idade: {idade}</Text>
          <Text style={styles.texto}>Sexo: {sexo}</Text>
          <Text style={styles.texto}>Escolaridade: {escolaridade}</Text>
          <Text style={styles.texto}>Limite: {Math.round(valor)}</Text>
          <Text style={styles.texto}>Brasileiro: {status ? 'Sim' : 'Não'}</Text>
        </View>
      )}

    </View>


    </View>

    


    


  );
}

   




export default App


