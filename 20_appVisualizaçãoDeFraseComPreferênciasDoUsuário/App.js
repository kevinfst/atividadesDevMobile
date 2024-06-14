import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isDayMode, setIsDayMode] = useState(false);
  const [isSmallFont, setIsSmallFont] = useState(false);
  const motivationalPhrase = 'O que eu sei é que nada sei. – Sócrates';



  useEffect(() => {
    loadPreferences();
  }, []);

  useEffect(() => {
    savePreferences();
  }, [isDayMode, isSmallFont]);

  const loadPreferences = async () => {
    try {
      const dayModeValue = await AsyncStorage.getItem('dayMode');
      const smallFontValue = await AsyncStorage.getItem('smallFont');

      if (dayModeValue !== null) {
        setIsDayMode(dayModeValue === 'true');
      }
      if (smallFontValue !== null) {
        setIsSmallFont(smallFontValue === 'true');
      }
    } catch (e) {
      console.error('Erro ao carregar preferências:', e);
    }
  };

  const savePreferences = async () => {
    try {
      await AsyncStorage.setItem('dayMode', isDayMode.toString());
      await AsyncStorage.setItem('smallFont', isSmallFont.toString());
    } catch (e) {
      console.error('Erro ao salvar preferências:', e);
    }
  };

  const toggleDayMode = () => {
    setIsDayMode((prev) => !prev);
  };

  const toggleFontSize = () => {
    setIsSmallFont((prev) => !prev);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: isDayMode ? '#FFFFFF' : '#333333' }]}>
        <View style={styles.switchContainer}>
          <Text style={[styles.label, { color: isDayMode ? '#333333' : '#FFFFFF' }]}>Modo Dia:</Text>
          <Switch value={isDayMode} onValueChange={toggleDayMode} />
        </View>
        <View style={styles.switchContainer}>
          <Text style={[styles.label, { color: isDayMode ? '#333333' : '#FFFFFF' }]}>Fonte Pequena:</Text>
          <Switch value={isSmallFont} onValueChange={toggleFontSize} />
        </View>
        <Text style={[styles.phrase, { color: isDayMode ? '#333333' : '#FFFFFF', fontSize: isSmallFont ? 16 : 24 }]}>
          {motivationalPhrase}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  phrase: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
  },
});
