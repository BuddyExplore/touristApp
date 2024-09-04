import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { useNavigation } from "expo-router";

  
export default function ReviewModalDetails({ reviews = [] }) {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('RequestBooking1');
  };


  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <Text style={styles.errorText}>No reviews available.</Text>;
  }

  return (
    <View style={styles.container}>
    
      <Text style={styles.header}>{reviews.length} Reviews</Text>
      <ScrollView>
        {reviews.map((review, index) => (
          <View key={index} style={styles.reviewContainer}>
            <Image
              source={require("../../../assets/images/Home/profile.png")}
              style={styles.profileImg}
            />
            <View style={styles.reviewContent}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{review.name}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Image
                source={require("../../../assets/images/Book/4star.png")}
                style={styles.ratingImg}
              />
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  header: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  reviewContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  reviewContent: {
    marginLeft: 15,
    flex: 1,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  reviewDate: {
    fontSize: 14,
    color: "grey",
  },
  ratingImg: {
    width: 70,
    height: 15,
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 12,
    color: "black",
  },
  errorText: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
 
});
