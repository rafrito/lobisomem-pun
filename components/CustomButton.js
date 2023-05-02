import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
