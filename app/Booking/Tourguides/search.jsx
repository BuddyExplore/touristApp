import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
const search = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Search for Tourguides</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Booking/Tourguides/searchResults')}><Text>Search</Text></TouchableOpacity>
    </View>
  )
}

export default search

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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