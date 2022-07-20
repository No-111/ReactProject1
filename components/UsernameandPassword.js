import { StyleSheet, Text, View , TextInput ,container} from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-web';
import App from '../App';

const UsernameandPassword = () => {
  const [Email,setEmail]=useState('');
  const [Name,setName]=useState('');
  /* const showData = () => {
    alert('Email:'+Email+"\n"+'Password:'+Password)
  } */
  const checkTextInput = () => {
    if (!Name.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!Email.trim()) {
      alert('Please Enter Email');
      return;
    }
    alert('Success')
  };
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
        style ={styles.textInputStyle}
        placeholder='Email'
        value={Email}
        onChangeText = {(Email)=>{setEmail(Email)}}
      />
      <TextInput
        style ={styles.textInputStyle}
        placeholder='Name'
        value={Name}
        onChangeText = {(Name)=>{setName(Name)}}
      />
      <View style={{width:'100%' , marginTop:15}}>
      <Button onPress={checkTextInput}
      title="Submit"
      color = 'purple' />
      </View>
    </View>
  )
}

export default UsernameandPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle :{
      width:'100%',
      height:40,
      paddingHorizontal:5,
      marginTop:15,
      borderWidth:0.5
  }
});
