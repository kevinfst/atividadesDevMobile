import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#edffd1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0b5d8a',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333333',
    backgroundColor: 'white'
  },
  
  button: {
    marginBottom: 20,
    backgroundColor: '#0b5d8a',
    borderRadius: 5,
    paddingVertical: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  
  exibirResultadoContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  exibirResultado: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export {styles}