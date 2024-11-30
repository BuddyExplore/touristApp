import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Button, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { useNavigation } from "expo-router";

  
export default function ReviewModalDetails({ reviews = [] }) {
  const [ showAll, setShowAll ] = useState(false);

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <Text style={styles.errorText}>No reviews available.</Text>;
  }

  const handleViewMore = () => {
    setShowAll(true);
  }

  const handleShowLess= () => {
    setShowAll(false);
  }

  const displayReviews = showAll ? reviews : reviews.slice(0, 2);
  
  return (
    <View style={styles.container}>
    
      <Text style={styles.header}>{reviews.length} Reviews</Text>
      {showAll &&  
        <Pressable style={styles.showLessBtn} onPress={handleShowLess}>
          <Text style={{fontSize: 14, fontWeight: '500', color: Colors.PRIMARY}} >Show less</Text>
        </Pressable>
      }
      <ScrollView style={{backgroundColor: '#FAFAFA', borderRadius: 32, padding: 10}} showsVerticalScrollIndicator={false}>
        {displayReviews.map((review, index) => (
          <View key={index} style={styles.reviewContainer}>
            <View style={styles.reviewContent}>
              <Image
                source={require("../../../assets/images/Home/profile.png")}
                style={styles.profileImg}
              />

              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{review.name}</Text>
                <Image
                  source={require("../../../assets/images/Book/4star.png")}
                  style={styles.ratingImg}
                />
              </View>
              
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
            <View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          </View>
        ))}

      {!showAll &&
        <Pressable style={styles.viewMoreBtn} onPress={handleViewMore}>
          <Text style={{fontSize: 12, color: Colors.PRIMARY}}>View more</Text>
        </Pressable>
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
    flex: 1,
  },
  header: {
    fontSize: 17,
    fontWeight: "500",
    color: "black",
    marginBottom: 20,
  },
  reviewContainer: {
    marginBottom: 24,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  reviewContent: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flex: 1,
  },
  reviewHeader: {
    marginLeft: 10,
    marginBottom: 5,
  },
  reviewerName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
  reviewDate: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    fontSize: 10,
    color: "#9E9E9E",
  },
  ratingImg: {
    width: 50,
    height: 12,
    marginBottom: 5,
  },
  reviewText: {
    marginLeft: 15,
    fontSize: 12,
    color: "black",
    lineHeight: 15
  },
  errorText: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  viewMoreBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  showLessBtn: {
    marginTop: -15,
    marginBottom: 5,
    marginRight: 10,
    alignSelf: 'flex-end'
  },
 
});
