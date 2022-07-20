import { StyleSheet, Text, View ,Button, Alert } from 'react-native'
import React from 'react'

const simpleAlertHanler = () => {
    alert('Hello I am simple Alert from Java')

}
const twoOptionAlertHanler = () => {
    //use alert from react native
    Alert.alert(
        //title
        'Hello',
        //body
        'I am Two option alert from react native',
        [
            {
                text:'Yes',
                onPress: ()=> alert('You Press Yes')
            },
            {
                text:'No',
                onPress: ()=> alert('You Press No'),
                style:'cancel'
            }
        ],
        //Only the button can be press
        {cancelable: false}
    );
}

const AlertEx = () => {
  return (
    <View style = {styles.container}>
      <Button title='Simple Alert'
      onPress={simpleAlertHanler}/>
      <Button title='Alert with two option'
      onPress={twoOptionAlertHanler}/>
    </View>
  )
}

export default AlertEx



const styles = StyleSheet.create({
     container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
    },
    });