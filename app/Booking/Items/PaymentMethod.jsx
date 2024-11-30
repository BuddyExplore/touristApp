import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';

const PaymentMethod = () => {
  const router = useRouter();

  const [activatedMethod, setActivatedMethod] = useState('Visa');


  const handleContinue = () => {


    router.push({
      pathname: './CardDetails',
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Method</Text>
        <View style={styles.paymentLogoContainer}>
          <Image style={styles.logo} source={require("../../../assets/logo/paymentLogo.png")} />
        </View>
      </View>

      <View style={styles.methodContainer}>
        <Pressable onPress={() => setActivatedMethod('Visa')} style={styles.method}>
          <View style={{height: 50, width: 85}}>
            <Image style={styles.logo} source={require("../../../assets/logo/visa.png")} />
          </View>
          <Text style={{fontSize: 17, marginRight: 20}}>Visa</Text>
          <Pressable style={{height: 16, width: 16}}>
            {activatedMethod === 'Visa' && <Image style={styles.logo} source={require(`../../../assets/logo/check.png`)} />}
            {activatedMethod !== 'Visa' && <Image style={styles.logo} source={require(`../../../assets/logo/non-check.png`)} />}
          </Pressable>
        </Pressable>
        
        <Pressable onPress={() => setActivatedMethod('Master Card')} style={styles.method}>
          <View style={{height: 42, width: 70}}>
            <Image style={styles.logo} source={require("../../../assets/logo/mastercard.png")} />
          </View>
          <Text style={{fontSize: 17}}>Master Card</Text>
          <Pressable style={{height: 16, width: 16}}>
            {activatedMethod === 'Master Card' && <Image style={styles.logo} source={require(`../../../assets/logo/check.png`)} />}
            {activatedMethod !== 'Master Card' && <Image style={styles.logo} source={require(`../../../assets/logo/non-check.png`)} />}
          </Pressable>
        </Pressable>
        
        <Pressable onPress={() => setActivatedMethod('Paypal')} style={styles.method}>
          <View style={{height: 40, width: 40}}>
            <Image style={styles.logo} source={require("../../../assets/logo/paypal.png")} />
          </View>
          <Text style={{fontSize: 17}}>Paypal</Text>
          <Pressable style={{height: 16, width: 16}}>
            {activatedMethod === 'Paypal' && <Image style={styles.logo} source={require(`../../../assets/logo/check.png`)} />}
            {activatedMethod !== 'Paypal' && <Image style={styles.logo} source={require(`../../../assets/logo/non-check.png`)} />}
          </Pressable>
        </Pressable>

        <Pressable onPress={() => setActivatedMethod('Google Pay')} style={styles.method}>
          <View style={{height: 40, width: 40}}>
            <Image style={styles.logo} source={require("../../../assets/logo/google.png")} />
          </View>
          <Text style={{fontSize: 17}}>Google Pay</Text>
          <Pressable style={{height: 16, width: 16}}>
            {activatedMethod === 'Google Pay' && <Image style={styles.logo} source={require(`../../../assets/logo/check.png`)} />}
            {activatedMethod !== 'Google Pay' && <Image style={styles.logo} source={require(`../../../assets/logo/non-check.png`)} />}
          </Pressable>
        </Pressable>
      </View>

      <View style={styles.continueBtn}>
        <TouchableOpacity style={{borderRadius: 40, backgroundColor: Colors.PRIMARY, paddingVertical: 15, paddingHorizontal: 40, width: '70%'}} 
        onPress={handleContinue}>
          <Text style={{fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'center'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500'
  }, 
  paymentLogoContainer: {
    width: 40,
    height: 40
  }, 
  logo: {
    width: '100%',
    height: '100%'
  },
  methodContainer: {
    gap: 20,
    marginTop: 30,
    marginHorizontal: 'auto',
  },
  method: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  continueBtn : {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    paddingBottom: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20
  },
})