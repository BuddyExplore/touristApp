import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Checkbox, ProgressBar } from 'react-native-paper';

const PaymentMethodScreen = ({ onNext }) => {

  return (
    <View style={styles.container}>

      {/* Progress Bar */}
      <ProgressBar progress={0.5} color="#4287f5" style={styles.progressBar} />

      {/* Title */}
      <Text style={styles.title}>Card Details 💳</Text>

      {/* Card Number Input */}
      <TextInput
        style={styles.input}
        placeholder="XXXX  XXXX  XXXX  XXXX"
        keyboardType="numeric"
      />

      {/* Card Holder Name */}
      <TextInput
        style={styles.input}
        placeholder="Enter card holder name"
      />

      <View style={styles.row}>
        {/* Expiry Input */}
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Date"
          keyboardType="numeric"
        />

        {/* CVV Input */}
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVV"
          keyboardType="numeric"
        />
      </View>

      {/* Save Card Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox></Checkbox>
        <Text style={styles.checkboxText}>Save card details for future transactions</Text>
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
    justifyContent: 'center',
  },
  progressBar: {
    marginBottom: 30,
    height: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkboxText: {
    fontSize: 16,
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
