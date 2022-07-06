import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'

const Inputtext = () => {
    const [UserName,setUserName]=useState('');
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert any Text in below input</Text>
      <TextInput
        style ={styles.textInput}
        placeholder='Please enter your Username'
        value={UserName}
        onChangeText = {(UserName)=>{setUserName(UserName)}}
      />
      <Text style ={{color:'blue',fontSize:20}}>{UserName}</Text>
    </View>
  )
}

export default Inputtext

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