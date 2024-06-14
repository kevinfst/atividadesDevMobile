import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import api from '../services/api';

export default function Inicial({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const response = await api.get('');
      setMovies(response.data);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    }
  };

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity style={styles.movieContainer} onPress={() => navigateToDetails(item)}>
      <Image source={{ uri: item.foto }} style={styles.movieImage} />
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{item.nome}</Text>
        <TouchableOpacity style={styles.readMoreButton} onPress={() => navigateToDetails(item)}>
          <Text style={styles.readMoreText}>Leia mais</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieDetails: {
    flex: 1,
    marginLeft: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  readMoreButton: {
    backgroundColor: '#191970',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
  },
  readMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});