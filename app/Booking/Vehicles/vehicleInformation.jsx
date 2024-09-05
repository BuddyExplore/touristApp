import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import VehicleModalDetails from '../../../components/Book/Vehicles/VehicleModalDetails';
import DriverModalDetails from '../../../components/Book/Vehicles/DriverModalDetails';
import ReviewModalDetails from '../../../components/Book/Vehicles/ReviewModalDetails';
import { Colors } from '../../../constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const vehicleInformation = () => {
  const preferencesList = [
    { name: 'Suzuki Alto', where: 'Nugegoda', driver: 'A.D. Bandara', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle5.jpg') },
    { name: 'Hiace Dolphin', where: 'Hokanda', driver: 'S.M. Perera', icon: '👤', img: require('../../../assets/images/Book/Vehicles/Vehicle6.jpg') },
    { name: 'Nissan Civillian', where: 'Moratuwa', driver: 'W.T. Saman', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle7.jpg') },
    { name: 'Volkswagon Caddy', where: 'Pannipitiya', driver: 'S.S.M. Peiris', icon: '⚙️', img: require('../../../assets/images/Book/Vehicles/Vehicle4.jpg') },
    { name: 'Suzuki Alto', where: 'Nugegoda', driver: 'A.D. Bandara', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle1.jpg') },
    { name: 'Hiace Dolphin', where: 'Hokanda', driver: 'S.M. Perera', icon: '👤', img: require('../../../assets/images/Book/Vehicles/Vehicle2.jpg') },
    { name: 'Nissan Civillian', where: 'Moratuwa', driver: 'W.T. Saman', icon: '🔔', img: require('../../../assets/images/Book/Vehicles/Vehicle3.jpg') },
    { name: 'Volkswagon Caddy', where: 'Pannipitiya', driver: 'S.S.M. Peiris', icon: '⚙️', img: require('../../../assets/images/Book/Vehicles/Vehicle4.jpg') },
  ];

  const router = useRouter();
  const { vehicleNo } = useLocalSearchParams();
  const vehicleInfo = preferencesList[vehicleNo];

  const reviews = [
    { name: "Alex Thomson", date: "4 months ago", text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional." },
    { name: "Jane Doe", date: "2 weeks ago", text: "The driver was so friendly and the vehicle was in good condition." },
    { name: "Alex Thomson", date: "4 months ago", text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional." },
    { name: "Jane Doe", date: "2 weeks ago", text: "The driver was so friendly and the vehicle was in good condition." },
  ];

  const [activeTab, setActiveTab] = useState('Vehicle Details');

  const handleRequestBooking = () => {
    // setShowBookingModal(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Vehicle Details':
        return <VehicleModalDetails vehicleInfo={vehicleInfo} />;
      case 'Driver Details':
        return <DriverModalDetails vehicleInfo={vehicleInfo} />;
      case 'Reviews':
        return <ReviewModalDetails reviews={reviews} />;
      default:
        return <VehicleModalDetails vehicleInfo={vehicleInfo} />;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.vehicleImgContainer}>
          <Image source={vehicleInfo.img} style={styles.vehicleImg} />
        </View>
        <View style={styles.vehicleInfoContainer}>
          <Text style={styles.vehicleName}>{vehicleInfo.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <Ionicons name="location-outline" size={20} color={'black'} />
            <Text style={styles.subText}> {vehicleInfo.where}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Vehicle Details')}>
          <Text style={[styles.tabText, activeTab === 'Vehicle Details' && styles.activeTabText]}>
            Vehicle Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Driver Details')}>
          <Text style={[styles.tabText, activeTab === 'Driver Details' && styles.activeTabText]}>
            Driver Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Reviews')}>
          <Text style={[styles.tabText, activeTab === 'Reviews' && styles.activeTabText]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}

      {/* Buttons positioned on top of the image */}
      <TouchableOpacity style={styles.backButton} onPress={() => { router.push('./searchResults') }}>
        <Ionicons name="arrow-back-outline" size={22} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareButton}>
        <Ionicons name="share-social" size={22} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-vertical" size={22} color={'black'} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity onPress={handleRequestBooking}>
            <Text style={styles.buttonTxt}>Request Booking</Text>
          </TouchableOpacity>
        </View>
        <Ionicons name="heart-outline" size={35} color={Colors.PRIMARY} style={styles.iconStyle} />
      </View>
      
  </View>
  )
}

export default vehicleInformation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  vehicleImgContainer: {
    height: 350
  },
  vehicleImg: {
    width: '100%',
    height: '100%',
  },
  vehicleInfoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20
  },
  vehicleName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'grey',
  },
  activeTabText: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  shareButton: {
    position: 'absolute',
    top: 10,
    right: 60,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  moreButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  nextButtonContainer: {
    backgroundColor: Colors.PRIMARY,
    height: 45,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginLeft: 20,
  },
  buttonTxt: {
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
  },
  headerTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:40,
    marginTop:15,
  },
  editButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    height: 40,
    width: 170,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: 10,
  },
  editText: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    marginRight: 10,
  },
});