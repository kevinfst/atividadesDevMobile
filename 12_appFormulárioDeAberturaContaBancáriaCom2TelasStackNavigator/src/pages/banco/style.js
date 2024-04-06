import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
  titulo:{
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20, 
  },
  entradaTexto: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
  },
  controleDeslizante: {
    width: '80%',
    marginBottom: 5,
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoExibido: {
    marginTop: 10,
  },
});
export { styles };