import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import User from './components/User'
import Lotsofgreeting from './components/lotsofgreeting'
import MycustomTextWith from './components/MycustomTextWith'

export default function App() {

  // const showData = () => {
  //   alert("Hello")
  // }

  return (
    <View style={styles.container}>
      {/* <Lotsofgreeting/> */}
      <MycustomTextWith/>
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