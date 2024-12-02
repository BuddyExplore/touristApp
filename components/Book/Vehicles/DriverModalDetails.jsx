import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import React , {useState, useEffect} from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import axios from 'axios';
import {Urls} from "../../../constants/Urls"

export default function DriverModalDetails({ driverId }) {

  const [data,setData] = useState();
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    
    const fetchItems = async () => {
      setLoading(true);
      console.log("Here")
      try {
        const response = await axios.get(
          `${Urls.SPRING}/getUser/${driverId}`
        );
        setData(response.data.content);
        console.log(response.data.content)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" , height: 300}}>
        Loading...
      </Text>
    );
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.driverInfoHeader}>Driver Information</Text>
        <View style={styles.header}>
          <Image source={require("../../../assets/images/Home/profile.png")} style={styles.profileImg} />
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{data? data.first_name: 'Jagath'} {data? data.last_name: 'Kumara'}</Text>
            <Image source={require("../../../assets/images/Book/4star.png")} style={styles.ratingImg} />
            <Text style={styles.driverRides}>{data? (data.id)%12+1 : '1'} Rides</Text>
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
    flex: 1, 
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  scrollContainer: {
    flex: 1, 
  },
  driverInfoHeader: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    marginBottom: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 10,
    marginLeft: 10
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
    fontSize: 16,
    fontWeight: "400",
    color: "black",
  },
  ratingImg: {
    width: 100,
    height: 20,
    marginTop: 5,
  },
  driverRides: {
    color: "grey",
    marginTop: 5,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: "500",
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
