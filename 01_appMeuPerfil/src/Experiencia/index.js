import { View, Text } from 'react-native';
import {styles} from './styles'

function Experiencia(){
  return(
    <View>
    <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.espacoTexto]}>Experiência</Text>
      <Text style={[styles.textoSec]}>Estágio Oracle</Text>
    </View>
  )
}


export default Experiencia;