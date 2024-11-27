import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';

const PurchaseSummary = () => {
  const router = useRouter();

  const handleConfirm = () => {
    
  }

  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={{borderRadius: 40, backgroundColor: Colors.PRIMARY, paddingVertical: 15, paddingHorizontal: 40, width: '70%'}} 
        onPress={handleConfirm}>
          <Text style={{fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'center'}}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PurchaseSummary

const styles = StyleSheet.create({})