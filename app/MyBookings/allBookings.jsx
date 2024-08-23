import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const allBookings = () => {
  return (
    <View style={styles.container}>
      <Text>My Bookings</Text>

      <Text style={{marginTop: 100}}>Display the bookings made by the tourist here</Text>
    </View>
  )
}

export default allBookings
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        width: '100%',
        alignItems: 'center'
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        width: '80%',
        backgroundColor: '#0A89FF',
        padding: 20
    }
})