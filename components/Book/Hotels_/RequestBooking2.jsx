import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";

export default function RequestBooking2({ onNext }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [countryCode, setCountryCode] = useState("US");

  return (
    <View style={styles.container}>


      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
        <View style={styles.remainingProgress}></View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Details of Reservation</Text>
        <Ionicons name="menu-" size={24} color="black" />
      </View>

      {/* Full Name Input */}
      <Text style={styles.label}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter full name"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Contact No Input */}
      <Text style={styles.label}>Contact No</Text>
      <View style={styles.contactContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFlag
          withCallingCode
          withEmoji
          onSelect={(country) => {
            setCountryCode(country.cca2);
          }}
        />
        <TextInput
          style={[styles.input, styles.contactInput]}
          placeholder="+1"
          keyboardType="phone-pad"
          value={contactNo}
          onChangeText={setContactNo}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity onPress={onNext} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  progressBar: {
    flexDirection: "row",
    height: 8,
    borderRadius: 4,
    marginVertical: 10,
  },
  progress: {
    flex: 2 / 3,
    backgroundColor: "#0078A1",
    borderRadius: 4,
  },
  remainingProgress: {
    flex: 1 / 3,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactInput: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#0078A1",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
