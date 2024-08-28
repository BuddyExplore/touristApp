import { View, Text, FlatList , Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Colors';
import VehListItem from './VehListItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

export default function VehList() {
    const preferencesList = [
        { name: 'Suzuki Alto', where: 'Nugegoda', driver: 'A.D. Bandara', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle5.jpg') },
        { name: 'Hiace Dolphin', where: 'Hokanda', driver: 'S.M. Perera', icon: '👤', img: require('../../../assets/images/Book/Vehicles/Vehicle6.jpg') },
        { name: 'Nissan Civillian', where: 'Moratuwa', driver: 'W.T. Saman', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle7.jpg') },
        { name: 'Volkswagon Caddy', where: 'Pannipitiya', driver: 'S.S.M. Peiris', icon: '⚙️', img: require('../../../assets/images/Book/Vehicles/Vehicle4.jpg') },
        { name: 'Suzuki Alto', where: 'Nugegoda', driver: 'A.D. Bandara', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle1.jpg') },
        { name: 'Hiace Dolphin', where: 'Hokanda', driver: 'S.M. Perera', icon: '👤', img: require('../../../assets/images/Book/Vehicles/Vehicle2.jpg') },
        { name: 'Nissan Civillian', where: 'Moratuwa', driver: 'W.T. Saman', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle3.jpg') },
        { name: 'Volkswagon Caddy', where: 'Pannipitiya', driver: 'S.S.M. Peiris', icon: '⚙️', img: require('../../../assets/images/Book/Vehicles/Vehicle4.jpg') },
    ];

    // const navigation = useNavigation();

    // const handleBackStep = () => {
    //     navigation.goBack(); // Or navigate to the specific screen if needed
    // };

    return (
        <View>
            {/* <View style={{
                padding: 20,
                paddingBottom: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 1,
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    backgroundColor: 'white',
                    borderRadius: 25,
                    padding: 10,
                    elevation: 3,
                }} onPress={handleBackStep}>
                    <Ionicons name="arrow-back-outline" size={26} color={'black'} />
                </TouchableOpacity>

                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                    marginLeft: 50,
                    marginBottom: 10,
                }}>Book vehicles</Text>

                <Text style={{
                    color: Colors.PRIMARY,
                    fontFamily: 'outfit-medium'
                }}>Filter</Text>
            </View> */}

            <FlatList
                data={preferencesList}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false} 
                renderItem={({ item }) => (
                    <VehListItem prefernce={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
