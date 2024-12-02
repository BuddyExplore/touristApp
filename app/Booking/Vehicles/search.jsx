import {StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Button, FlatList, Pressable, ScrollView} from 'react-native'
import React,{ useState } from 'react'
// import PopularVehicles from '../../../components/Book/Vehicles/PopularVehicles';
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from '../../../constants/Colors';
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function search() {
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

  const [searchDestination, setSearchDestination] = useState("");
  const [destinations, setDestinations] = useState([]);

  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    const destinations_json = JSON.stringify(destinations);

    router.push({
      pathname: './searchResults',
      params: {
        pickupLocation,
        pickupDate,
        pickupTime,
        destinations_json,
        dropoffDate,
        dropoffTime,
        passengers
      }
    });
  };

  const addDestination = (text) => {
    setDestinations([...destinations, text]);
    setSearchDestination("");
  }

  const removeDestination = (i) => {
    const newDestinations = destinations.filter((destination, index) => index != i);
    setDestinations(newDestinations)
  }

  // const updateDestinations = (text, index) => {
  //   setDestinations(
  //     destinations.map((destination, i) =>
  //       i  ===  index ? text : destination
  //     )
  //   )
  // }

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
    // return (
    //   pickupLocation.trim() !== "" &&
    //   pickupDate.trim() !== "" &&
    //   dropoffDate.trim() !== "" &&
    //   pickupTime.trim() !== "" &&
    //   dropoffTime.trim() !== "" &&
    //   (destinations.length > 0)
    // );

    return true;
  };

  const data = [
    'Anuradhapura, Alakamanda',
    'Batticaloa, Main Street',
    'Colombo, Fort',
    'Dehiwala, Mount Lavinia',
    'Embilipitiya, Town Center',
    'Fanla, Railway Station',
    'Galle, Fort',
    'Haputale, Hill Station',
    'Ibbagamuwa, Junction',
    'Jaffna, Town',
    'Kandy, Bus Stand',
    'Lahugala, Lagoon',
    'Matara, Weliveriya',
    'Negombo, Bolawalana Town',
    'Omanthai, Road Junction',
    'Pannala, Central Road',
    'Quilon, Peraliya',
    'Ratnapura, Gem Town',
    'Seeduwa, Airport Road',
    'Trincomalee, Kanniya Town',
    'Udugama, Bus Stop',
    'Vavuniya, Main Street',
    'Weligama, Beach',
    'Xylo, Unknown Location',
    'Yala, National Park',
    'Zoysa, Hilltop',
  ];

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (value1) => {
    const value = value1;
    setPickupLocation(value);

    if (value) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setPickupLocation(suggestion);
    setShowSuggestions(false); // Hide suggestions after selecting one
  };
  
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"white"}}>
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
          {/* <View style={{flex: 1}}>
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
          </View> */}
          <View style={{  position: 'relative' }}>
            <TextInput
              placeholder="Enter pick-up location"
              style={{
                fontFamily: "outfit",
                color: "#A4A4A4",
                fontSize: 15,
                width:  600
              }}
              value={pickupLocation}
              onChangeText={handleInputChange}
            />
                 {showSuggestions && (
            <FlatList
              data={suggestions.filter((item) =>
                item.toLowerCase().includes(pickupLocation.toLowerCase())
              )}
              keyExtractor={(item, index) => index.toString()}
              style={{
                position: 'absolute',
                top: 40, // Adjust to place below the input field
                left: 0,
                backgroundColor: '#fff',
                borderColor: '#ccc',
                borderWidth: 1,
                zIndex: 10,
                maxHeight: 150,
                width:300
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSuggestionClick(item)}
                  style={{
                    padding: 10,
                    borderBottomColor: '#eee',
                    borderBottomWidth: 1,
                    zIndex: 20
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
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
            zIndex: -1
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
          {/* Select Destination */}
          {destinations.map((destination, index) => {
            return (
              <View
                key={index} 
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
                  marginTop: 10,
                  zIndex: -9
                }}
              >
                <Ionicons name="location" size={24} color={"black"} />
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', position: 'relative'}}>
                  <TextInput
                    // placeholder="Select Destination"
                    style={{
                      fontFamily: "outfit",
                      color: "#A4A4A4",
                      fontSize: 15,
                      width: '90%',
                      zIndex: -1
                    }}
                    editable={false}
                    value={destinations[index]}
                    // onChangeText={(text) => updateDestinations(text, index)}
                  />
                        {showSuggestions && (
                  <FlatList
                    data={suggestions.filter((item) =>
                      item.toLowerCase().includes(pickupLocation.toLowerCase())
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    style={{
                      position: 'absolute',
                      top: 40, // Adjust to place below the input field
                      left: 0,
                      backgroundColor: '#fff',
                      borderColor: '#ccc',
                      borderWidth: 1,
                      zIndex: 10,
                      maxHeight: 150,
                      width:300
                    }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => handleSuggestionClick(item)}
                        style={{
                          padding: 10,
                          borderBottomColor: '#eee',
                          borderBottomWidth: 1,
                          zIndex: 20
                        }}
                      >
                        <Text>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
                  <Pressable onPress={() => removeDestination(index)}>
                    <Entypo name="minus" size={24} color="black" />
                  </Pressable>
                </View>
              </View>
            )
          })}

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
              marginTop: 10,
              zIndex: -1
            }}
          >
            <Ionicons name="location" size={24} color={"black"} />
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
              <TextInput
                placeholder="Select Destination"
                style={{
                  fontFamily: "outfit",
                  color: "#A4A4A4",
                  fontSize: 15,
                  width: '90%'
                }}
                value={searchDestination}
                onChangeText={setSearchDestination}
              />
              <Pressable onPress={() => { if(searchDestination.length > 0) addDestination(searchDestination) }}>
                  <Entypo name="plus" size={24} color="black" />
              </Pressable>
            </View>
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

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}

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

        {/* Adverticement */}
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}

        {/* Passenger Count */}
        <View style={{flexDirection: "row", justifyContent: 'center', gap: 30, marginTop: 80}}>
          <Pressable style={styles.btn} onPress={() => { setPassengers(Math.max(1, passengers-1)) }}>
            <Entypo name="minus" size={24} color="black" />
          </Pressable>

          <View style={{flexDirection: 'row', gap: 10, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
            <Ionicons name="people-outline" size={24} color="black" />
            <Text>{passengers}</Text>
          </View>

          <Pressable style={styles.btn} onPress={() => { setPassengers(passengers + 1) }}>
            <Entypo name="plus" size={24} color="black" />
          </Pressable>
        </View>

      </ScrollView>

      {/* <PopularVehicles /> */}
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
  btn: {
    backgroundColor: "#FAFAFA",
    padding: 10,
    borderRadius: 15
  }
});
