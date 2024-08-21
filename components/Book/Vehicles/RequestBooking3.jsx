import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RequestBooking3({ vehicleInfo, onNext,destinations }) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleBookingRequest = () => {
    setModalVisible(true);
  };

  const closeBookingModal = () => {
    setModalVisible(false);
    onNext();
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
        <View style={styles.remainingProgress}></View>
      </View>

      <Text style={styles.title}>Summary</Text>

      {/* Vehicle & Driver Section */}
      <View style={styles.section}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="car" size={22} color="black" style={styles.closeButton} />
          <Text style={styles.label}>Vehicle & Driver</Text>
        </View>
        <View style={styles.vehicleContainer}>
          <Image source={vehicleInfo.img} style={styles.image} />
          <View style={styles.vehicleInfo}>
            <Text style={styles.vehicleName}>{vehicleInfo.name}</Text>
            <View style={styles.driverInfo}>
              <Ionicons name="person" size={14} color="black" />
              <Text style={styles.driverName}>{vehicleInfo.driver}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Trip Dates & Times Section */}
      <View style={styles.section}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="calendar" size={18} color="black" style={styles.closeButton} />
          <Text style={styles.label}>Trip Dates & Times</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Pick-up : </Text>
          <Text style={styles.text}> Aug 23,2024 12.00 am </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Drop-off : </Text>
          <Text style={styles.text}> Aug 28,2024 12.00 am</Text>
        </View>
      </View>

      {/* Destinations Section */}
      <View style={styles.section}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="location" size={20} color="black" style={styles.closeButton} />
          <Text style={styles.label}>Destinations</Text>
          </View>
          <Text style={styles.text}> Nugegoda </Text>
          <Text style={styles.text}> Kirulapone </Text>
        
        {destinations && destinations.length > 0 ? (
          destinations.map((destination, index) => (
            <Text key={index} style={styles.text}>
              {destination.value}
            </Text>
          ))
        ) : (
          <Text style={styles.text}></Text> //No destinations selected
        )}
      </View>

      {/* Passengers Section */}
      <View style={styles.section}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="people" size={20} color="black" style={styles.closeButton} />
          <Text style={styles.label}>Passengers</Text>
        </View>
        <Text style={styles.text}>2 Passengers</Text>
      </View>

      {/* Booking Button */}
      <TouchableOpacity onPress={handleBookingRequest} style={styles.button}>
        <Text style={styles.buttonText}>Send Booking Request</Text>
      </TouchableOpacity>

      {/* Booking Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Booking Requested!</Text>
            <Text style={styles.modalText}>
              Your booking has been requested. We will notify you once it is accepted by the driver.
            </Text>
            <TouchableOpacity onPress={onNext} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>View My Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNext} style={styles.modalLink}>
              <Text style={styles.modalLinkText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  progressBar: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  progress: {
    flex: 3 / 3,
    backgroundColor: '#0078A1',
    borderRadius: 4,
  },
  remainingProgress: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  vehicleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  vehicleInfo: {
    justifyContent: 'center',
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverName: {
    fontSize: 14,
    marginLeft: 5,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  text1: {
    fontSize: 14,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0078A1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#0078A1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalLink: {
    marginTop: 15,
  },
  modalLinkText: {
    color: '#0078A1',
    fontSize: 16,
  },
});
