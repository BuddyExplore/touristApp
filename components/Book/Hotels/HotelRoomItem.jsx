import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, {useState} from 'react';
import HotelModal from './HotelModal';

export default function HotelListItem({ prefernce , hotelPressed }) {


    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={() => hotelPressed(prefernce)}>
            <View style={{
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            backgroundColor:'#E9E9E9'
        }}>
            <Image source={prefernce.img}
                style={{
                    width:110,
                    height:110,
                }}
            />
            <View>
            <Text style={{
                    color:'black',
                    fontSize:19,
                    fontWeight: 'bold'
                }}>{prefernce.name}</Text>

                <Text style={styles.price}>LKR {prefernce.price}.00</Text>
                <Text style={styles.beds}>{prefernce.beds}</Text>
                <Text style={styles.subText}>{prefernce.where}</Text>
                
            </View>
        </View>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '100%'
    },
    touchable: {
        width: '100%',
        height: 110,
        borderRadius: 10,
        overflow: 'hidden', // Ensures rounded corners are applied to the image ''
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
    },
    image: {
        width: 100,
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
    },
    subText: {
        marginTop: 2,
        color: 'black',
        fontSize: 12
    },
    beds: {
        marginTop: 5,
        color: 'black',
        fontSize: 14
    },
    price: {
        marginTop: 0,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
});