import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function MyTrip() {
  const router = useRouter();

  const bookings = [
    {
      id: 1,
      image: require('../../assets/images/Book/Hotels/Hotel1.jpg'), // Replace with actual path
      title: 'Toyota Coach',
      location: 'Amal Perera',
      status: 'Trip Started',
      statusColor: Colors.lightBlue,
      icon: '🚍', // Emoji as an icon
    },
    {
      id: 2,
      image: require('../../assets/images/Book/Hotels/Hotel1.jpg'), // Replace with actual path
      title: 'D.T.S. Gunasekara',
      location: 'Isurumuniya Temple',
      time: '5:45 PM',
      icon: '🔽', // Emoji as an icon
    },
    {
      id: 3,
      image: require('../../assets/images/Book/Hotels/Hotel1.jpg'), // Replace with actual path
      title: 'Wilpattu Resport',
      location: 'Wilpattu',
      status: 'Booked',
      statusColor: Colors.blue,
      icon: '🏡', // Emoji as an icon
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Trip</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Bookings</Text>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingCard}>
            <Text style={styles.icon}>{booking.icon}</Text>
            <Image source={booking.image} style={styles.bookingImage} />
            <View style={styles.bookingDetails}>
              <Text style={styles.bookingTitle}>{booking.title}</Text>
              <Text>{booking.location}</Text>
              {booking.time ? (
                <Text style={styles.time}>{booking.time}</Text>
              ) : (
                <Text style={[styles.status, { backgroundColor: booking.statusColor }]}>
                  {booking.status}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/MyBookings/allBookings')}
      >
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>

      <Text style={styles.planTripText}>Plan a trip</Text>
      <TouchableOpacity style={styles.generateButton}
        onPress={() => router.push('/MyBookings/TripPlanner')}
      >
        <Text style={styles.generateButtonText}>Generate Trip Plan</Text>
        
      </TouchableOpacity>

      <Text style={styles.completedTripsText}>Completed Trips</Text>
      <Text style={styles.noTripsText}>No trips completed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    paddingBottom: 10,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  bookingImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  bookingDetails: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: '#fff',
    fontSize: 12,
  },
  time: {
    marginTop: 5,
    color: '#555',
  },
  button: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  planTripText: {
    fontSize: 16,
    marginBottom: 10,
  },
  generateButton: {
    padding: 15,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  generateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  completedTripsText: {
    fontSize: 16,
    marginBottom: 10,
  },
  noTripsText: {
    color: '#888',
  },
});
