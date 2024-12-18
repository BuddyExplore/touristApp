import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function GenaratedTrips({ trips }) {
  const router = useRouter();
  
  // Local state for trips
  const [visibleTrips, setVisibleTrips] = useState(trips);

  const handleDelete = (id) => {
    console.log(`Delete trip with ID: ${id}`);
    
    // Temporarily filter out the trip
    setVisibleTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id));
  };

  const renderTripCard = ({ item }) => (
    <TouchableOpacity 
        style={styles.card}
        onPress={() => router.push('/MyBookings/result')}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.details}>Travelling: {item.details}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteText}>✖</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={visibleTrips} // Use the local state for rendering
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderTripCard}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
    marginTop: 5,
  },
  details: {
    marginTop: 5,
    color: '#444',
  },
  deleteButton: {
    backgroundColor: '#000',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
