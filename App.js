import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lobisomem{"\n"}por uma noite</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Jogar"
          onPress={() => navigation.navigate('RoleSelection')}
        />
        <View style={styles.separator} />
        <Button
          title="Regras"
          onPress={() => navigation.navigate('Rules')}
        />
        <View style={styles.separator} />
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
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: '80%',
  },
  separator: {
    height: 10,
  },
});
