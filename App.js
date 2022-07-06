import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import User from './components/User'
import Lotsofgreeting from './components/lotsofgreeting'
import MycustomTextWith from './components/MycustomTextWith'
import Count from './components/Count'
import Inputtext from './components/Inputtext'
import UsernameandPassword from './components/UsernameandPassword'

export default function App() {

  // const showData = () => {
  //   alert("Hello")
  // }

  return (
    <View style={styles.container}>
      {/* <Lotsofgreeting/> */}
      {/* <MycustomTextWith/> */}
      {/* <Count/> */}
      {/* <Inputtext/> */}
      <UsernameandPassword/>
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