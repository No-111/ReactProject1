import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'

const TouchablePr = () => {
    const onPress = (msg) => {
        alert(msg);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => onPress('Login Using Facebook')}>
                    <View style={styles.buttonFacebookStyle}>
                        <Image
                            source={require('../assets/facebook.png')}
                            style={styles.buttonImageIconStyle}
                        />
                        <View style={styles.buttonIconSeparatorStyle} />

                        <Text style={styles.buttonTextStyle}>
                            Login Using Facebook
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPress('Login Using Google Plus')}>
                    <View style={styles.buttonGPlusStyle}>
                        <Image
                            source={require('../assets/google-plus.png')}
                            style={styles.buttonImageIconStyle}
                        />
                        <View style={styles.buttonIconSeparatorStyle} />

                        <Text style={styles.buttonTextStyle}>
                            Login Using Google Plus
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePr

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#668fff',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: '100%',
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6d62ff',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: '100%',
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
});