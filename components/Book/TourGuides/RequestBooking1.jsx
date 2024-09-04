import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RequestBooking1({ onNext }) {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progress}></View>
        <View style={styles.remainingProgress}></View>
      </View>

      <Text style={styles.title}>How many passengers?</Text>
      <Text style={styles.subtitle}>
        How many passengers will be traveling including yourself?
      </Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => setCount(count > 1 ? count - 1 : 1)}>
          <Ionicons
            name="remove"
            size={22}
            color="black"
            style={styles.closeButton}
          />
        </TouchableOpacity>
        <Text style={styles.counter}>{count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Ionicons
            name="add"
            size={22}
            color="black"
            style={styles.closeButton}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>
        Note : Number of passengers cannot exceed 28.
      </Text>
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
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  progressBar: {
    flexDirection: "row",
    height: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  progress: {
    flex: 1/2,
    backgroundColor: "#0078A1",
    borderRadius: 4,
  },
  remainingProgress: {
    flex: 1 / 2,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  counterButton: {
    fontSize: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#0078A1",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
