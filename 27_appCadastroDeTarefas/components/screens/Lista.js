import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://tarefa-backend.onrender.com/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://tarefa-backend.onrender.com/tasks/${id}`);
      fetchTasks(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true); 

    try {
      await fetchTasks(); 
    } catch (error) {
      console.error(error);
    }

    setRefreshing(false); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('TaskForm', { task: item })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            deleteTask(item.id); // Chama a função deleteTask ao pressionar o botão Excluir
          }}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Adicionar" onPress={() => navigation.navigate('TaskForm')} color="red" />
      <View style={styles.reloadButtonContainer}>
        <TouchableOpacity
          style={styles.reloadButton}
          onPress={handleRefresh}
        >
          <Text style={styles.buttonText}>Recarregar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing} 
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  taskContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reloadButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  reloadButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 5,
  },
});

export default TaskList;
