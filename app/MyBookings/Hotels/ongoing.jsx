import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

const Ongoing = () => {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Hotel Booked</Text>
      <Text style={styles.description}>
        You have booked the hotel. Show the QR code to check in to the hotel.
      </Text>
      <View style={styles.qrContainer}>
        <QRCode value="Reserved Item: Batik Shirt" size={150} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hotel Details</Text>
        <View style={styles.itemContainer}>
          <Image
            source={require('../../../assets/images/Book/Hotels/Hotel1.jpg')}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Wilpattu Rest</Text>
            <Text style={styles.itemLocation}>Wilpattu</Text>
          </View>
        </View>
      </View>

      {showMore && (
        <>
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
              <Text style={styles.shopLocation}>LKR 9,890.00</Text>
            </View>
          </View>
        </View>
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reservation Information</Text>
          <View style={styles.infoContainer}>
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
       
        </View>
        </>
      )}

      <View style={styles.shopButtons}>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => setShowMore(!showMore)} 
      >
        <Text style={styles.buttonText}>{showMore ? 'Show less' : 'See More...'}</Text>
      </TouchableOpacity>
    </View>
    
    



    {showMore && (
          <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
    )}
    </View>
  );
};

export default Ongoing;

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
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 10,
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
  shopButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsButton: {
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  buttonText: {
    color: '#5A9EFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  shopDetails: {
    flex: 1,
  },
  shopTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    flex: 1,
  },
  infoValue: {
    flex: 2,
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
});
