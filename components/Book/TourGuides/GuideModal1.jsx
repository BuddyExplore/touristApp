import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import TourGuideModalDetails from "./TourGuideModalDetails";
import DestinationModalDetails from "./DestinationModalDetails";
import ReviewModalDetails from "./ReviewModalDetails";
import RequestBooking1 from "./RequestBooking1";
import RequestBooking2 from "./RequestBooking2";
import VehicleSearchFilter from "../Vehicles/VehicleSearchFilter";

export default function GuideModal({ guideInfo, visibility, closeModal }) {
  const reviews = [
    {
      name: "Alex Thomson",
      date: "4 months ago",
      text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional.",
    },
    {
      name: "Jane Doe",
      date: "2 weeks ago",
      text: "The driver was so friendly and the vehicle was in good condition.",
    },
    {
      name: "Alex Thomson",
      date: "4 months ago",
      text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional.",
    },
    {
      name: "Jane Doe",
      date: "2 weeks ago",
      text: "The driver was so friendly and the vehicle was in good condition.",
    },
  ];

  const [modalVisible, setModalVisible] = useState(visibility);
  const [activeTab, setActiveTab] = useState("Tour Guide");
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
      case "Tour Guide":
        return <TourGuideModalDetails guideInfo={guideInfo} />;
      case "Destination":
        return <DestinationModalDetails guideInfo={guideInfo} />;
      case "Reviews":
        return <ReviewModalDetails reviews={reviews} />;
      default:
        return <TourGuideModalDetails guideInfo={guideInfo} />;
    }
  };

  const renderBookingStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RequestBooking1 onNext={handleNextStep} guideInfo={guideInfo} />
        );
      case 2:
        return (
          <RequestBooking2 onNext={handleNextStep} guideInfo={guideInfo} />
        );
      case 3:
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
            <Image source={guideInfo.img} style={styles.vehicleImg} />
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleName}>{guideInfo.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Ionicons name="location-outline" size={20} color={"black"} />
                <Text style={styles.subText}> {guideInfo.where}</Text>
              </View>
            </View>

            <View style={styles.tabContainer}>
              <TouchableOpacity onPress={() => setActiveTab("Tour Guide")}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "Tour Guide" && styles.activeTabText,
                  ]}
                >
                  Tour Guide
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab("Destination")}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "Destination" && styles.activeTabText,
                  ]}
                >
                  Destination
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab("Reviews")}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "Reviews" && styles.activeTabText,
                  ]}
                >
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
            {renderContent()}

            {/* Buttons positioned on top of the image */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleCloseModal}
            >
              <Ionicons name="arrow-back-outline" size={22} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-social-outline" size={22} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <Ionicons
                name="ellipsis-vertical-outline"
                size={22}
                color={"black"}
              />
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <View style={styles.nextButtonContainer}>
                <TouchableOpacity onPress={handleRequestBooking}>
                  <Text style={styles.buttonTxt}>Request Booking</Text>
                </TouchableOpacity>
              </View>
              <Ionicons
                name="heart-outline"
                size={35}
                color={Colors.PRIMARY}
                style={styles.iconStyle}
              />
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 35,
              }}
            >
              <TouchableOpacity
                style={[styles.button, styles.backButton]}
                onPress={handleBackStep}
              >
                <Ionicons name="arrow-back-outline" size={26} color={"black"} />
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
    justifyContent: "center",
    marginTop: 0,
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 0,
    overflow: "hidden",
  },
  vehicleImg: {
    width: "100%",
    height: 350,
  },
  vehicleInfoContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  vehicleName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: "grey",
  },
  activeTabText: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  shareButton: {
    position: "absolute",
    top: 10,
    right: 60,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  moreButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
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
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 15,
  },
  editButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    height: 40,
    width: 170,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginLeft: 10,
  },
  editText: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
    marginRight: 10,
  },
});
