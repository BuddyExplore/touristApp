import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; // Install if not available
import { useRouter, useLocalSearchParams , useNavigation} from 'expo-router';
import axios from "axios";
import {Urls} from "../../constants/Urls"

export default function TripFinished() {
    const router = useRouter();
    const navigation = useNavigation();
  const {         
      bookingId,
      driverId,
      pickup_time,
      dropoff_time,
      pickup_location
    } = useLocalSearchParams();

    const handleSubmit = () => {
        const fetchItems = async () => {
          console.log(bookingId)
          try {
            const response = await axios.put(
              `${Urls.SPRING}/api/Booking/Vehicle/updateStatus/${bookingId}/5`
            );
            console.log("Done")
          } catch (error) {
            console.error("Error fetching items:", error);
          }
        };
    
        fetchItems();
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View> */}

      {/* Trip Completion Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.title}>End of trip</Text>
        <Text style={styles.message}>
          Driver has ended the trip. <Text style={styles.boldText}>Confirm</Text> the end of the trip by entering the OTP provided to the driver...
        </Text>
      </View>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {Array(6)
          .fill('')
          .map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
            />
          ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.closeButton}
        onPress={() => router.push("./tripCompleted")}
      >
        <Text style={styles.closeButtonText}>details</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  messageContainer: {
    alignItems: 'center',
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
    marginHorizontal: 32,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
  submitButton: {
    marginTop: 32,
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    marginHorizontal: 32,
    borderRadius: 50,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
