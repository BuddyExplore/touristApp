import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
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
    const vehicleNo = vehicleID;

    router.push({
      pathname: './vehicleInformation',
      params: {
        pickupLocation,
        pickupDate,
        pickupTime,
        destinations_json,
        dropoffDate,
        dropoffTime,
        passengers,
        vehicleNo
      }
    });
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>

      {/* pickup details */}
      <View style={{flexDirection: 'row' , backgroundColor: "#FAFAFA", justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 10, borderRadius: 20, marginTop: 13, marginHorizontal: 10}}>
        <View style={{flex: 0.8, gap: 8}}>
          <View style={{flexDirection: 'row', gap: 8}}>
            <Ionicons name="location-outline" size={16} color={"black"} />
            <Text style={{color: 'black'}}>{pickupLocation}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Ionicons name="time-outline" size={12} color={"#878787"} />
                <Text style={{color: '#878787', fontSize: 10}}>{pickupTime}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Ionicons name="calendar-clear-outline" size={10} color={"#878787"} />
                <Text style={{color: '#878787', fontSize: 10}}>{pickupDate}</Text>     
              </View>
            </View>

            <EvilIcons name="arrow-right" size={14} color="#878787" style={{textAlignVertical: 'center'}}/>
            
            <View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Ionicons name="time-outline" size={12} color={"#878787"} />
                <Text style={{color: '#878787', fontSize: 10}}>{dropoffTime}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Ionicons name="calendar-clear-outline" size={10} color={"#878787"} />
                <Text style={{color: '#878787', fontSize: 10}}>{dropoffDate}</Text>     
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
          <AntDesign name="edit" size={22} color="black" />
        </View>
      </View>
      
      {/* filter button */}
      <View style={{marginVertical: 15, marginLeft: 10}}>
        <Pressable style={{flexDirection: 'row', borderWidth: 1, borderColor: Colors.PRIMARY, width: 80, borderRadius: 15, paddingVertical: 6, justifyContent: 'center', gap: 5, paddingRight: 8}}>
          <Ionicons name="filter" size={16} color={Colors.PRIMARY} />
          <Text style={{color: Colors.PRIMARY, fontSize: 14}}>Filter</Text>
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