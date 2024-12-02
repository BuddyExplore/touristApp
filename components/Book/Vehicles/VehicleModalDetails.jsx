import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { Colors } from "../../../constants/Colors";
  
  export default function VehicleModalDetails({vehicleInfo}) {

    const passengerCount = (type) => {
      switch(type){
        case 'Car':
          return 4
        case 'Van':
          return 8
        case 'Bus':
          return 28
      }
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
            }}
          >
            <Ionicons name="people-outline" size={21} color={"black"} />
            <Text style={styles.text2}>{vehicleInfo.type? passengerCount(vehicleInfo.type): '4'} Passengers</Text>
          </View>
          <Text style={styles.label}>Amenities</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginTop: 10,
            }}
          >
            {vehicleInfo.hasAC && <View style={styles.amenityContainer}>
              <Ionicons name="snow-outline" size={15} color={"black"} />
              <Text style={styles.text1}>Air Conditioned</Text>
            </View>}
            
            {vehicleInfo.hasRadio && <View style={styles.amenityContainer}>
              <Ionicons name="radio-outline" size={15} color={"black"} />
              <Text style={styles.text1}>Radio System</Text>
            </View>}

            {vehicleInfo.hasWifi && <View style={styles.amenityContainer}>
              <Ionicons name="wifi-outline" size={15} color={"black"} />
              <Text style={styles.text1}>Wifi</Text>
            </View>}

            {vehicleInfo.hasSunroof && <View style={styles.amenityContainer}>
              <Ionicons name="car-outline" size={15} color={"black"} />
              <Text style={styles.text1}>Sunroof</Text>
            </View>}
            
          </View>
  
          <Text style={styles.label}>Description</Text>
          <Text style={styles.descriptionTxt}>
            Comfortable vehicle with a professional driver. Safe, reliable, and
            perfect for all your travel needs. Book now for a great experience.
          </Text>
        </ScrollView>
  
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 20
    },
    scrollContainer: {
      flex: 1,
    },
    label: {
      marginTop: 20,
      fontSize: 16,
      color: "black",
      fontWeight: '500',
    },
    descriptionTxt: {
      marginTop: 8,
      fontSize: 14,
      color: "black",
      lineHeight: 20
    },
    text1: {
      color: "black",
      fontSize: 12,
      marginLeft: 5,
    },
    text2: {
      color: "black",
      fontSize: 14,
    },
    amenityContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 0.5,
      borderColor: "black",
      paddingVertical: 2.5,
      paddingHorizontal: 10,
      borderRadius: 30,
      backgroundColor: '#FAFAFA'
    },
   
  });
  