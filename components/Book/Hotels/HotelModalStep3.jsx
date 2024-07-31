import { View, Text,  TouchableOpacity, StyleSheet, Image ,  ScrollView} from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import HotelListItem from './HotelRoomItem';


export default function HotelModalStep3({ hotelInfo , onPress}) {

    const preferencesList = [
        { name: 'Double Room', where:'Balcony , Bathroom , View , TV', beds: '1 double bed', price: '11,550' , img:require('../../../assets/images/Book/Hotels/Room1.jpg')  },
        { name: 'Triple Room', where:'Bathroom , TV , Bath-Tub ', beds: '1 single beds, 1 double bed' ,price: '13,799' ,img:require('../../../assets/images/Book/Hotels/Room2.jpg')  },
        { name: "Deluxe Room", where: "Living Room, Kitchen, Balcony", beds: "2 queen beds, 1 sofa bed", price: "25,499" ,img:require('../../../assets/images/Book/Hotels/Room3.jpg')  },
        // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
      ];

      const handleHotelPressed = (item) => {
        onPress(item);
      }

    return(
        <View style={{ padding: 35}}>
            <View style={{
                display: 'flex',
                alignItems: 'center'
            }}>
            <Text style={styles.topic}>Available Rooms</Text>
            {preferencesList.map((item, index) => (
                <HotelListItem prefernce={item} hotelPressed={handleHotelPressed} key={index}/>
            ))}
            </View>
            
        </View>
    )

}


const styles = StyleSheet.create({
    topic: {
        fontSize: 19
    }
});