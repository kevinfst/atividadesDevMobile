import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'

function Anuncio(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Image 
            source={{uri: props.foto}}
            style={styles.imagemAnuncio}
          />
          <Text style={styles.tituloAnuncio}>{props.titulo}</Text>
          <Text style={styles.textoAnuncio}>{props.linha1}</Text>
          <Text style={styles.textoAnuncio}>{props.linha2}</Text>
          <Text style={styles.textoAnuncio}>{props.linha3}</Text>
        </View>
    </View>
  )
}

export default Anuncio