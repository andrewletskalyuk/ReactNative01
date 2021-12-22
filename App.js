//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  // Text,
  // TouchableWithoutFeedback, //просто клік і все
  // TouchableOpacity, //ефект, що на секунду картинка стає світлою
  // TouchableHighlight, //ефект, що на секунту картинка стає темною
  // TouchableNativeFeedback, //без фідбеку йде
  SafeAreaView,
  Button, //зверху якщо є форма екрана як в iphone воно трошки опускає дані вниз
  //View,
  //Image
  Alert, //це не копонент - це API
  Platform, //визначаємо що за платформа і можемо робити 
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* <Text>React native</Text>
      <TouchableNativeFeedback onPress={() => { console.log("Image tapped") }}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
          <Text>Valera jgii</Text>
        </View>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300'
          }} />
      </TouchableNativeFeedback> */}
      <Button
        color="orange"
        title="Click me"
        onPress={() => {
          // console.log("привіт в обід");
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
          //Alert.prompt("My title", "My message", text => console.log(text))//!!!ЦЕ ТІЛЬКИ ДЛЯ АЙОС

        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "#38C4C2" }
//в цьому методі йде валідація даних, що в середині - тому ми можемо побачити помилку
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: "center",
    // alignItems: "center"
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
