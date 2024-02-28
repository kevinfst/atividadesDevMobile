import { View, Text, Image } from 'react-native';
import Foto from './src/Foto'
import Dados from './src/Dados'
import Formacao from './src/Formacao'
import Experiencia from './src/Experiencia'
import Projetos from './src/Projetos'

function App(){
    let dados = 'Dados pessoais';
    let nm = 'Kevin Santos';
    let form = 'ADS';
    let img = 'https://pbs.twimg.com/media/GGzdOAqW8AA22Zq.jpg';

    
  return(
     <View>

        <Text style={{color: '#FF0000', fontSize: 25, marginLeft: 80}}>
      App Meu Perfil
        </Text>

      <Foto /> 
      <Dados /> 
      <Formacao /> 
      <Experiencia /> 
      <Projetos /> 

      </View>
  )
}




export default App;
