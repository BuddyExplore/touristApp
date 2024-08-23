import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View style={styles.container}>
      <Text>Search for Acvities</Text>
      <TouchableOpacity style={styles.button}><Text>Search</Text></TouchableOpacity>
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