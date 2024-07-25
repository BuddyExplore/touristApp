import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, Pressable } from 'react-native';
import { Colors } from '../../constants/Colors';
import CustomInput from './Custom/CustomInput';
import CustomButton from './Custom/CustomButton';


const ConfirmEmail = () => {
    const [code, setCode] = useState('');

    const onConfirmPressed = async (e) => {
        e.preventDefault()
        await handleLogin(code)
    }

    const onResendPress = () => {
        console.warn("onResendPress");
    }

    const onSignInPress = () => {
        console.warn("onSignInPress");
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:150,
                    marginBottom:50,
                }}>

                    <Image
                        source={require("../../assets/images/auth/logo1.png")}
                        style={{
                            width: 200,
                            height: 200,
                        }}
                    />
                </View>

                <View>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'black',
                        marginVertical: 20,
                    }}>
                    Confirm Your Email
                    </Text>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={styles.inputTextTop}>Confirmation Code</Text>

                        <CustomInput
                            placeholder="Enter your confirmation code"
                            placeholderTextColor="black"
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                            setValue={setCode}
                        />

                    </View>


                    <CustomButton
                        title="Confirm"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={onConfirmPressed} />


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 22,
                    }}>

                        <Text style={{
                            fontSize: 16,
                            color: 'black'
                        }}>

                        Back to Sign in

                            <Pressable
                                onPress={onSignInPress}>
                            </Pressable>
                        </Text>

                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    inputTextTop: {
        fontSize: 16,
        fontWeight: 400,
        marginVertical: 8
    },
    link: {
        color: Colors.PRIMARY,
    },
});

export default ConfirmEmail

