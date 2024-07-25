import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import CustomInput from './Custom/CustomInput';
import CustomButton from './Custom/CustomButton';
import { useRouter, useNavigation } from "expo-router";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const router = useRouter();
    const [username, setUsername] = useState('');

    const onSendPressed = async (e) => {
        e.preventDefault()
        await handleLogin(username)
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
                    Forgot Password
                    </Text>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={styles.inputTextTop}>Email</Text>

                        <CustomInput
                            placeholder="Enter your email address"
                            placeholderTextColor="black"
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            setValue={setUsername}
                        />

                    </View>


                    <CustomButton
                        title="Send Code"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={onSendPressed} />


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 22,
                    }}>

                    <TouchableOpacity
                    onPress={() => router.replace("/Login")}
                    style={{
                      fontSize: 16,
                      color: "gray",
                    }}
                  >
                    Back to Login
                  </TouchableOpacity>

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


export default ForgotPassword

