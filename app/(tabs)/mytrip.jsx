import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState}from 'react'
import { useRouter } from 'expo-router';

export default function shop() {
  const router = useRouter();
 


  return (
    <View style={styles.container}>
      <Text>My Trip</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/MyBookings/allBookings')}><Text>My Bookings</Text></TouchableOpacity>
      <Text style={{marginTop: 100}}>Plan a trip</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      width: '100%',
      alignItems: 'center',
    },
    button: {
      borderWidth: 1,
      borderColor: 'black',
      marginTop: 20,
      width: '80%',
      padding: 20
  }

});