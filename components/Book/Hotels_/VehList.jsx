import { View, Text, FlatList , Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Colors';
import VehListItem from './VehListItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

export default function VehList() {
    const preferencesList = [
        { name: 'Wilpattu Rest', where: 'LKR 9899.00', driver: 'A.D. Bandara', icon: '🔔', img: require('../../../assets/images/Book/Hotels/Hotel1.jpg') },
        { name: 'Adventure Resort', where: 'LKR 9899.00', driver: 'S.M. Perera', icon: '👤', img: require('../../../assets/images/Book/Hotels/Hotel2.jpg') },
        { name: 'Holiday Inn', where: 'LKR 9899.00', driver: 'W.T. Saman', icon: '🔔', img: require('../../../assets/images/Book/Hotels/Hotel3.jpg') },
        { name: 'Chill Rest House', where: 'LKR 9899.00', driver: 'S.S.M. Peiris', icon: '⚙️', img: require('../../../assets/images/Book/Hotels/Hotel4.jpg') },
        { name: 'Willpattu Resort', where: 'LKR 9899.00', driver: 'A.D. Bandara', icon: '🔔', img: require('../../../assets/images/Book/Hotels/Hotel5.jpg') },
        { name: 'The Nature Lover Resort', where: 'LKR 9899.00', driver: 'S.M. Perera', icon: '👤', img: require('../../../assets/images/Book/Hotels/Hotel6.jpg') },
        { name: 'Funday Inn', where: 'LKR 9899.00', driver: 'W.T. Saman', icon: '🔔', img: require('../../../assets/images/Book/Hotels/Hotel7.jpg') },
        { name: 'Sunday Fun Resort', where: 'LKR 9899.00', driver: 'S.S.M. Peiris', icon: '⚙️', img: require('../../../assets/images/Book/Hotels/Hotel8.jpg') },
    ];

    const navigation = useNavigation();

    const handleBackStep = () => {
        navigation.goBack(); // Or navigate to the specific screen if needed
    };

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
            />
        </View>
    );
}
