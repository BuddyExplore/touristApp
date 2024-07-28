import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal } from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

export default function HotelModalDetails({ hotelInfo , onPress }) {

    handleNext = (itemName) => {
        onPress(1);
    }

    return(
        <View style={{paddingHorizontal: 35}}>
            
            <View style={{
                backgroundColor: '#F0EDED',
                width: '100%',
                alignItems: 'center',
                marginTop:20,
                marginBottom: 20, 
                borderRadius: 12
            }}>
            <Image source={hotelInfo.img} style={styles.vehicleImg}/>
            </View>

            <View style={{
                display : 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Text style={styles.vehicleName}>{hotelInfo.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'center',
                    height: 30,
                    width: 100,
                    backgroundColor: Colors.THIRD+"AA",
                    borderRadius: 15,
                    
                }}>
                    <Text style={{fontWeight: 'bold'}}> 10% OFF</Text>
                </View>
            </View>
            
            <View style={{
                display: 'flex',
                flexDirection : 'row',
                justifyContent : 'space-between',
                width: '40%',
            }}>
                <Image source={require("../../../assets/images/Book/4star.png")}
                style={{
                    width:70,
                    height:20,
                }} />
            </View>
            <View style={{
                backgroundColor: '#E3E3E3',
                borderRadius: 15,
                alignSelf: 'flex-start',
                paddingHorizontal: 6
            }}>
            <Text style={styles.guideLoc}>📍 {hotelInfo.where}</Text>
            </View>

            <View style={{
                display: 'flex',
                gap: 10,
                flexDirection: 'row',
            }}>
                <View style={[styles.amenitiesItem, { backgroundColor: '#d8f9c2'} ]}><Ionicons style={{color: 'green'}} name={'wifi-outline'} size={20}/></View>
                <View style={[styles.amenitiesItem, { backgroundColor: '#ffefbf'} ]}><Ionicons style={{color: '#cc9900'}} name={'restaurant-outline'} size={20}/></View>
                <View style={[styles.amenitiesItem, { backgroundColor: '#f0e8fa'} ]}><Ionicons style={{color: '#6A20CF'}} name={'car-outline'} size={20}/></View>
                <View style={[styles.amenitiesItem, { backgroundColor: '#e5f5f6'} ]}><Ionicons style={{color: '#00a3a5'}} name={'snow-outline'} size={20}/></View>

            </View>
            <Text style={styles.label}>Details</Text>
            <Text style={styles.aboutme}>Our Hotel offers a tranquil retreat with modern amenities, stunning ocean views, and personalized service. Enjoy luxurious rooms, gourmet dining, and relaxing spa treatments in a serene setting.</Text>

        <View style={{
            backgroundColor: '#F0EDED',
            marginTop: 30,
            width: '100%',
            height: 90,
            alignItems: 'center',
            borderRadius: 30
        }}>
            <Text style={{
                margin: 'auto',
                color: 'grey'
            }}>No Reviews Yet</Text>
        </View>
            
            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={[styles.editButton, styles.buttonClose]}
                    onPress = {handleNext}
                    >
                    <Text style={styles.buttonTxt}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
      },
    
 amenitiesItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginTop: 10,
    padding: 2,
    borderRadius: 10
 }, 
  headerTxt:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  vehicleName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  vehicleImg: {
    width: 300,
    height: 200,
    
  },
  label: {
    marginTop: 20,
    fontSize: 14,
    color: 'grey'
  },
  aboutme: {
    fontSize: 14,
  },
  guideLoc: {
    margin: 5,
    color: Colors.PRIMARY,
    width: 'auto'
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