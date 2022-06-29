import { View, Text } from 'react-native'
import React from 'react'

const User = () => {
    const users =[
        {id:1,name:'John'},
        {id:2,name:'mary'}
    ]
  return (
    <View>
      <Text></Text>
      {
        users.map((user,index)=>{
            return <text key={user.id}>{index+1}. {user.name}</text>
        })
      }
    </View>
  )
}

export default User