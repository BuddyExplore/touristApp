import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const PaymentMethodScreen = ({ onNext }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: 'Visa', image: require('./../../../assets/images//Book/Hotels/visa.png') },
    { id: 2, name: 'Master Card', image: require('../../../assets/images/Book/Hotels/MasterCard.png') },
    { id: 3, name: 'Paypal', image: require('../../../assets/images/Book/Hotels/paypal.png') },
    { id: 4, name: 'Google Pay', image: require('../../../assets/images/Book/Hotels/google.png') },
  ];
  

  return (
    <View style={styles.container}>

      {/* Progress Bar */}
      <ProgressBar progress={0.5} color="#4287f5" style={styles.progressBar} />

      {/* Title */}
      <Text style={styles.title}>Payment method 💳</Text>

      {/* Payment Methods */}
      <View style={styles.paymentMethods}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentMethodCard,
              selectedMethod === method.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <Image source={method.image} style={styles.cardImage} />
            <Text style={styles.methodText}>{method.name}</Text>
            <Ionicons
              name={selectedMethod === method.id ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={selectedMethod === method.id ? '#4287f5' : '#ccc'}
            />
          </TouchableOpacity>
        ))}
      </View>


      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={onNext}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  progressBar: {
    marginTop: 20,
    height: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentMethods: {
    marginTop: 20,
  },
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  selectedCard: {
    borderColor: '#4287f5',
    borderWidth: 2,
  },
  cardImage: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  methodText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#4287f5',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentMethodScreen;
