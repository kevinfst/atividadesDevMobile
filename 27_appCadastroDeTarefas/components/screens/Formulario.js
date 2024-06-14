import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const TaskForm = ({ route, navigation }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const task = route.params?.task;

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setTaskDescription(task.description);
    }
  }, [task]);

  const handleSave = async () => {
    const taskData = { title: taskTitle, description: taskDescription };

    try {
      const url = task ? `https://tarefa-backend.onrender.com/tasks/${task.id}` : 'https://tarefa-backend.onrender.com/tasks';
      const method = task ? 'put' : 'post';

      await axios[method](url, taskData);
      navigation.goBack();
      navigation.navigate('TaskList'); 
    } catch (error) {
      console.error('Failed to save task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <Button title="Salvar" onPress={handleSave} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default TaskForm;
