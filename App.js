import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
// import User from './components/User'
// import Lotsofgreeting from './components/lotsofgreeting'
// import MycustomTextWith from './components/MycustomTextWith'
// import Count from './components/Count'
// import Inputtext from './components/Inputtext'
// import UsernameandPassword from './components/UsernameandPassword'
// import AlertEx from './components/AlertEx'
// import ImagewithText from './components/ImagewithText'
// import ButtonEx from './components/ButtonEx'
// import TouchableEx from './components/TouchableEx'
// import TouchablePr from './components/TouchablePr'
// import Dynamicstyle from './components/Dynamicstyle'
// import ModelExample from './components/ModelExample'
import ModelPC from './components/ModelPC'

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
      {/* <UsernameandPassword/> */}
      {/* <AlertEx/> */}
      {/* <ImagewithText/> */}
      {/* <ButtonEx/> */}
      {/* <TouchableEx/> */}
      {/* <TouchablePr/> */}
      {/* <Dynamicstyle/> */}
      {/* <ModelExample/> */}
      <ModelPC/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: '100%'
  }
})