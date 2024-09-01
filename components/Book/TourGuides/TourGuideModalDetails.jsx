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
  
  export default function TourGuideModalDetails() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="star" size={28} color={"orange"} style={{marginTop: 20,}}/>
            <Text style={styles.label}>4.4</Text>
          </View>
      
          
          <Text style={styles.descriptionTxt}>
          Available on Aug 09, 2023
          </Text>

          <Text style={styles.label}>Bio</Text>
          <Text style={styles.descriptionTxt}>
          Experienced tour guide with 10+ years of expertise in cultural and historical tours, fluent in English and Sinhala, passionate about storytelling
          </Text>

          <Text style={styles.label}>Languages</Text>
          <Text style={styles.descriptionTxt}>
          English, Sinhala, Tamil
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
  