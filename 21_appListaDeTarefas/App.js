import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { Button, Provider as PaperProvider, Portal, Dialog } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const recuperarTarefas = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Erro ao recuperar tarefas', error);
      }
    };

    recuperarTarefas();
  }, []);

  const gravaTarefa = async () => {
    if (input.length > 0) {
      const newTasks = [...tasks, { id: Date.now().toString(), task: input }];
      setTasks(newTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      setInput('');
      setModalVisible(false);
      Keyboard.dismiss();
    } else {
      alert('Por favor, insira uma tarefa válida.');
    }
  };

  const cancelarTarefa = () => {
    setInput('');
    setModalVisible(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          style={{ width: '100%' }}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.task}>{item.task}</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nenhuma tarefa adicionada ainda.</Text>
          )}
        />

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Ionicons name="add" size={30} color="#FFF" />
        </TouchableOpacity>

        <Portal>
          <Dialog visible={modalVisible} onDismiss={() => setModalVisible(false)}>
            <Dialog.Title>Nova Tarefa</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={styles.input}
                value={input}
                onChangeText={(texto) => setInput(texto)}
                placeholder="Digite uma tarefa"
                underlineColorAndroid="transparent"
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={cancelarTarefa} color="#d9534f">Cancelar</Button>
              <Button onPress={gravaTarefa} color="#5cb85c">Salvar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
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
  addButton: {
    backgroundColor: '#000000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  taskContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  task: {
    fontSize: 18,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
