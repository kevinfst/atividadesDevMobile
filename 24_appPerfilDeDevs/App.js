import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import api from './src/services/api';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [username, setUsername] = useState('');
  const [devInfo, setDevInfo] = useState(null);

  const fetchDevInfo = async () => {
    try {
      const response = await api.get(username);
      setDevInfo(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Usuário não encontrado. Verifique o nome de usuário.');
      setDevInfo(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Perfil dos Devs</Text>
      <View style={styles.iconContainer}>
        <Icon name="logo-github" size={100} color="4078c0" />
      </View>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Digite o login do Git.."
      />
      <TouchableOpacity style={styles.button} onPress={fetchDevInfo}>
        <Text style={styles.buttonText}>Buscar Perfil</Text>
      </TouchableOpacity>

      {devInfo && (
        <View style={styles.profile}>
          <Image
            source={{ uri: devInfo.avatar_url }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{devInfo.name}</Text>
          <Text style={styles.username}>@{devInfo.login}</Text>
          <Text style={styles.bio}>{devInfo.bio}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>ID: {devInfo.id}</Text>
            <Text style={styles.info}>Repositórios: {devInfo.public_repos}</Text>
            <Text style={styles.info}>Criado em: {new Date(devInfo.created_at).toLocaleDateString()}</Text>
            <Text style={styles.info}>Seguidores: {devInfo.followers}</Text>
            <Text style={styles.info}>Seguindo: {devInfo.following}</Text>
          </View>
        </View>
      )}
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
   
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4B0082',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  profile: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});
