import { StyleSheet, Text, View , TextInput } from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-web';

const UsernameandPassword = () => {
  const [Email,setEmail]=useState('');
  const [Password,setPass]=useState('');
  const showData = () => {
    alert('Email:'+Email+"\n"+'Password:'+Password)
  };
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
        style ={styles.textInput}
        placeholder='Email'
        value={Email}
        onChangeText = {(Email)=>{setEmail(Email)}}
      />
      <TextInput
        style ={styles.textInput}
        placeholder='Password'
        value={Password}
        onChangeText = {(Password)=>{setPass(Password)}}
      />
      <View style={{width:'100%'}}>
      <Button onPress={showData} title="Submit"
      color = 'purple'/>
      </View>
    </View>
  )
}

export default UsernameandPassword

const styles = StyleSheet.create({
  textInput :{
      width:250,
      height:45,
      padding:10,
      marginTop:20,
      marginBottom:10,
      backgroundColor:'lightgray'
  }

})