import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sinopse({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.nome}</Text>
      <Text style={styles.synopsis}>{movie.sinopse}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 18,
    textAlign: 'center',
  },
});
