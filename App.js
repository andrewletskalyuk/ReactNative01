import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback, //просто клік і все
  TouchableOpacity, //ефект, що на секунду картинка стає світлою
  TouchableHighlight, //ефект, що на секунту картинка стає темною
  SafeAreaView,
  Image
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>React native</Text>
      <TouchableHighlight onPress={() => { console.log("Image tapped") }}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300'
          }} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  }
});
