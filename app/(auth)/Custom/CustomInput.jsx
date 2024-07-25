import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const CustomInput = ({setValue, placeholder, placeholderTextColor, keyboardType, secureTextEntry, style, varient }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                style={[styles.input, style]}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 48,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 22
    },
    input:{
        borderWidth: 0,
    }
    
})

export default CustomInput