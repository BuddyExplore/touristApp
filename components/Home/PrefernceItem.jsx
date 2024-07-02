import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function PreferenceItem({ prefernce }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <ImageBackground source={prefernce.img} style={styles.image}>
                    <View style={styles.textContainer}>
                        {/* <Text style={styles.likesText}>❤️ 1500</Text> */}
                        <Text style={styles.mainText}>{prefernce.name}</Text>
                        {/* <Text style={styles.subText}>රුවන්වැලිසෑය</Text> */}
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
        width: 100,
        height: 100,
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
        borderRadius: 10,
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
        marginLeft: 15
    },
    subText: {
        color: 'white',
    },
});