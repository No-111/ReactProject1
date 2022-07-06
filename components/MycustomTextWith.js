import { View, Text } from 'react-native'
import React from 'react'

const AppComponent = ({fname1,lname1,fname2,lname2}) => {
    return (
        <View style={{alignitems:'center'}}>
            <Text>Your First Name is {fname1} and Your Last Name is {lname1}</Text>
            <Text>Your First Name is {fname2} and Your Last Name is {lname2}</Text>
        </View>
    )
}

const MycustomTextWith = () => {
  return (
    <View style={{alignitems:'center'}}>
      <AppComponent fname1='Kawin' lname1='Chuangaynyong'fname2='Jedsadagol' lname2='Bincin'/>
    </View>
  )
}

export default MycustomTextWith