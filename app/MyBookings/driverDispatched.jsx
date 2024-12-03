import React, {useEffect , useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {Urls} from "../../constants/Urls"
import { useRouter, useLocalSearchParams  } from 'expo-router';

export default function DriverDispatched() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const router = useRouter();
  const {         
      bookingId,
      driverId,
      pickup_time,
      dropoff_time,
      pickup_location
    } = useLocalSearchParams();


  useEffect(() => {
    const fetchItems = async () => {
      console.log("Here")
      try {
        const response = await axios.get(
          `${Urls.SPRING}/getUser/123`  //change 321 to actual id
        );
        setData(response.data.content);
        console.log(response.data.content)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
    setLoading(false);
  }, []);


  if (loading) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Text>
    );
  }
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
          source={require('../../assets/images/default.jpg')} // Replace with actual image URL
          style={styles.driverImage}
        />
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>{data? data.first_name : 'Jagath'} {data? data.last_name : 'Chamara'}</Text>
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
            source={require('../../assets/images/Book/taxi.png')} // Directly use require here
            style={styles.vehicleImage}
        />

        <Text style={styles.vehicleDetails}>Vehicle: Toyota Corolla</Text>
        <Text style={styles.vehicleDetails}>Type: Car</Text>
        <Text style={styles.vehicleDetails1}>License Plate No: KP - 9832</Text>
      </View>

      {/* See More */}
      {/* <Text style={styles.seeMore}>See More...</Text> */}

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
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
