import React from 'react';
import { Text, View, ImageBackground  } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../styles/Home'

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../images/home.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Lobisomem Por Uma Noite</Text>
        <CustomButton text="Iniciar jogo" onPress={() => navigation.navigate('CharacterList')} />
        <CustomButton text="Regras" onPress={() => console.log("Iniciando jogo...")} />
        <CustomButton text="Personagens" onPress={() => console.log("Iniciando jogo...")} />
      </View>
    </ImageBackground>
  );
}

