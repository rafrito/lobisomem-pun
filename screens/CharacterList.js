import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';


export default function CharacterList({ navigation }) {
  const [numPlayers, setNumPlayers] = useState(4);
  const [characters, setCharacters] = useState([
    { name: 'Lobisomem', count: 0 },
    { name: 'Cidadão', count: 0 },
    { name: 'Vidente', count: 0 },
    { name: 'Bruxa', count: 0 },
    { name: 'Caçador', count: 0 },
    { name: 'Aldeão', count: 0 },
  ]);

  const handleCharacterSelect = (index, increment) => {
    const newCharacters = [...characters];
    newCharacters[index].count += increment;
    setCharacters(newCharacters);
  };

  const handlePlayerChange = (increment) => {
    setNumPlayers(Math.max(4, numPlayers + increment));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Jogadores: {numPlayers}</Text>
        <View style={styles.playerButtons}>
          <CustomButton text="-" onPress={() => handlePlayerChange(-1)} />
          <CustomButton text="+" onPress={() => handlePlayerChange(1)} />
        </View>
      </View>
      <Text style={styles.title}>Personagens</Text>
      {characters.map((character, index) => (
        <View style={styles.characterRow} key={index}>
          <Text style={styles.characterName}>
            {character.name} ({character.count})
          </Text>
          <View style={styles.characterButtons}>
            <CustomButton text="-" onPress={() => handleCharacterSelect(index, -1)} />
            <CustomButton text="+" onPress={() => handleCharacterSelect(index, 1)} />
          </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  playerButtons: {
    flexDirection: 'row',
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
  characterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
