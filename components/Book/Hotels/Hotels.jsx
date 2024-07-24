import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import PopularHotels from './PopularHotels';
import HotelList from './HotelList';


const Hotels = () => {
  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  
  });