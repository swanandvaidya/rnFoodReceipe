import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PrimaryButton = ({buttonText, marginTop, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, marginTop]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    backgroundColor: '#FD5D69',
    padding: 12,
    marginStart: 16,
    marginEnd: 16,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
});
