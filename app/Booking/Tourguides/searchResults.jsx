import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import PlacesList from '../../../components/Book/TourGuides/PlacesList';
import { Colors } from '../../../constants/Colors';

const searchResults = () => {
  const router = useRouter();
  const { 
    pickupLocation,
    pickupDate,
    pickupTime, } = useLocalSearchParams();

  return (
    <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 20}}>
      
      <View style={{flexDirection: "row", borderRadius: 20, backgroundColor: "#FAFAFA", paddingHorizontal: 10, paddingVertical: 12, justifyContent: 'space-between', marginTop: 15}}>
        
        <View>
          <View style={{flexDirection: 'row', gap: 5, marginBottom: 6}}>
            <Ionicons name="location-outline" size={16} color="black" />
            <Text style={{fontSize: 15}}>{pickupLocation}</Text>
          </View>

          <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Ionicons name="time-outline" size={16} color={"#878787"} />
            <Text style={{ fontSize: 12, color: "#878787" }}>{pickupTime}</Text>
          </View>
        
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Ionicons name="calendar-clear-outline" size={16} color="#878787" />
            <Text style={{ fontSize: 12, color: "#878787" }}>{pickupDate}</Text>
          </View>
        </View>
        
        </View>
        
        <Pressable style={{display: 'flex', width: '25%', justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="edit" size={22} color="black" />
        </Pressable>

      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Pressable style={{display: 'flex', flexDirection: 'row', gap: 5, paddingVertical: 10, paddingHorizontal: 12, paddingRight: 20, backgroundColor: '#FAFAFA', borderRadius: 15, width:"100%" }}>
          <Ionicons name="search-outline" size={16} color="#878787" />
          <Text style={{fontSize: 15, color: "#878787"}}>Search</Text>
        </Pressable>
      </View>

      <PlacesList />
    </View>
  )
}

export default searchResults

const styles = StyleSheet.create({})