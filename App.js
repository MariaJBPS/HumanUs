import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pushed");

  return (
    // View is for the app UI view
    <View style={styles.container}>
      <Text onPress={handlePress}>CRAZY TIME that is very long to see what will happen but its crazy so I move ike a mad man for no reason</Text>
      <Image source={require/('./assets/icon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
