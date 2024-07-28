import { StyleSheet, Text, View , ScrollView , TextInput} from 'react-native'
import React from 'react'
import PopularVehicles from './PopularVehicles';
import VehList from './VehList';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';

const Vehicles = () => {
  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor:'#fff',
                padding:8,
                borderRadius:12,
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
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
            <PopularVehicles />
            <VehList />
        </ScrollView>
    </View>
  )
}

export default Vehicles

const styles = StyleSheet.create({

    scrollContainer: {
      paddingBottom: 600, // To prevent content from being hidden behind FAB
    },
  
  });