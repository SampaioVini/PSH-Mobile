import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Ajudar() {
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Ajudar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddd',
  },

  text: {
    fontSize: 25,
  }
})