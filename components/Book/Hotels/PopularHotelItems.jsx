import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function PopularHotelItems({ prefernce }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <ImageBackground source={prefernce.img} style={styles.image}>
                    <View style={styles.textContainer}>
                        {/* <Text style={styles.likesText}>❤️ 1500</Text> */}
                        <Text style={styles.mainText}>{prefernce.name}</Text>
                        <Image source={require("../../../assets/images/Book/4star.png")}
                style={{
                    width:50,
                    height:15,
                    marginLeft: 5
                }}
            />
                        <Text style={styles.subText}> 📍 {prefernce.where}</Text>
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
        margin: 10,
    },
    touchable: {
        width: 200,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden', // Ensures rounded corners are applied to the image ''
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
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
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5
    },
    subText: {
        color: 'white',
    },
});