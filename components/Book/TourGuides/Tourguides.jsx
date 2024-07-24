import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import PopularTourguides from './PopularTourguides';
import GuidesList from './GuidesList';


const Tourguides = () => {
  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <PopularTourguides />
            <GuidesList />
        </ScrollView>
        
    </View>
  )
}

export default Tourguides

const styles = StyleSheet.create({

    scrollContainer: {
      paddingBottom: 600, // To prevent content from being hidden behind FAB
    },
  
  });