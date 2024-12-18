import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";

export default function DriverModalDetails({ vehicleInfo }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require("../../../assets/images/Home/profile.png")} style={styles.profileImg} />
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{vehicleInfo.driver}</Text>
            <Image source={require("../../../assets/images/Book/4star.png")} style={styles.ratingImg} />
            <Text style={styles.driverPhone}>077 - 2XXXXXX</Text>
          </View>
        </View>
        <Text style={styles.bioTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Experienced driver with over 10 years on the road, fluent in English and Spanish. Friendly and professional.
        </Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full height
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: "space-between", // Ensure space is distributed between scroll content and buttons
  },
  scrollContainer: {
    flex: 1, // Allows the ScrollView to take up remaining space above the button
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  driverInfo: {
    marginLeft: 15,
  },
  driverName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  ratingImg: {
    width: 100,
    height: 20,
    marginTop: 5,
  },
  driverPhone: {
    color: "grey",
    marginTop: 5,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  bioText: {
    fontSize: 14,
    color: "black",
    marginTop: 5,
    lineHeight: 20,
  },
});
