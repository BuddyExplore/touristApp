import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function DriverDispatched() {

    const router = useRouter();

  return (
    <View style={styles.container}>


      {/* Status */}
      <Text style={styles.statusTitle}>Driver dispatched...</Text>
      <Text style={styles.statusSubtitle}>
        Driver is on his way to your pick-up location and will arrive shortly
      </Text>

      {/* Driver Details */}
      <View style={styles.driverContainer}>
        <Image
          source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }} // Replace with actual image URL
          style={styles.driverImage}
        />
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>Amal Perera</Text>
        </View>
        <View style={styles.driverActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Track Driver</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Estimated Time */}
      <Text style={styles.estimatedTime}>Estimated Time: 32 Minutes</Text>

      {/* OTP */}
      <View style={styles.otpContainer}>
        <Text style={styles.otpText}>
          Provide the OTP below to driver to start the trip.
        </Text>
        <Text style={styles.otpCode}>OTP : 6 7 8 6 2 1</Text>
      </View>

      {/* Vehicle Details */}
      <View style={styles.vehicleContainer}>
        <Text style={styles.vehicleTitle}>Vehicle Details</Text>
        <Image
            source={require('../../../assets/images/Book/Vehicles/Vehicle5.jpg')} // Directly use require here
            style={styles.vehicleImage}
        />

        <Text style={styles.vehicleDetails}>Vehicle: Toyota Coach</Text>
        <Text style={styles.vehicleDetails}>Type: Bus</Text>
        <Text style={styles.vehicleDetails1}>License Plate No: NB - 9832</Text>
      </View>

      {/* See More */}
      {/* <Text style={styles.seeMore}>See More...</Text> */}

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeButton}
        onPress={() => router.push("./tripStarted")}
      >
        <Text style={styles.closeButtonText}>Trip Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  statusSubtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  driverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  driverInfo: {
    flex: 1,
    marginLeft: 10,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '600',
  },
  driverActions: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007BFF',
    marginLeft: 10,
  },
  actionButtonText: {
    color: '#007BFF',
    fontSize: 14,
  },
  estimatedTime: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  otpText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  otpCode: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 5,
    marginBottom: 20,
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
  },
  vehicleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  vehicleImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  vehicleDetails: {
    fontSize: 16,
    textAlign: 'center',
  },
  vehicleDetails1: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
