import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RequestBooking1({ vehicleInfo, onNext }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const rooms = [
    { id: 1, name: 'Double Room', price: 9899, image: require('./../../../assets/images/Book/Hotels/Room1.jpg') },
    { id: 2, name: 'Triple Room', price: 15899, image: require('./../../../assets/images/Book/Hotels/Room2.jpg') },
  ];

  const isRoomSelected = (room) => selectedRooms.some(selectedRoom => selectedRoom.id === room.id);

  const toggleRoomSelection = (room) => {
    if (isRoomSelected(room)) {
      setSelectedRooms(selectedRooms.filter(selectedRoom => selectedRoom.id !== room.id));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const isContinueEnabled = () => {
    return selectedRooms.length > 0;
  };

  const handleContinue = () => {
    if (isContinueEnabled()) {
      onNext({ selectedRooms });
    }
  };

  const getTotalPrice = () => {
    return selectedRooms.reduce((total, room) => total + room.price, 0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
        <View style={styles.remainingProgress}></View>
      </View>

      {/* Rooms Selected and Total Price */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Rooms Selected: <Text style={styles.summaryText1}>{selectedRooms.length}</Text></Text>
        <Text style={styles.summaryText}>Total Price: <Text style={styles.summaryText1}>LKR {getTotalPrice().toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text></Text>
      </View>

      {/* Available Rooms */}
      <Text style={styles.title}>Available Rooms</Text>
      <View style={styles.roomsContainer}>
        {rooms.map(room => (
          <TouchableOpacity
            key={room.id}
            style={[styles.room, isRoomSelected(room) ? styles.selectedRoom : styles.unselectedRoom]}
            onPress={() => toggleRoomSelection(room)}
          >
            <Image source={room.image} style={styles.roomImage} />
            <View style={styles.roomDetails}>
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomInfo}>1 {room.name === 'Double Room' ? 'double bed' : 'triple bed'}</Text>
              <Text style={styles.roomInfo}>Air Conditioning</Text>
              <Text style={styles.roomInfo}>Private Bathroom</Text>
              <Text style={styles.roomInfo}>Free Wifi</Text>
              <Text style={styles.roomInfo}>TV</Text>
              <Text style={styles.roomPrice}>LKR {room.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
            </View>
            {isRoomSelected(room) && (
              <Ionicons name="checkbox-outline" size={24} color="blue" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        onPress={handleContinue} 
        style={[styles.continueButton, { opacity: isContinueEnabled() ? 1 : 0.5 }]} 
        disabled={!isContinueEnabled()}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  progressBar: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  progress: {
    flex: 1 / 3,
    backgroundColor: '#0078A1',
    borderRadius: 4,
  },
  remainingProgress: {
    flex: 2 / 3,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  summary: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryText1: {
    fontSize: 16,
    fontFamily:'outfit',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roomsContainer: {
    marginBottom: 20,
  },
  room: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  unselectedRoom: {
    borderColor: '#ccc',
  },
  selectedRoom: {
    borderColor: '#0078A1',
    borderWidth: 2,
  },
  roomImage: {
    width: 100,
    height: 130,
    borderRadius: 10,
    marginRight: 15,
  },
  roomDetails: {
    flex: 1,
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  roomInfo: {
    fontSize: 14,
    color: '#888',
  },
  roomPrice: {
    fontSize: 16,
    color: '#0078A1',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#0078A1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
