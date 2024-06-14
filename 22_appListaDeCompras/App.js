import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { Button, Provider as PaperProvider, Portal, Dialog } from 'react-native-paper';

export default function App() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadShoppingList = async () => {
      try {
        const storedList = await AsyncStorage.getItem('shoppingList');
        if (storedList) {
          setShoppingList(JSON.parse(storedList));
        }
      } catch (error) {
        console.error('Erro ao carregar lista de compras', error);
      }
    };

    loadShoppingList();
  }, []);

  const saveItem = async () => {
    if (itemName.length > 0 && itemQuantity.length > 0) {
      const newItem = { id: Date.now().toString(), name: itemName, quantity: itemQuantity };
      const newShoppingList = [...shoppingList, newItem];
      setShoppingList(newShoppingList);
      await AsyncStorage.setItem('shoppingList', JSON.stringify(newShoppingList));
      setItemName('');
      setItemQuantity('');
      setModalVisible(false);
      Keyboard.dismiss();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const cancelAddItem = () => {
    setItemName('');
    setItemQuantity('');
    setModalVisible(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          style={{ width: '100%' }}
          data={shoppingList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nenhum item na lista de compras.</Text>
          )}
        />

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Ionicons name="add" size={30} color="#FFF" />
        </TouchableOpacity>

        <Portal>
          <Dialog visible={modalVisible} onDismiss={() => setModalVisible(false)}>
            <Dialog.Title>Adicionar Item à Lista de Compras</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={styles.input}
                value={itemName}
                onChangeText={(text) => setItemName(text)}
                placeholder="Nome do Item"
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.input}
                value={itemQuantity}
                onChangeText={(text) => setItemQuantity(text)}
                placeholder="Quantidade"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={cancelAddItem} color="#d9534f">Cancelar</Button>
              <Button onPress={saveItem} color="#5cb85c">Salvar</Button>
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
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    marginTop: 5,
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
