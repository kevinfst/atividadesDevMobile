import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


export default function Formacao() {
 return (
   <View>
     <Text style={styles.titulo}>Formação:</Text>
     <Text style={styles.texto}>Estudante</Text>
    
   </View>
  );
}
