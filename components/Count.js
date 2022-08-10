import { View, Text  } from 'react-native'
import React,{useState , useEffect} from 'react'
import { Button  } from 'react-native-web';

const Count = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
      console.log('use effect 1');
    }  //Rerender the app (not really use)
    )

    useEffect(()=>{
      console.log('use effect 2');
    },[count] //only change the (count)  
    )

    useEffect(()=>{
      console.log('use effect 3');
    } ,[] //only change when the value is change (use with backend server)
    )

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Click Me" onPress ={()=>setCount(count+1)}/>
    </View>
  )
}

export default Count