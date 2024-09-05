import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RequestBooking3({ vehicleInfo, onNext, destinations }) {
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
      {/* Back Icon and Progress Bar */}
      <View style={styles.header}>
        <View style={styles.progressBar}>
          <View style={styles.progress}></View>
        </View>
      </View>

      <Text style={styles.title}>Booking Summary 💳</Text>

      {/* Hotel Details Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="bed" size={20} color="black" />
          <Text style={styles.label}>Hotel Details</Text>
        </View>
        <View style={styles.detailsRow}>
          <Image source={vehicleInfo.img} style={styles.image} />
          <View style={styles.hotelDetails}>
            <Text style={styles.hotelName}>Wilpattu Rest</Text>
            <Text style={styles.hotelLocation}>Wilpattu</Text>
          </View>
        </View>
      </View>

      {/* Room Details Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="home" size={20} color="black" />
          <Text style={styles.label}>Room Details</Text>
        </View>
        <View style={styles.detailsRow}>
          {/* <Image source={vehicleInfo.img} style={styles.image} /> */}
          <Image source={require('./../../../assets/images/Book/Hotels/Room1.jpg')} style={styles.image} />
          <View>
            <Text style={styles.roomType}>Double Room</Text>
            <Text style={styles.nights}>2 nights</Text>
          </View>
          <Text style={styles.price}>LKR 9,899.00</Text>
        </View>
      </View>

      {/* Reservation Info Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calendar" size={20} color="black" />
          <Text style={styles.label}>Reservation Information</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Check-In:</Text>
          <Text style={styles.infoValue}>09 Aug, 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Check-Out:</Text>
          <Text style={styles.infoValue}>11 Aug, 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Guests:</Text>
          <Text style={styles.infoValue}>4</Text>
        </View>
      </View>

      {/* Personal Info Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={20} color="black" />
          <Text style={styles.label}>Personal Information</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name:</Text>
          <Text style={styles.infoValue}>David Adams</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>david.adams@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Contact No:</Text>
          <Text style={styles.infoValue}>+1 111 476 289 329</Text>
        </View>
      </View>

      {/* Payment Info Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="card" size={20} color="black" />
          <Text style={styles.label}>Payment Information</Text>
        </View>
        <View style={styles.detailsRow}>
          {/* <Ionicons name="logo-visa" size={40} color="black" /> */}
          <Image source={require('./../../../assets/images/Book/Hotels/visa.png')} style={styles.pay} />
          <Text style={styles.cardInfo}>... ... ... 7834</Text>
          <Text style={styles.price}>LKR 9,899.00</Text>
        </View>
      </View>

      {/* Confirm Payment Button */}
      <TouchableOpacity onPress={handleBookingRequest} style={styles.button}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
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
              Your booking has been requested. We will notify you once it is accepted.
            </Text>
            <TouchableOpacity onPress={closeBookingModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>View My Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeBookingModal} style={styles.modalLink}>
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginLeft: 10,
  },
  progress: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0078A1',
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hotelLocation: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  roomType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nights: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0078A1',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardInfo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0078A1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#0078A1',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalLink: {
    marginTop: 10,
  },
  modalLinkText: {
    color: '#0078A1',
    fontSize: 16,
  },
  hotelDetails:{
    marginLeft:30,
  },
  pay: {
    width: 80,
    height: 40,
    borderRadius: 10,
  },
});
