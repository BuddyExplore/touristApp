import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal } from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

export default function HotelModalDetails({ hotelInfo , roomInfo , onPress }) {

    const handleNext = () => {
        onPress(1);
    }
    return(
        <View style={{paddingHorizontal: 30}}>
            <View style={{
                backgroundColor: '#F0EDED',
                width: '100%',
                alignItems: 'center',
                marginTop:20,
                marginBottom: 20, 
                borderRadius: 12,
            }}>
            <Image source={roomInfo.img} style={styles.vehicleImg}/>
            </View>

            
            <View style={{
                display : 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 5
            }}>
                <Text style={styles.hotelName}>{hotelInfo.name}</Text>
                <Text style={styles.roomName}>{roomInfo.name}</Text>
                <View style={{
                    alignItems: 'center',
                    justifyContent:'center',
                    height: 30,
                    width: 150,
                    backgroundColor: '#E8E8E8',
                    borderRadius: 15,
                    
                }}>
                    <Text style={{fontWeight: 'bold'}}>LKR {roomInfo.price}.00</Text>
                </View>
            </View>
            <Text style={{fontSize: 13, color: 'grey', paddingTop: 20}}>Comes with</Text>
            <Text>{roomInfo.beds}</Text>
            <Text>{roomInfo.where}</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
            }}>
                <View style={styles.datesContainer}>
                    <Text style={{fontWeight: 'bold'}}>Check-In</Text>
                    <Text style={{color: 'grey'}}>Thursday, 1 Aug</Text>
                </View>
                <View style={styles.datesContainer}>
                    <Text style={{fontWeight: 'bold'}}>Check-In</Text>
                    <Text style={{color: 'grey'}}>Saturday, 3 Aug</Text>
                </View>

            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
            }}>
                <View style={styles.infoContainer}>
                    <Text style={{fontWeight: 'bold'}}>Rooms</Text>
                    <Text style={{color: 'grey'}}>01</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: 'grey'}}>02</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color: 'grey'}}>01</Text>
                </View>

            </View>

            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={[styles.editButton, styles.buttonClose]}
                    onPress = {handleNext}
                    >
                    <Text style={styles.buttonTxt}>Book Room</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    vehicleImg: {
        width: 300,
        height: 200,
        
      },
      roomName: {
        fontSize: 27,
        fontWeight: 'bold'
      } ,
       hotelName: {
        fontSize: 17,
        fontWeight: '400'
       },
       datesContainer : {
        display: 'flex',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height: 60,
        width: '45%',
        paddingVertical: 10,
        borderRadius: 10
       },
       infoContainer : {
        display: 'flex',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height: 60,
        width: '30%',
        paddingVertical: 10,
        borderRadius: 10
       },
       editButton: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
        height: 40,
        width: 170,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginTop: 30,
      },
      buttonTxt : {
        fontSize: 21,
        color: Colors.PRIMARY,
        fontWeight: 'bold'
      }
})