import { View, Text } from 'react-native';
import {styles} from './styles'

function Formacao(){
  return(
    <View>
    <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.espacoTexto]}>Formação</Text>
      <Text style={[styles.textoSec]}>ADS</Text>
    </View>
  )
}


export default Formacao;