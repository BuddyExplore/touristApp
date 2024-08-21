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
  
  export default function VehicleModalDetails() {

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
            <Ionicons name="people-outline" size={20} color={"black"} />
            <Text style={styles.text2}>28 Passengers</Text>
          </View>
          <Text style={styles.label}>Amenities</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
            }}
          >
            <View style={styles.amenityContainer}>
              <Ionicons name="snow-outline" size={15} color={"black"} />
              <Text style={styles.text1}>Air Conditioned</Text>
            </View>
  
            <View style={styles.amenityContainer}>
              <Ionicons name="radio-outline" size={15} color={"black"} />
              <Text style={styles.text1}>Radio System</Text>
            </View>
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
      paddingHorizontal: 20,
    },
    scrollContainer: {
      flex: 1,
    },
    label: {
      marginTop: 20,
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
    },
    descriptionTxt: {
      marginTop: 5,
      fontSize: 14,
      color: "black",
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
      paddingHorizontal: 5,
      borderRadius: 30,
    },
   
  });
  