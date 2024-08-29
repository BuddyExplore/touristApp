import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const allBookings = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>
      
      <ScrollView>
        <Text style={styles.sectionHeader}>Ongoing</Text>
        <View style={styles.bookingItem}>
          <Image source={require('../../assets/images/Book/Hotels/Hotel1.jpg')} style={styles.image} />
          <View style={styles.bookingInfo}>
            <Text style={styles.bookingTitle}>Toyota Coach</Text>
            <Text style={styles.subText}>Amal Perera</Text>
            <Text style={styles.dateText}>Aug 09 - Aug 11</Text>
            <Text style={styles.statusDispatched}>Driver Dispatched</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Upcoming</Text>
        <TouchableOpacity style={styles.bookingItem} onPress={() => router.push('./bookingDetails')}>
          <Image source={require('../../assets/images/Book/Hotels/Hotel1.jpg')} style={styles.image} />
          <View style={styles.bookingInfo}>
            <Text style={styles.bookingTitle}>Toyota Coach</Text>
            <Text style={styles.subText}>Amal Perera</Text>
            <Text style={styles.dateText}>Aug 09 - Aug 11</Text>
            <Text style={styles.statusRequested}>Requested</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Completed</Text>
        <View style={styles.bookingItem}>
          <Image source={require('../../assets/images/Book/Hotels/Hotel1.jpg')} style={styles.image} />
          <View style={styles.bookingInfo}>
            <Text style={styles.bookingTitle}>Nissan Clipper</Text>
            <Text style={styles.subText}>Kasun Gunawardene</Text>
            <Text style={styles.dateText}>Aug 09 - Aug 11</Text>
            <Text style={styles.statusCompleted}>Completed</Text>
          </View>
        </View>

        <View style={styles.bookingItem}>
          <Image source={require('../../assets/images/Book/Hotels/Hotel1.jpg')} style={styles.image} />
          <View style={styles.bookingInfo}>
            <Text style={styles.bookingTitle}>Toyota Coach</Text>
            <Text style={styles.subText}>Amal Perera</Text>
            <Text style={styles.dateText}>Aug 09 - Aug 11</Text>
            <Text style={styles.statusCanceled}>Canceled</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default allBookings;

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
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginLeft: 20,
    marginTop: 10,
  },
  bookingItem: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  bookingInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  dateText: {
    fontSize: 12,
    color: '#aaa',
  },
  statusDispatched: {
    fontSize: 12,
    color: '#0A89FF',
    marginTop: 5,
  },
  statusRequested: {
    fontSize: 12,
    color: '#0A89FF',
    marginTop: 5,
  },
  statusCompleted: {
    fontSize: 12,
    color: '#28a745',
    marginTop: 5,
  },
  statusCanceled: {
    fontSize: 12,
    color: '#dc3545',
    marginTop: 5,
  },
});
