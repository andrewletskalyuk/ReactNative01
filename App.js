import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x = 1;
  console.log("App executed 007");

  return (
    <View style={styles.container}>
      <Text style={styles.sister}>Моя сім'я - моя фортеця!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sister: {
    fontSize: 25,
    color: 'green'
  }
});
