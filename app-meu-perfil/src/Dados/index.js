import { View, Text } from 'react-native';
import {styles} from './styles'

function Dados(){
  return(
    <View>
    <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.espacoTexto]}>Dados Pessoais</Text>
      <Text style={[styles.textoSec]}>Kevin Santos</Text>
    </View>
  )
}


export default Dados;