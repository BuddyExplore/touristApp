import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons'; // Install via expo or npm
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function TripStarted() {

    const router = useRouter();
  const {         
      bookingId,
      driverId,
      pickup_time,
      dropoff_time,
      pickup_location
    } = useLocalSearchParams();
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

      {/* Trip Status */}
      <View style={styles.tripStatusContainer}>
        <Text style={styles.tripStatus}>Trip Started</Text>
        <Text style={styles.tripMessage}>
          The trip has started. Enjoy your trip!
        </Text>
      </View>

      {/* Vehicle Details */}
      <View style={styles.vehicleDetailsContainer}>
        <Image
          source={require('../../assets/images/Book/taxi.png')}
          style={styles.vehicleImage}
        />
        <View style={styles.vehicleTextContainer}>
          <Text style={styles.vehicleName}>Toyota Corolla</Text>
          <Text style={styles.driverName}>Driver Id: {driverId}</Text>
        </View>
        <TouchableOpacity style={styles.moreDetailsButton}>
          <Text style={styles.moreDetailsText}>More Details</Text>
        </TouchableOpacity>
      </View>

      {/* Destination List */}
      <ScrollView contentContainerStyle={styles.destinationListContainer}>
        <View style={styles.destinationItem}>
          <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              {pickup_location}
            </Text>
            <Text style={styles.destinationTime}>11:00 am</Text>
          </View>
        </View>

        <View style={styles.verticalLine} />

        <View style={styles.destinationItem}>
          <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              Horton Plains, Nuwara Eliya
            </Text>
          </View>
        </View>

        <View style={styles.destinationItem}>
          <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              Lake Gregory, Nuwara Eliya
            </Text>
          </View>
        </View>

        <View style={styles.destinationItem}>
          <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationName}>
              Sri Dalada Maligawa, Kandy
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.closeButton}
        onPress={() => router.push("./tripFinished")}
      >
        <Text style={styles.closeButtonText}>Trip Started</Text>
      </TouchableOpacity>

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
  tripStatusContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  tripStatus: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  tripMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  vehicleDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom:30,
  },
  vehicleImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  vehicleTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  driverName: {
    fontSize: 14,
    color: '#666',
  },
  moreDetailsButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 6,
  },
  moreDetailsText: {
    fontSize: 12,
    color: '#007BFF',
  },
  destinationListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginLeft: 30,
  },
  destinationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  destinationDetails: {
    marginLeft: 8,
    flex: 1,
  },
  destinationName: {
    fontSize: 14,
    color: '#000',
  },
  destinationTime: {
    fontSize: 12,
    color: '#666',
  },
  verticalLine: {
    height: 16,
    borderLeftWidth: 1,
    borderLeftColor: '#BDBDBD',
    marginLeft: 12,
  },
});
