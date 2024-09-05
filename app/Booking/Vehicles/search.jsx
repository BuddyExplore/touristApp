import {StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Button} from 'react-native'
import React,{ useState } from 'react'
// import PopularVehicles from '../../../components/Book/Vehicles/PopularVehicles';
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from '../../../constants/Colors';
import { useRouter } from 'expo-router';

export default function search() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedDates1, setSelectedDates1] = useState({});
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showTimePicker1, setShowTimePicker1] = useState(false);
  const [time, setTime] = useState(new Date());
  const [time1, setTime1] = useState(new Date());

  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [destinations, setDestinations] = useState([""]);

  const handleSearch = () => {
    router.push({
      pathname: './searchResults',
      params: {
        pickupLocation,
        pickupDate,
        dropoffDate,
        pickupTime,
        dropoffTime,
      }
    });
  };

  const addDestination = () => {
    setDestinations([...destinations, '']);
  }

  const updateDestinations = (text, index) => {
    setDestinations(
      destinations.map((destination, i) =>
        i  ===  index ? text : destination
      )
    )
  }

  const handleSelectDate = () => {
    setModalVisible(false);
    setModalVisible1(false);
  };

  const handleOpenSelectDate = () => {
    setModalVisible(true);
  };

  const handleOpenSelectDate1 = () => {
    setModalVisible1(true);
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

  const onDayPress1 = (day) => {
    const newSelectedDates = { ...selectedDates1 };
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

    setSelectedDates1(newSelectedDates);
    setDropoffDate(dateString); // set drop-off date
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
      setPickupTime(selectedTime.toLocaleTimeString()); // set pickup time
    }
  };

  const onTimeChange1 = (event, selectedTime) => {
    setShowTimePicker1(false);
    if (selectedTime) {
      setTime1(selectedTime);
      setDropoffTime(selectedTime.toLocaleTimeString()); // set drop-off time
    }
  };

  const isSearchEnabled = () => {
    return (
      pickupLocation.trim() !== "" &&
      pickupDate.trim() !== "" &&
      dropoffDate.trim() !== "" &&
      pickupTime.trim() !== "" &&
      dropoffTime.trim() !== ""
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View style={{backgroundColor:"white"}}>
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
            marginTop: 10
          }}
        >
          <MaterialIcons name="my-location" size={24} color="black" />
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Enter pick-up location"
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
                  placeholder="Pick-up date"
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
                  placeholder="Pick-up time"
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
        
        <View>
          <View>
          {/* Select Destination */}
          {destinations.map((destination, index) => (
            <View key={index}
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
                marginTop: 10
              }}
            >
              <Ionicons name="location" size={24} color={"black"} />
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Select Destination"
                  style={{
                    fontFamily: "outfit",
                    color: "#A4A4A4",
                    fontSize: 15,
                  }}
                  value={destinations[index]}
                  onChangeText={(text) => updateDestinations(text, index)}
                />
              </View>
            </View>
          ))}
          </View>

          <View>
            
          </View>
        </View>

        <View>
        <Button
              title="Add Item"
              onPress={() => {
                addDestination(); // Set the index of the item to be edited
              }}
            />
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
            onPress={handleOpenSelectDate1}
          >
            <View style={styles.dateTimeContainer}>
              <Ionicons name="calendar-clear-outline" size={22} color={"black"} />
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Drop-off date"
                  style={{
                    fontFamily: "outfit",
                    color: "#A4A4A4",
                    fontSize: 15,
                  }}
                  value={dropoffDate}
                  editable={false}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateTouchable}
            onPress={() => setShowTimePicker1(true)}
          >
            <View style={styles.dateTimeContainer}>
              <Ionicons name="time-outline" size={22} color={"black"} />
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Drop-off time"
                  style={{
                    fontFamily: "outfit",
                    color: "#A4A4A4",
                    fontSize: 15,
                  }}
                  value={dropoffTime}
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
            Search Vehicle
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Calendar
              onDayPress={onDayPress1}
              markedDates={selectedDates1}
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

        {showTimePicker1 && (
          <DateTimePicker value={time1} mode="time" onChange={onTimeChange1} />
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
      </View>

      {/* <PopularVehicles /> */}

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
    paddingVertical: 12,
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
    marginBottom: 10,
    marginTop: 50
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
