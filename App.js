import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import User from './components/User'

export default function App() {

  // const showData = () => {
  //   alert("Hello")
  // }

  return (
    <View style={styles.container}>
      {/* <Text>Button Example</Text>
      <Button
        title='click me'
        color='purple'
        onPress={showData}
      /> */}
      <User/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})