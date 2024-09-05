import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import VehList from '../../../components/Book/Hotels_/VehList';
import { Colors } from '../../../constants/Colors';

const searchResults = () => {
  const router = useRouter();
  const { 
    pickupLocation,
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime, } = useLocalSearchParams();

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

      <VehList />
    </View>
  )
}

export default searchResults

const styles = StyleSheet.create({})