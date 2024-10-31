import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import VehList from '../../../components/Book/Vehicles/VehList';
import { Colors } from '../../../constants/Colors';
import VehListItem from '../../../components/Book/Vehicles/VehListItem';
import axios from 'axios';

const searchResults = () => {
  const [vehicles, setVehicles] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://192.168.8.122:8080/getVehicle")
  //     .then((response) => setVehicles(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const preferencesList = [
    { name: 'Suzuki Alto', where: 'Nugegoda', driver: 'A.D. Bandara', img: require('../../../assets/images/Book/Vehicles/Vehicle5.jpg') },
    { name: 'Hiace Dolphin', where: 'Hokanda', driver: 'S.M. Perera', img: require('../../../assets/images/Book/Vehicles/Vehicle6.jpg') },
    { name: 'Nissan Civillian', where: 'Moratuwa', driver: 'W.T. Saman', img: require('../../../assets/images/Book/Vehicles/Vehicle7.jpg') },
    { name: 'Volkswagon Caddy', where: 'Pannipitiya', driver: 'S.S.M. Peiris', img: require('../../../assets/images/Book/Vehicles/Vehicle4.jpg') },
    { name: 'Suzuki Alto', where: 'Nugegoda', driver: 'A.D. Bandara', img: require('../../../assets/images/Book/Vehicles/Vehicle1.jpg') },
    { name: 'Hiace Dolphin', where: 'Hokanda', driver: 'S.M. Perera', img: require('../../../assets/images/Book/Vehicles/Vehicle2.jpg') },
    { name: 'Nissan Civillian', where: 'Moratuwa', driver: 'W.T. Saman', img: require('../../../assets/images/Book/Vehicles/Vehicle3.jpg') },
    { name: 'Volkswagon Caddy', where: 'Pannipitiya', driver: 'S.S.M. Peiris', img: require('../../../assets/images/Book/Vehicles/Vehicle4.jpg') },
  ];

  const router = useRouter();
  const { 
    pickupLocation,
    pickupDate,
    pickupTime,
    destinations_json,
    dropoffDate,
    dropoffTime,
    passengers 
  } = useLocalSearchParams();


  const handleClick = (vehicleID) => {
    router.push({
      pathname: './bookingSummary',
      params: {
        pickupLocation,
        pickupDate,
        pickupTime,
        destinations_json,
        dropoffDate,
        dropoffTime,
        passengers,
        vehicleID
      }
    });
  }

  return (
    <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 20}}>
      
      <View style={{flexDirection: "row", borderRadius: 20, backgroundColor: "#FAFAFA", paddingHorizontal: 10, paddingVertical: 12, justifyContent: 'space-between', marginTop: 15}}>
        
        <View>
          <View style={{flexDirection: 'row', gap: 5, marginBottom: 6}}>
            <Ionicons name="location-outline" size={16} color="black" />
            <Text style={{fontSize: 15}}>{pickupLocation}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Ionicons name="time-outline" size={12} color={"#878787"} />
                <Text style={{fontSize: 12, color: "#878787"}}>{pickupTime}</Text>
              </View>

              <View style={{flexDirection: 'row', gap: 5}}>
                <Ionicons name="calendar-clear-outline" size={12} color="#878787" />
                <Text style={{fontSize: 12, color: "#878787"}}>{pickupDate}</Text>
              </View>
            </View>

 
              <EvilIcons name="arrow-right" size={22} color="#878787" />

            <View>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Ionicons name="time-outline" size={12} color={"#878787"} />
                <Text style={{fontSize: 12, color: "#878787"}}>{dropoffTime}</Text>
              </View>

              <View style={{flexDirection: 'row', gap: 5}}>
                <Ionicons name="calendar-clear-outline" size={12} color="#878787" />
                <Text style={{fontSize: 12, color: "#878787"}}>{dropoffDate}</Text>
              </View>
            </View>
          </View>
        </View>
        
        <Pressable style={{display: 'flex', width: '25%', justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="edit" size={22} color="black" />
        </Pressable>

      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-start', margin: 15}}>
        <Pressable style={{display: 'flex', flexDirection: 'row', gap: 5, paddingVertical: 6, paddingHorizontal: 12, paddingRight: 20, borderWidth: 1, borderColor: '#007BFF', borderRadius: 15 }}>
          <Octicons name="filter" size={19} color={Colors.PRIMARY} />
          <Text style={{fontSize: 15, color: Colors.PRIMARY}}>Filter</Text>
        </Pressable>
      </View>

      {/* <VehList /> */}
      <View>
        <FlatList
          // data={vehicles}
          data={preferencesList}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false} 
          renderItem={({ item, index }) => (
            <VehListItem preference={item} vehicleID={index} handleClick={handleClick}/>
          )}
        />
      </View>
    </View>
  )
}

export default searchResults

const styles = StyleSheet.create({})