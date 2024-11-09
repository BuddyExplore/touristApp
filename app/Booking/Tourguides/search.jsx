import {StyleSheet, Text, View, TextInput, TouchableOpacity, Modal} from 'react-native'
import React,{ useState } from 'react'
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from '../../../constants/Colors';
import PopularTourguides from '../../../components/Book/TourGuides/PopularTourguides';


export default function book() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());

  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleSearch = () => {
    router.push({
      pathname: './searchResults',
      params: {
        pickupLocation,
        pickupDate,
        pickupTime,
      }
    });
  };

  const handleSelectDate = () => {
    setModalVisible(false);
  };

  const handleOpenSelectDate = () => {
    setModalVisible(true);
  };

  const onDayPress = (day) => {
    const newSelectedDates = { ...selectedDates };
    const dateString = day.dateString;

    if (newSelectedDates[dateString]) {
      delete newSelectedDates[dateString];
    } else {
      newSelectedDates[dateString] = {
        selected: true,
        marked: true,
        selectedColor: "blue",
      };
    }

    setSelectedDates(newSelectedDates);
    setPickupDate(dateString); // set pickup date
  };


  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
      setPickupTime(selectedTime.toLocaleTimeString()); // set pickup time
    }
  };


  const isSearchEnabled = () => {
    return (
      pickupLocation.trim() !== "" &&
      pickupDate.trim() !== "" &&
      pickupTime.trim() !== "" 
    );
  };

  return ( 
    <View style={{flex: 1, backgroundColor: "white"}}>

      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#FAFAFA",
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Ionicons name="location-outline" size={20} color="black" />
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Select City"
            style={{
              fontFamily: "outfit",
              color: "#A4A4A4",
              fontSize: 15,
            }}
            value={pickupLocation}
            onChangeText={setPickupLocation}
          />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          borderRadius: 30,
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={styles.dateTouchable}
          onPress={handleOpenSelectDate}
        >
          <View style={styles.dateTimeContainer}>
            <Ionicons name="calendar-clear-outline" size={22} color={"black"} />
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Select Date"
                style={{
                  fontFamily: "outfit",
                  color: "#A4A4A4",
                  fontSize: 15,
                }}
                value={pickupDate}
                editable={false}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateTouchable}
          onPress={() => setShowTimePicker(true)}
        >
          <View style={styles.dateTimeContainer}>
            <Ionicons name="time-outline" size={22} color={"black"} />
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Select Time"
                style={{
                  fontFamily: "outfit",
                  color: "#A4A4A4",
                  fontSize: 15,
                }}
                value={pickupTime}
                editable={false}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.searchButton,
          { opacity: isSearchEnabled() ? 1 : 0.5 },
        ]}
        onPress={handleSearch}
        disabled={!isSearchEnabled()}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#EEEEEE" }}>
          Search Tour Guide
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={selectedDates}
            markingType={"multi-dot"}
            style={styles.calendar}
            theme={{
              backgroundColor: "transparent",
              calendarBackground: "transparent",
            }}
          />

          <View
            style={{ display: "flex", alignItems: "center", marginTop: 30 }}
          >
            <TouchableOpacity
              style={styles.selectDateButton}
              onPress={handleSelectDate}
            >
              <Text>Select Date</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {showTimePicker && (
        <DateTimePicker value={time} mode="time" onChange={onTimeChange} />
      )}

      <TouchableOpacity
        style={styles.planYourTrip}
        onPress={() => {
        }}
      >
        <Text style={styles.planYourTripTextTitle}>Plan your trip</Text>
        <Text style={styles.planYourTripText}>
          Introducing personalized trip plans for your preferences
        </Text>
        <TouchableOpacity style={styles.tryOutButton}>
          <Text style={styles.tryOutButtonText}>Try out now</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    

    <PopularTourguides />

    </View>
  )
}

const styles = StyleSheet.create({
  dateTouchable: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  dateTimeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  searchButton: {
    marginTop: 15,
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  calendar: {
    borderRadius: 10,
  },
  selectDateButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  planYourTrip: {
    backgroundColor: "#F3F3F3",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 25
  },
  planYourTripTextTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  planYourTripText: {
    fontSize: 12,
    color: "black",
    // marginVertical: 5,
  },
  tryOutButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 7,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    width: "30%",
  },
  tryOutButtonText: {
    color: "white",
    fontSize: 12,
  },
});