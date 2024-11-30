import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import { Ionicons } from "@expo/vector-icons";
import ExpiryDatePicker from '../../../components/ShopItems/ExpiryDatePicker';
import { CreditCardInput, CreditCardView, LiteCreditCardInput } from 'react-native-credit-card-input';

const CardDetails = () => {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  // const [month, setMonth] = useState(null);
  // const [year, setYear] = useState(null);
  const [cardType, setCardType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCardValid, setIsCardValid] = useState(false);

  const handleContinue = () => {
    router.push({
      pathname: './PurchaseSummary',
    })
  }

  const handleChangeInput = (form) => {
    setCardNumber(form.values.number)
    setCardType(form.values.type)
    setExpiryDate(form.values.expiry)
    setCvv(form.values.cvc)
    setIsCardValid(form.valid)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Card Details</Text>
        <View style={styles.cardLogoContainer}>
          <Image style={styles.logo} source={require("../../../assets/logo/creditcard.png")} />
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
      <CreditCardView type={cardType} number={cardNumber} expiry={expiryDate} cvc={cvv}/>
      </View>

      <View style={{padding: 15, paddingBottom: 0, marginTop: 10}}>
        <Text style={{fontSize: 14, fontWeight: '700'}}>CARD HOLDER NAME</Text>
        <TextInput value={cardHolderName} 
          placeholderTextColor={'darkgray'}
          placeholder="Name on card"
          onChange={setCardHolderName} 
          style={{    
            height: 40,
            fontSize: 16,
            borderBottomColor: 'darkgray',
            borderBottomWidth: 1,
            outlineWidth: 0,}}
        />
      </View>
      <CreditCardInput onChange={handleChangeInput}/>
      {/* <View style={{margin: 10}}>
        <View>
          <Text style={{fontSize: 16}}>Card Number</Text>
        </View>
        <View
          style={{
            height: 60,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            backgroundColor: "#FAFAFA",
            paddingHorizontal: 20,
            borderRadius: 10,
            marginTop: 10
          }}>
            <View style={{flex: 1}}>
            <TextInput 
              placeholder="X X X X    X X X X    X X X X    X X X X"
              style={{
                color: "#A4A4A4",
                fontSize: 16,
              }}
              value={cardNumber}
              onChangeText={setCardNumber}
            />
            </View>
        </View>
      </View> */}
      
      {/* <View style={{margin: 10,}}>
        <View>
          <Text style={{fontSize: 16}}>Card Holder Name</Text>
        </View>
        <View
          style={{
            height: 60,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            backgroundColor: "#FAFAFA",
            paddingHorizontal: 20,
            borderRadius: 10,
            marginTop: 10
          }}>
            <TextInput 
              placeholder="Enter card holder name"
              style={{
                color: "#A4A4A4",
                fontSize: 16,
              }}
              value={cardHolderName}
              onChangeText={setCardHolderName}
            />
        </View>
      </View> */}

      {/* <View style={{marginVertical: 10}}>
        <View style={{ marginHorizontal: 10, gap: 10}}>
          <View style={{width: '100%'}}>
            <View>
              <Text style={{fontSize: 16}}>Expiry Date</Text>
            </View>
                <ExpiryDatePicker month={month} setMonth={setMonth} year={year} setYear={setYear}/>
            </View>

          <View style={{width: '40%'}}>
            <View>
              <Text style={{fontSize: 16}}>CVV</Text>
            </View>
            <View
              style={{
                height: 60,
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FAFAFA",
                paddingHorizontal: 10,
                borderRadius: 10,
                marginTop: 10,
                gap: 10
              }}>
                <Ionicons name="card-outline" size={22} color={"#878787"} />
                <View style={{flex: 1}}>
                <TextInput 
                  placeholder="CVV"
                  style={{
                    color: "#A4A4A4",
                    fontSize: 16,
                  }}
                  value={cvv}
                  onChangeText={setCvv}
                />
                </View>
            </View>
          </View>
        </View>
      </View> */}


      <View style={{flexDirection: 'row', gap: 8, marginHorizontal: 10, marginTop: 30}}>
        <Pressable onPress={() => setIsChecked(!isChecked)} style={[styles.checkbox, {backgroundColor: isChecked ? Colors.PRIMARY : 'white', borderColor: Colors.PRIMARY}]}>
          {isChecked && <Feather name="check" size={18} color="white" />}
        </Pressable>
        <Text style={{color: '#878787'}}>Save card details for future transactions</Text>
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

export default CardDetails

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
    gap: 15
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500'
  }, 
  cardLogoContainer: {
    width: 40,
    height: 40
  }, 
  logo: {
    width: '100%',
    height: '100%'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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