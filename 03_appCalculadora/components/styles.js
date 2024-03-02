import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    titulo: {
        fontFamily: 'Courier',
        color: 'purple',
        fontSize: 40,
        alignSelf: 'center',
        margin: 50
    },
    img: {
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
        backgroundColor: 'lightblue'
    },
    textoBotao: {
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 20,
    },
    resultado: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'purple'
    }
})

export {styles}