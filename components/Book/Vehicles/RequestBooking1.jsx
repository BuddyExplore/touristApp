import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RequestBooking1({ vehicleInfo, onNext }) {
  const [destinations, setDestinations] = useState([{ id: 1, value: '' }]);

  const addDestination = () => {
    setDestinations([...destinations, { id: destinations.length + 1, value: '' }]);
  };

  const deleteDestination = (index) => {
    setDestinations(destinations.filter((_, i) => i !== index));
  };

  const isContinueEnabled = () => {
    return destinations.some(destination => destination.value.trim() !== '');
  };

  const handleContinue = () => {
    if (isContinueEnabled()) {
      onNext({ destinations });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
        <View style={styles.remainingProgress}></View>
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Select your destinations</Text>
      <Text style={styles.subtitle}>Choose the destinations you are planning to visit.</Text>

      {/* Selected Destination */}
      <View style={styles.selectedDestination}>
        <Ionicons name="locate" size={24} color="black" />
        <Text style={styles.destinationText}>{vehicleInfo.where}</Text>
      </View>
      <View style={{marginLeft:12,marginTop:5, marginBottom:10}}>
        <Ionicons name="ellipsis-vertical-outline" size={20} color="black"/>
        <Ionicons name="ellipsis-vertical-outline" size={20} color="black"/>
      </View>

      {/* Destination Inputs */}
      {destinations.map((destination, index) => (
        <View key={index} style={styles.input}>
          <Ionicons name="location" size={20} color="black" />
          <TextInput 
            style={{ marginLeft: 10, flex: 1 }}
            placeholder="Select Destination"
            placeholderTextColor="#888"
            value={destination.value}
            onChangeText={(text) => {
              const newDestinations = [...destinations];
              newDestinations[index].value = text;
              setDestinations(newDestinations);
            }}
          />
          <TouchableOpacity onPress={() => deleteDestination(index)}>
            <Ionicons name="close-outline" size={20} color="black" style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      ))}

      {/* Add More Button */}
      <TouchableOpacity style={styles.addButton} onPress={addDestination}>
        <Ionicons name="add-circle-outline" size={24} color="#007bff" />
        <Text style={styles.addButtonText}>Add more</Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity 
        onPress={handleContinue} 
        style={[styles.continueButton, { opacity: isContinueEnabled() ? 1 : 0.5 }]} 
        disabled={!isContinueEnabled()}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  progressBar: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  progress: {
    flex: 1 / 3,
    backgroundColor: '#0078A1',
    borderRadius: 4,
  },
  remainingProgress: {
    flex: 2 / 3,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  selectedDestination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  destinationText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  addButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0078A1',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#0078A1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginLeft: 10,
  },
});
