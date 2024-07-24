import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Pressable } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from './Custom/CustomInput';
import CustomButton from './Custom/CustomButton';
import { TextInput } from 'react-native-gesture-handler';


const NewPassword = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(true);

    const onSubmitPressed = async (e) => {
        e.preventDefault()
        await handleLogin(code, newPassword)
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
                    Reset your password
                    </Text>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={styles.inputTextTop}>Code</Text>

                        <CustomInput
                            placeholder="Enter the code"
                            placeholderTextColor="black"
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                            setValue={setCode}
                        />

                    </View>


                    <View style={{ marginBottom: 12 }}>
                        <Text style={styles.inputTextTop}>New Password</Text>

                        <View style={{
                            width: "100%",
                            height: 48,
                            borderColor: "gray",
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: 22
                        }}>

                            <TextInput
                                placeholder="Enter your new password"
                                placeholderTextColor="black"
                                secureTextEntry={isPasswordShown}
                                style={{
                                    width: "100%",
                                    borderWidth: 0,
                                }}
                                setValue={setNewPassword}
                            />


                            <TouchableOpacity
                                onPress={() => setIsPasswordShown(!isPasswordShown)}
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                }}>

                                {
                                    isPasswordShown == true ? (
                                        <Ionicons name="eye-off" size={24} color="black" />
                                    ) : (
                                        <Ionicons name="eye" size={24} color="black" />
                                    )
                                }

                            </TouchableOpacity>

                        </View>
                    </View>


                    <CustomButton
                        title="Submit"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={onSubmitPressed} />


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


export default NewPassword;






