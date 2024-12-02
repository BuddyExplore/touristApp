import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';

const Completed = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmitFeedback = () => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Hotel reserved</Text>
      <Text style={styles.description}>
        You have checked out the hotel. Go to back hotels to book again.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hotel Details</Text>
        <View style={styles.itemContainer}>
          <Image
            source={require('../../../assets/images/Book/Hotels/Hotel1.jpg')}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Holiday Inn</Text>
            <Text style={styles.itemLocation}>Hikkaduwa</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Room Details</Text>
        <View style={styles.shopContainer}>
          <Image
            source={require('../../../assets/images/Book/Hotels/Hotel1.jpg')}
            style={styles.shopImage}
          />
          <View style={styles.shopDetails}>
            <Text style={styles.shopTitle}>Double Room</Text>
            <Text style={styles.shopLocation}>2 nights</Text>
            <Text style={styles.shopLocation}>LKR 9890.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Reservation Information</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Check-In:</Text>
          <Text style={styles.infoValue}>07 Aug, 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Check-Out:</Text>
          <Text style={styles.infoValue}>08 Aug, 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Guests:</Text>
          <Text style={styles.infoValue}>4</Text>
        </View>
      </View>
    </View>
      <TouchableOpacity
        style={styles.reviewButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.reviewButtonText}>Rate & Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      {/* Modal for Rate and Review */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Rate and Review</Text>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleRating(star)}
                >
                  <Text
                    style={[
                      styles.star,
                      { color: star <= rating ? '#FFD700' : '#ccc' },
                    ]}
                  >
                    ★
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TextInput
              style={styles.feedbackInput}
              placeholder="Write your feedback here..."
              multiline
              value={feedback}
              onChangeText={setFeedback}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmitFeedback}
            >
              <Text style={styles.submitButtonText}>Submit Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  shopImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 14,
    color: '#555',
  },
  itemPrice: {
    fontSize: 14,
    color: '#0A89FF',
  },
  reviewButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#0A89FF',
    borderWidth: 2,
    marginBottom: 8,
  },
  reviewButtonText: {
    color: '#0A89FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#0A89FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  star: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  feedbackInput: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#0A89FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 10,
  },
  cancelButtonText: {
    color: '#0A89FF',
    fontSize: 16,
  },
  shopTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopLocation: {
    fontSize: 14,
    color: '#555',
  },
  shopButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapButton: {
    marginLeft: 10,
    backgroundColor: '#0A89FF',
    padding: 5,
    borderRadius: 5,
  },
  detailsButton: {
    marginLeft: 10,
    backgroundColor: '#0A89FF',
    padding: 5,
    borderRadius: 5,
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopDetails: {
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  infoContainer: {
    marginTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
});
