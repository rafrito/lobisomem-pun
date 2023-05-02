import React from 'react';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';
import CharacterList from './screens/CharacterList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ImageBackground source={require('./images/home.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Lobisomem Por Uma Noite</Text>
        <CustomButton text="Iniciar jogo" onPress={() => console.log("Iniciando jogo...")} />
        <CustomButton text="Regras" onPress={() => console.log("Iniciando jogo...")} />
        <CustomButton text="Personagens" onPress={() => console.log("Iniciando jogo...")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});