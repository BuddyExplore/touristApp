import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

const BookingDetails = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRateAndReview = () => {
    setModalVisible(true);
  };

  const submitFeedback = () => {
    console.log('Rating:', rating, 'Review:', review);
    setModalVisible(false);
    alert('Feedback submitted successfully!');
  };

  return (
    <View style={styles.container}>
      
      <ScrollView>
        <View style={styles.statusContainer}>
          <Text style={styles.tripStatus}>Trip Completed</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Vehicle & Driver</Text>
          <View style={styles.vehicleInfo}>
            <Image source={require('../../assets/images/Book/Vehicles/Vehicle1.jpg')} style={styles.vehicleImage} />
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
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Trip Dates & Times</Text>
          <Text style={styles.subText}>Trip Started: Aug 09, 2024 11:13 am</Text>
          <Text style={styles.subText}>Trip Ended: Aug 11, 2024 10:54 pm</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Destinations</Text>
          <Text style={styles.destinationText}>Piliyandala Clock Tower</Text>
          <Text style={styles.destinationText}>Horton Plains, Nuwara Eliya</Text>
          <Text style={styles.destinationText}>Lake Gregory, Nuwara Eliya</Text>
          <Text style={styles.destinationText}>Sri Dalada Maligawa, Kandy</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rateButton} onPress={handleRateAndReview}>
            <Text style={styles.rateButtonText}>Rate & Review</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal for Rate and Review */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Rate and Review</Text>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, index) => (
                <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                  <Text style={[styles.star, index < rating && styles.starActive]}>★</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TextInput
              style={styles.reviewInput}
              placeholder="Write a review"
              multiline
              value={review}
              onChangeText={setReview}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.submitButton} onPress={submitFeedback}>
                <Text style={styles.submitButtonText}>Submit Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tripStatus: {
    fontSize: 24,
    color: '#0A89FF',
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
    marginTop: 20,
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
    fontSize: 30,
    color: '#ccc',
  },
  starDisabled: {
    fontSize: 30,
  },
  starActive: {
    color: '#FFD700',
  },
  destinationText: {
    fontSize: 14,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 14,
    color: '#fff',
  },
  rateButton: {
    backgroundColor: '#0A89FF',
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  rateButtonText: {
    fontSize: 14,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reviewInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    textAlignVertical: 'top',
    height: 80,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#0A89FF',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  submitButtonText: {
    color: '#fff',
  },
  cancelButtonText: {
    color: '#0A89FF',
    textAlign: 'center',
    marginTop: 10,
  },
});
