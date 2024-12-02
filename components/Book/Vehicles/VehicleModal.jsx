import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import VehicleModalDetails from './VehicleModalDetails';
import DriverModalDetails from './DriverModalDetails';
import ReviewModalDetails from './ReviewModalDetails';
import RequestBooking1 from '../Vehicles/RequestBooking1';
import RequestBooking2 from '../Vehicles/RequestBooking2';
import RequestBooking3 from '../Vehicles/RequestBooking3';
import VehicleSearchFilter from '../Vehicles/VehicleSearchFilter';
  
export default function VehicleModal({ vehicleInfo, visibility, closeModal }) {

  const reviews = [
    { name: "Alex Thomson", date: "4 months ago", text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional." },
    { name: "Jane Doe", date: "2 weeks ago", text: "The driver was so friendly and the vehicle was in good condition." },
    { name: "Alex Thomson", date: "4 months ago", text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional." },
    { name: "Jane Doe", date: "2 weeks ago", text: "The driver was so friendly and the vehicle was in good condition." },
  ];


  const [modalVisible, setModalVisible] = useState(visibility);
  const [activeTab, setActiveTab] = useState('Vehicle Details');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleCloseModal = () => {
    closeModal(1);
    setModalVisible(false);
  };

  const handleRequestBooking = () => {
    setShowBookingModal(true);
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowBookingModal(false);
      handleCloseModal();
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setShowBookingModal(false);
    }
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

  const renderBookingStep = () => {
    switch (currentStep) {
      case 1:
        return <RequestBooking1 onNext={handleNextStep} vehicleInfo={vehicleInfo} />;
      case 2:
        return <RequestBooking2 onNext={handleNextStep} vehicleInfo={vehicleInfo}/>;
      case 3:
        return <RequestBooking3 onNext={handleNextStep} vehicleInfo={vehicleInfo}/>;
        case 4:
        return <VehicleSearchFilter onNext={handleNextStep} />;
      default:
        return <RequestBooking1 onNext={handleNextStep} />;
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        statusBarTranslucent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={vehicleInfo.img} style={styles.vehicleImg} />
            <View style={styles.vehicleInfoContainer}>
              <Text style={styles.vehicleName}>{vehicleInfo.vehicle_model}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <Ionicons name="location-outline" size={20} color={'black'} />
                <Text style={styles.subText}> {vehicleInfo.where}</Text>
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
            <TouchableOpacity style={styles.backButton} onPress={handleCloseModal}>
              <Ionicons name="arrow-back" size={22} color={'black'} />
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
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showBookingModal}
        onRequestClose={() => setShowBookingModal(false)}
        statusBarTranslucent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 35 }}>
              <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBackStep}>
                <Ionicons name="arrow-back-outline" size={26} color={'black'} />
              </TouchableOpacity>
              <Text style={styles.headerTxt}> Book Vehicle</Text>
            </View>

            <ScrollView>{renderBookingStep()}</ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 0
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 0,
    overflow: 'hidden',
  },
  vehicleImg: {
    width: '100%',
    height: 350,
  },
  vehicleInfoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
