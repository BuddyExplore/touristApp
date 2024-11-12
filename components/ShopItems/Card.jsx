import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Card({ item }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <ImageBackground source={item.img} style={styles.image}>
                    <View style={styles.textContainer}>
                        <Text style={styles.subText}>{item.name}</Text>
                        <Text style={styles.mainText}>{`LKR ${item.price} /=`}</Text>
                        <Text style={styles.subText}>{item.city}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 10
    },
    touchable: {
        width: 120,
        height: 160,
        borderRadius: 10,
        overflow: 'hidden', // Ensures rounded corners are applied to the image ''
        // backgroundColor: 'rgba(0, 0, 0, 0.02)'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end', // Positions text at the bottom
    },
    textContainer: {
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for text visibility
        borderBottomLeftRadius:10,
        justifyContent: 'center',
        paddingVertical: 3
    },
    likesText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    mainText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
        // marginLeft: 15
    },
    subText: {
        fontSize: 11,
        color: 'white',
    },
});