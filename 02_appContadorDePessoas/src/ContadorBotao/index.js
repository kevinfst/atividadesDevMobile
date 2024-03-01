import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import {styles} from './styles'

function ContadorBotao(){
  const [cont, Contador] = useState(0)

  function incrementar_Decrementar(acaoFuncao){
    if (acaoFuncao == '+')
      Contador(cont + 1)
    else if (cont > 0)
      Contador(cont - 1)
  }

  return(
    <View style={styles.area}>

      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Text style={styles.contador}>{cont}</Text>

      <Button title='+' color='green' onPress={() => incrementar_Decrementar('+')}/>
      <Button title='-' color='red' onPress={() => incrementar_Decrementar('-')}/>
    </View>
  )
}


export default ContadorBotao;