import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal } from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function VehicleModalDetails({ guideInfo , onPress }) {

    handleNext = (itemName) => {
        onPress(1);
    }

    return(
        <View style={{padding: 35}}>
            
            <View style={{
                backgroundColor: '#F0EDED',
                width: '100%',
                alignItems: 'center',
                marginTop:20,
                marginBottom: 20, 
                borderRadius: 12
            }}>
            <Image source={guideInfo.img} style={styles.vehicleImg}/>
            </View>

            <View style={{
                display : 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Text style={styles.vehicleName}>{guideInfo.name}</Text>
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
                <Text style={{color: 'grey'}}> 23 Guides</Text>
            </View>
            <View style={{
                backgroundColor: '#E3E3E3',
                borderRadius: 15,
                alignSelf: 'flex-start',
                paddingHorizontal: 6
            }}>
            <Text style={styles.guideLoc}>📍 {guideInfo.where}</Text>
            </View>

            <Text style={styles.label}>About Me</Text>
            <Text style={styles.aboutme}>Experienced Sri Lankan tour guide with over 10 years in the industry. Specializes in personalized tours, offering rich cultural insights and exceptional service. Passionate about sharing Sri Lanka's beauty, history, and hidden gems with travelers for unforgettable experiences.</Text>

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