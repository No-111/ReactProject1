import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props)=>{
    return(
        <View style={{alignitems:'center'}}>
            <Text>Hello {props.name} {props.date}</Text>
        </View>
    )
};

const Lotsofgreeting = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
        <Greeting name='Marry Chrismas' date='25-Dec-2022'/>
        <Greeting name='Happy New Year' date='31-Dec-2022'/>
        <Greeting name='Songkarn Festival' date='13-Apr-2022'/>

    </View>
  )
}

export default Lotsofgreeting