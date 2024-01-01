import React from "react";
import {
  View,
  Text,
  SafeAreaView} from "react-native"


//safe area view is used so that , the edges , notches on phone do not affect rendering on screen 
function App(){
  
  
return (
    <SafeAreaView>
    <View>
      <Text>
          This is my first React Native App. 
      </Text>
    </View>
  </SafeAreaView>
  )
 
}

export default App
