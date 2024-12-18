import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal , ScrollView} from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import HotelModalDetails from './HotelModalDetails';
import HotelModalStep2 from './HotelModalStep2';
import HotelModalStep3 from './HotelModalStep3'
import HotelModalStep4 from './HotelModalStep4'

export default function HotelModal({ hotelInfo , visibility , closeModal}) {

    const [modalVisible, setModalVisible] = useState(visibility);
    const [locationName, setLocationName] = useState('Thummulla');
    const [hotelDetails, setHotelDetails] = useState({ name: 'Double Room with Balcony', where:'Balcony , Bathroom , View , TV', beds: '1 double bed', price: '11,550' , img:require('../../../assets/images/Book/Hotels/Room1.jpg')  });

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);

    handleCloseModal = (itemName) => {
        closeModal(1);
        setModalVisible(false)
    }

    handleStep1 = (itemName) => {
        if(itemName === 1){
            setStep1(false);
            setStep2(true);
            setStep3(false);
            setStep4(false);
        }
        
    }

    handleStep3 = (item) => {
            setHotelDetails(item);
            setStep1(false);
            setStep2(false);
            setStep3(false);
            setStep4(true);  
    }

    handleStep2 = (itemName) => {
      if(itemName === 1){
          setStep1(false);
          setStep2(false);
          setStep3(true);
          setStep4(false);
      }
      
      
  }
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
    return (
    <View>
             
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 35,
                paddingLeft: 35,
            }}>

            
            <TouchableOpacity
              style={[styles.button, styles.backButton]}
              onPress={handleCloseModal}
            >
              <Ionicons name="arrow-back-outline" size={26} color={'black'} /> 
            </TouchableOpacity>
            <Text style={styles.headerTxt}>  Book Hotel</Text>

            </View>
            <ScrollView>
            {step1 && <HotelModalDetails hotelInfo={hotelInfo} onPress={handleStep1}/>}
            {step2 && <HotelModalStep2 hotelInfo={hotelInfo} onPress={handleStep2}/>}
            {step3 && <HotelModalStep3 hotelInfo={hotelInfo} onPress={handleStep3}/>}
            {step4 && <HotelModalStep4 hotelInfo={hotelInfo} roomInfo={hotelDetails} onPress={handleCloseModal}/>}
            </ScrollView>
            
          </View>
        </View>
      </Modal>
            
    </View>
    );
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