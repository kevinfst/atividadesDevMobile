import { View, Text } from 'react-native';
import {styles} from './styles'

function Projetos(){
  return(
    <View>
    <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.espacoTexto]}>Projetos</Text>
      <Text style={[styles.textoSec]}>CGM - Sistema de Controle de Guarita Militar</Text>
    </View>
  )
}


export default Projetos;