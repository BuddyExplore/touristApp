import { View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet, } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors'

export default function CardItem({ prefernce, onPress }) {
    return (
        
            <TouchableOpacity style={styles.container} onPress={() => onPress(prefernce.name)} >
                <View style={styles.touchable}>
                <View style={{
                    backgroundColor: 'rgba(215, 169, 59, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    height: 40,
                    marginVertical:2,
                    marginTop:12,
                    borderRadius:8
                }}>
                    
                   <Text style={styles.mainText}>{prefernce.name}</Text>
                 
                    
                </View>
                </View>
            </TouchableOpacity>
            
   
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    touchable: {

        width: 100,
        height: 70,
        borderRadius: 10,
        overflow: 'hidden', // Ensures rounded corners are applied to the image ''
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end', // Positions text at the bottom
    },
    textContainer: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for text visibility
        borderBottomLeftRadius:10,
        justifyContent: 'center',
    },
    likesText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    mainText: {
        textAlign: 'center',
        fontSize :14,
        color: '#333F48',
        fontWeight: 'bold',
        
    },
    subText: {
        color: 'white',
    },
});