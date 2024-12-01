import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import QRCode from 'react-native-qrcode-svg'; // Add this package for QR code generation if not already installed.

const Reserved = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Booking Details</Text> */}
      <Text style={styles.subHeader}>Item reserved</Text>
      <Text style={styles.description}>
        You have reserved the item. Please collect your item by going to the shop and showing the QR below.
      </Text>
      <View style={styles.qrContainer}>
        <QRCode value="Reserved Item: Batik Shirt" size={150} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Item</Text>
        <View style={styles.itemContainer}>
          <Image
            source={require('../../../assets/images/Book/Hotels/Hotel1.jpg')}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Batik Shirt</Text>
            <Text style={styles.itemLocation}>@ Gampaha</Text>
            <Text style={styles.itemPrice}>LKR 4500.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop</Text>
        <View style={styles.shopContainer}>
          <Image
            source={require('../../../assets/images/Book/Hotels/Hotel1.jpg')}
            style={styles.shopImage}
          />
          <View style={styles.shopDetails}>
            <Text style={styles.shopTitle}>Lakpahana</Text>
            <Text style={styles.shopLocation}>@ Kandy</Text>
          </View>
          <View style={styles.shopButtons}>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.buttonText}>Map View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reserved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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
  itemPrice: {
    fontSize: 14,
    color: '#0A89FF',
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
  buttonText: {
    color: '#fff',
    fontSize: 12,
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
