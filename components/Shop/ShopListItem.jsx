import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image , Button} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

export default function ShopListItem({ prefernce , onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}  onPress={() => onPress(prefernce.id)}>
            <View style={{
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            backgroundColor:'white'
        }}>
            <Image source={prefernce.img}
                style={{
                    width:100,
                    height:100,
                }}
            />
            <View>
            
            <Text style={{
                    color:'black',
                    width: 200,
                    fontSize:19,
                    fontWeight: 'bold'
                }}>{prefernce.name}</Text>
            
                <Image source={require("../../assets/images/Book/4star.png")}
                style={{
                    width:70,
                    height:20,
                }} />
                <Text style={styles.subText}>📍 {prefernce.where}</Text>
                
            </View>
            <View style={{
                backgroundColor: Colors.PRIMARY,
                height: 50,
                width: 90,
                justifyContent: 'center', // Center the text vertically
                alignItems: 'center', // Center the text horizontally
                borderRadius: 10
            }}>
                <Text style={{ color: 'white' }}>Shop Now</Text>
                {/* <Button title="Shop Now" disabled={true}>Shop Now</Button> */}
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
    },
    touchable: {
        width: '100%',
        height: 100,
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
        marginTop: 5,
        color: 'black',
        fontSize: 12
    },
});