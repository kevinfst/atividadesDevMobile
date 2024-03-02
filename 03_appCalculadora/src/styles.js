import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    titulo: {
    fontSize:30,
    color:'#00F8AE',
    fontFamily:'IMPACT',
    textAlign: 'center',
    marginTop: 40,
    textShadowColor:'#000000',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    },
    img: {
        margin: 25,
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    entrada: {
        height: 45,
        width: 200,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 18,
        padding: 10,
        alignSelf: 'center'
    },
    botao: {
        height: 45,
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#00F8AE'
    },
    textoBotao: {
        fontFamily: 'impact',
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 30,

    },
    resultado: {
        fontFamily: 'impact',
        alignSelf: 'center',
        fontSize: 40,
        color: '#00F8AE',
        marginTop: 40,
        textShadowColor:'#000000',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
       borderWidth: 10,
      borderColor: "black",
      borderRadius: 25,
    }
})
 
export {styles}