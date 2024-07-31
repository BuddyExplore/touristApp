import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, {useState} from 'react';
import HotelModal from './HotelModal';

export default function HotelListItem({ prefernce }) {

    const [showModal, setShowModal] = useState(false);

    handleShowModal = () => {
        setShowModal(true);
    }

    handleCloseModal = (itemName) => {
        if(itemName === 1 ){
            setShowModal(false);
        }
        
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={() => setShowModal(true)}>
            <View style={{
            display:'flex',
            flexDirection: 'row',
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
                    fontSize:19,
                    fontWeight: 'bold'
                }}>{prefernce.name}</Text>
            
                <Image source={require("../../../assets/images/Book/4star.png")}
                style={{
                    width:70,
                    height:20,
                }} />
                <Text style={styles.subText}>📍 {prefernce.where}</Text>
                
            </View>
        </View>
            </TouchableOpacity>
            {showModal && <HotelModal hotelInfo={prefernce} visibility={showModal} closeModal={handleCloseModal}/>}
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