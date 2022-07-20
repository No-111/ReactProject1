import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'

const ImagewithText = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
            <Image
             source={require('../assets/input_username.png')}
             style={styles.imageStyle}
            />
            <TextInput 
             style={{flex:1 , width:300}}
             placeholder = 'Enter Your Name Here'
            />
        </View>
        <View style={styles.sectionStyle}>
            <Image
             source={require('../assets/input_phone.png')}
             style={styles.imageStyle}
            />
            <TextInput 
             style={{flex:1 , width:300}}
             placeholder = 'Enter Your Mobile No. Here'
            />
        </View>
      </View>
    </View>
  )
}

export default ImagewithText

const styles = 
StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 margin: 10,
 width: 200
},
sectionStyle: {
flexDirection: 'row',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#fff',
 borderWidth: 0.5,
 borderColor: '#000',
 height: 40,
 borderRadius: 5,
 margin: 10,
 }, 
 imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    },
});