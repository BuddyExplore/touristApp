import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Modal, Button} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Urls} from "../../../constants/Urls"


const bookingSummary = () => {
  const router = useRouter();
  
  const [vehicleDetails, setVehicleDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails] = useState(null)
  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const vehicleData = await AsyncStorage.getItem('vehicleDetails');
        const parsedVehicleDetails = JSON.parse(vehicleData);
        const parsedUserDetails = JSON.parse(user)
        setVehicleDetails(parsedVehicleDetails);
        setUserDetails(parsedUserDetails)
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchVehicleDetails();
    
  }, []);


  const [isModalVisible, setIsModalVisible] = useState(false);

  const goToHome = () => {
    router.push('/explore');
  };

  const handleSendBooking = () => {
    const user = user
    const fetchItems = async () => {
      console.log("Here")
      
      try {
        const response = await axios.post(
          `${Urls.SPRING}/api/Booking/Vehicle/addBooking`,
          {
            touristId: userDetails.id, //Change this!!!!!!!!!!!!!!!!
            driverId: vehicleDetails.driverId,
            vehicleId: vehicleDetails.id,
            date: "2024-12-02",
            pickUpLocation: pickupLocation,
            pickUpDate: pickupDate,
            pickUpTime: pickupTime.slice(0, -3),
            dropOffDate: dropoffDate,
            dropOffTime: dropoffTime.slice(0, -3),
            passengers: passengers,
            distance: 50,
            fullName: "John Parker", //Change this!!!!!!!!!!!!
            status: 0
          }
        );
        console.log("Done")
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
    setIsModalVisible(true);
  }

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

  const { 
    pickupLocation,
    pickupDate,
    pickupTime,
    destinations_json,
    dropoffDate,
    dropoffTime,
    passengers, 
    vehicleNo
  } = useLocalSearchParams();
  
  const vehicleInfo = preferencesList[vehicleNo];
  const destinations = JSON.parse(destinations_json);

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}> 
        <Text style={{fontSize: 22, fontWeight: '500'}}>Summary</Text>
        <Image source={require('../../../assets/images/Book/Vehicles/summary.png')} style={{height: 30, width: 26}}/>
      </View>

      {/* Vehicle & Driver */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader2}>
          <AntDesign name="car" size={24} color="black" />
          <Text style={{fontSize: 16, fontWeight: '500'}}>Vehicle & Driver</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 36, marginTop: 8}}>
          <View style={{height: 79 , width: 99, borderRadius: 10}}>
            <Image source={require("../../../assets/images/corolla.jpg")} alt="None" style={{width: '100%', height: '100%', borderRadius: 10}}/>
          </View>

          <View style={{marginLeft: 22, gap: 5}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>{vehicleDetails? vehicleDetails.vehicle_brand : 'Toyota'} {vehicleDetails? vehicleDetails.vehicle_model : 'Corolla'}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Ionicons name="person-outline" size={12} color="black" />
              <Text style={{fontSize: 12}}>Driver ID: {vehicleDetails? vehicleDetails.driverId : '21'}</Text>
            </View>
          </View>
        </View>

      </View>

      {/* Trip Dates & Times */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader}>

          <View style={styles.subHeader2}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={{fontSize: 16, fontWeight: '500'}}>Trip dates & times</Text>
          </View>

          <Pressable style={{marginRight: 10}} onPress={() => {}}>
              <AntDesign name="edit" size={18} color={Colors.PRIMARY} />
          </Pressable>

        </View>

        <View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={{color: '#969696', fontWeight: '300'}}>Pick-up :</Text>
            <Text style={{fontWeight: '500'}}>{`${pickupDate}    ${pickupTime}`}</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={{color: '#969696', fontWeight: '300'}}>Drop-off :</Text>
            <Text style={{fontWeight: '500'}}>{`${dropoffDate}    ${dropoffTime}`}</Text>
          </View>

        </View>

      </View>

      {/* Destinations */}
      <View style={styles.viewPart}>


        <View style={styles.subHeader}>

          <View style={styles.subHeader2}>
            <SimpleLineIcons name="location-pin" size={24} color="black" />
            <Text style={{fontSize: 16, fontWeight: '500'}}>Destinations</Text>
          </View>

          <Pressable style={{marginRight: 10}} onPress={() => {}}>
            <AntDesign name="edit" size={18} color={Colors.PRIMARY} />
          </Pressable>

        </View>

        <View style={{marginLeft: 30, marginTop: 10}}>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="my-location" size={17} color="black" />
            <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 10}}>{`${pickupLocation}`}</Text>
          </View>


          <View style={{marginVertical: 10, marginLeft: 10}}>
            <Text style={{fontSize:7}}>|</Text>
            <Text style={{fontSize:7}}>|</Text>
            <Text style={{fontSize:7}}>|</Text>
            <Text style={{fontSize:7}}>|</Text>
          </View>
          {destinations.map((destination, index) => {
            
            return (
            <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
              <Ionicons name="location" size={17} color={"black"} />
              <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 10}}>{`${destination}`}</Text>
            </View>
            )
          })}
          

        </View>

      </View>

      {/* Passengers */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader}>

          <View style={styles.subHeader2}>
            <Ionicons name="people-outline" size={24} color="black" />
            <Text style={{fontSize: 16, fontWeight: '500'}}>Passengers</Text>
          </View>

          <Pressable style={{marginRight: 10}} onPress={() => {}}>
            <AntDesign name="edit" size={18} color={Colors.PRIMARY} />
          </Pressable>

        </View>

        <View style={{marginLeft: 30, marginTop: 8}}>
          <Text style={{fontSize: 14, fontWeight: '400'}}>{`${passengers} passengers`}</Text>
        </View>

      </View>


      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={{borderRadius: 40, backgroundColor: Colors.PRIMARY, paddingVertical: 15, paddingHorizontal: 40, width: '70%'}} 
        onPress={handleSendBooking}>
          <Text style={{fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'center'}}>Send Booking Request</Text>
        </TouchableOpacity>
      </View>
      
      <Modal
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            
            <View style={{marginVertical: 10}}>
              <AntDesign name="checkcircle" size={50} color={Colors.PRIMARY} />
            </View>

            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Booking Requested!</Text>
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, fontWeight: '300', color: '#676666', textAlign: 'center'}}>We’ve received your booking request. We’ll
              let you know when the driver accepts.</Text>
            </View>

            <TouchableOpacity style={{marginTop: 30, marginBottom: 8, backgroundColor: Colors.PRIMARY, paddingVertical: 12, paddingHorizontal: 20, borderRadius: 19}}
              onPress={() => {}}
            >
              <Text style={{fontSize: 15, fontWeight: '500', color: '#FFFFFF'}}>View My Bookings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 10}} onPress={goToHome}>
              <Text style={{fontSize: 15, fontWeight: '500', color: Colors.PRIMARY}}>Back to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => router.push('./driverDispatched')}
            >
              <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.PRIMARY }}>
                Dispatched
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </Modal>

    </View>
  )
}

export default bookingSummary

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 7, 
    marginTop: 8
  },
  subHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  subHeader2: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    padding: 10
  },
  viewPart: {
    marginTop: 7,
    paddingBottom: 22,
    borderBottomColor: '#D4D4D4',
    borderBottomWidth: 1
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: 315,
    height: 360,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
})