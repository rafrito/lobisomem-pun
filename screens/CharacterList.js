import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../styles/CharacterList'

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
