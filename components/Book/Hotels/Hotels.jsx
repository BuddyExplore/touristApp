import { StyleSheet, Text, View , ScrollView , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import PopularHotels from './PopularHotels';
import HotelList from './HotelList';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

const Hotels = () => {
  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%'
    }}>
      <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                width: '70%',
                height: 50,
                alignItems:'center',
                backgroundColor:'#fff',
                padding:8,
                borderRadius:12,
                padding: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8'
            }}>
                <Ionicons name="search" size={24} color={Colors.SECOND} />
                <TextInput placeholder='Search for Vehicles and Drivers..'  
                    style={{
                        fontFamily:'outfit',
                        fontSize:16
                    }}
                />
            </View>
            <TouchableOpacity style={styles.touchable}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:10,
                    alignItems:'center',
                    
                    height: 50,
                    padding: 10
                }}>
                    <Ionicons name="options-outline" size={24} color={'black'} />
                    <Text>Filter</Text>
                </View>
        </TouchableOpacity>
    </View>
            <PopularHotels />
            <HotelList />
        </ScrollView>
    </View>
  )
}

export default Hotels

const styles = StyleSheet.create({

    scrollContainer: {
      paddingBottom: 600, // To prevent content from being hidden behind FAB
    },
    touchable : {
      width: '25%',
      backgroundColor: 'white',
      borderRadius: 20,
  },
  });