import React, { JSXElementConstructor } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native';


//safe area view is used so that , the edges , notches on phone do not affect rendering on screen 
function App() {
  const toggleColor = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={toggleColor ? styles.whiteText : styles.darkText}>This is my first react native app</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  }
})


export default App