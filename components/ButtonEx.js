import { StyleSheet, Text, View , Button , SafeAreaView } from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={styles.separator}/>
)

const ButtonEx = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                The title and onPress Handler are
                 required.it is recommended to set
                 accessigilitulabel to help make 
                 your app useable by everyone
            </Text>
            <Button
            title='Press Me Now'
            onPress={()=>alert('simple button pressed')}
            />
        </View>
        <Separator/>
        <View>
            <Text style={styles.title}>
                Adjust the color in a way that looks standard on each platform. On IOS the color of the text.On android, the color adjusts the background color of the button
            </Text>
            <Button
            title='Press Me Now'
            onPress={()=>alert('Button with adjust color pressed')}
            color="pink"
            />
        </View>
        <Separator/>
        <View>
            <Text style={styles.title}>
                All interaction for the component are disabled.
            </Text>
            <Button
            title='Press Me Now'
            onPress={()=>alert('Button with adjust color pressed')}
            disabled
            />
        </View>
        <Separator/>
        <View>
            <Text style={styles.title}>
                This layout strategy lets the title define the width of the button.
            </Text>
            <View style={styles.fixToText}>
            <Button
            title='Left Button'
            onPress={()=>alert('Left button pressed')}
            color="blue"
            />
            <Button
            title='Right Button'
            onPress={()=>alert('Right button pressed')}
            color="blue"
            />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default ButtonEx

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     marginHorizontal: 16,
    },
    title: {
     textAlign: 'center',
     marginVertical: 8,
    },
    fixToText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
    },
    separator: {
     marginVertical: 8,
     borderBottomColor: '#737373',
     borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
    