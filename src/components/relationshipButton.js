import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default ({ text, selected , onPress}) => (
  <TouchableOpacity onPress={onPress} style={{ borderRadius: 60, borderColor: selected ? '#63dde7' : '#eeeff1', borderWidth: 1, margin: 6, padding: 6 }}>
    <Text style={{ fontSize: 10}} >{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // buttonContainer: {
  //   borderRadius: 60,
  //   borderColor: 'blue',
  //   borderWidth: 1,
  //   padding: 16,
  //   margin: 10
  // }
})