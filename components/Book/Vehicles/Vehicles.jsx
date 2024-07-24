import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import PopularVehicles from './PopularVehicles';
import VehList from './VehList';

const Vehicles = () => {
  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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