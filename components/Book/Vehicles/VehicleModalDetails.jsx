import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal } from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function VehicleModalDetails({ vehicleInfo , onPress }) {

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
            <Image source={vehicleInfo.img} style={styles.vehicleImg}/>
            </View>

            <View style={{
                display : 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Text style={styles.vehicleName}>{vehicleInfo.name}</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'center',
                    height: 30,
                    width: 100,
                    backgroundColor: Colors.THIRD+"AA",
                    borderRadius: 15
                }}>
                    <Ionicons name="star-outline" size={19} />
                    <Text> TRUSTED</Text>
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
                <Text>|</Text>
                <Text style={{color: 'grey'}}>47 Rides</Text>
            </View>
            <Text style={styles.subText}>📍 {vehicleInfo.where}</Text>
            
            <Text style={styles.label}>Driver Information</Text>
            <View style={{
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginTop: 5
        }}>
            <Image source={require("../../../assets/images/Home/profile.png")}
                style={{
                    width:45,
                    height:45,
                    borderRadius:99
                }}
            />
            <View>
                
                <Text style={{
                    color:'black',
                    fontSize:16,
                    fontFamily:'outfit-medium'
                }}>{vehicleInfo.driver}</Text>
                <Image source={require("../../../assets/images/Book/4star.png")}
                style={{
                    width:70,
                    height:20,
                }} />
                <Text style={{
                    color:'black'
                }}>077 - 2XXXXXX</Text>
            </View>
        </View>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.descriptionTxt}>Comfortable vehicle with a professional driver. Safe, reliable, and perfect for all your travel needs. Book now for a great experience.</Text>
        <View style={{
            backgroundColor: '#F0EDED',
            marginTop: 20,
            width: '100%',
            height: 70,
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
    
  modalView: {
    height: '90%',
    width: '100%',
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    marginTop: 10,
    fontSize: 14,
    color: 'grey'
  },
  descriptionTxt: {
    marginTop: 5,
    fontSize: 14,
    color: 'black'
  },
  subText: {
    margin: 5,
    color: Colors.SECOND
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