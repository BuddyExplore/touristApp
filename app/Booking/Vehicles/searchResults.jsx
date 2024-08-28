import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Colors } from '../../../constants/Colors';
import VehList from '../../../components/Book/Vehicles/VehList';

const searchResults = () => {
  const { 
    pickupLocation,
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime } = useLocalSearchParams();

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

      {/* Vehicle List */}
      <VehList />   
    </View>
  )
}

export default searchResults

const styles = StyleSheet.create({})