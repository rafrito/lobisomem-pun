import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lobisomem Por Uma Noite</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Jogar"
          onPress={() => navigation.navigate('RoleSelection')}
        />
        <Button
          title="Regras"
          onPress={() => navigation.navigate('Rules')}
        />
        <Button
          title="Personagens"
          onPress={() => navigation.navigate('Characters')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
});
