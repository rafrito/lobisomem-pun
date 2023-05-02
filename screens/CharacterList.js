import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';


export default function CharacterList({ navigation }) {
  const [characters, setCharacters] = useState([
    { name: 'Lobisomem', selected: false },
    { name: 'Cidadão', selected: false },
    { name: 'Vidente', selected: false },
    { name: 'Bruxa', selected: false },
    { name: 'Caçador', selected: false },
    { name: 'Aldeão', selected: false },
  ]);

  const handleCharacterSelect = (index) => {
    const newCharacters = [...characters];
    newCharacters[index].selected = !newCharacters[index].selected;
    setCharacters(newCharacters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      {characters.map((character, index) => (
        <View style={styles.characterRow} key={index}>
          <Text style={styles.characterName}>{character.name}</Text>
          <CustomButton
            text={character.selected ? 'Remover' : 'Adicionar'}
            onPress={() => handleCharacterSelect(index)}
          />
        </View>
      ))}
      <CustomButton text="Iniciar Jogo" onPress={() => navigation.goBack()} />
    </View>
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
  },
  characterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  characterName: {
    fontSize: 18,
  },
});
