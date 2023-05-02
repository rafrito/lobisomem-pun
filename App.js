import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lobisomem Por Uma Noite</Text>
      <CustomButton text="Iniciar jogo" onPress={() => console.log("Iniciando jogo...")} />
      <CustomButton text="Regras" onPress={() => console.log("Iniciando jogo...")} />
      <CustomButton text="Personagens" onPress={() => console.log("Iniciando jogo...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
