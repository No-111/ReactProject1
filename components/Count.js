import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-web';

const Count = () => {
    const [count,setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Click Me" onPress ={()=>setCount(count+1)}/>
    </View>
  )
}

export default Count