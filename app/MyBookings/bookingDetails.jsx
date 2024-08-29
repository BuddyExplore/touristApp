import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const BookingDetails = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Details</Text>
      
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.status}>Request Sent</Text>
          <Text style={styles.description}>
            Your booking request has been sent to the driver. Wait until the driver responds.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Vehicle & Driver</Text>
          <View style={styles.vehicleInfo}>
            <Image source={require('../../assets/images/Book/Hotels/Hotel1.jpg')} style={styles.vehicleImage} />
            <View style={styles.vehicleDetails}>
              <Text style={styles.vehicleTitle}>Toyota Coach</Text>
              <Text style={styles.subText}>Piliyandala</Text>
              <View style={styles.ratingContainer}>
                {[...Array(4)].map((_, index) => (
                  <Text key={index} style={styles.star}>★</Text>
                ))}
                <Text style={styles.starDisabled}>★</Text>
              </View>
            </View>
          </View>
          <View style={styles.driverInfo}>
            <Image source={require('../../assets/images/Book/Hotels/Hotel1.jpg')} style={styles.driverImage} />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>Amal Perera</Text>
              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.messageButtonText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Trip Dates & Times</Text>
          <Text style={styles.subText}>Pick-up: Aug 09, 2024 11:00 am</Text>
          <Text style={styles.subText}>Drop-off: Aug 11, 2024 10:00 pm</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Destinations</Text>
          <View style={styles.destination}>
            <Text style={styles.destinationText}>Piliyandala Clock Tower</Text>
            <Text style={styles.timeText}>11:00 am</Text>
          </View>
          <Text style={styles.destinationText}>Horton Plains, Nuwara Eliya</Text>
          <Text style={styles.destinationText}>Lake Gregory, Nuwara Eliya</Text>
          <Text style={styles.destinationText}>Sri Dalada Maligawa, Kandy</Text>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A89FF',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
  },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  vehicleDetails: {
    marginLeft: 10,
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    fontSize: 14,
    color: '#FFD700',
  },
  starDisabled: {
    fontSize: 14,
    color: '#ccc',
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  driverDetails: {
    marginLeft: 10,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageButton: {
    marginTop: 5,
    backgroundColor: '#0A89FF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  messageButtonText: {
    fontSize: 12,
    color: '#fff',
  },
  destination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  destinationText: {
    fontSize: 14,
    color: '#666',
  },
  timeText: {
    fontSize: 14,
    color: '#aaa',
  },
  closeButton: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#0A89FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
