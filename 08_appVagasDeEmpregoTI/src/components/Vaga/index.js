import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'

function Vaga(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.titulo}>{props.titulo}</Text>
          <Text style={styles.salario}>Salário: {props.salario}</Text>
          <Text style={styles.descricao}>Descrição: {props.descricao}</Text>
          <Text style={styles.contato}>Contato: {props.contato}</Text>
        </View>
    </View>
  )
}

export default Vaga