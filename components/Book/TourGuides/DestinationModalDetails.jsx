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

export default function DestinationModalDetails({ guideInfo }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.bioTitle}>Description</Text>
        <Text style={styles.bioText}>
          Isurumuniya in Anuradhapura, Sri Lanka, is an ancient rock temple
          renowned for its stunning carvings, including the famous lovers
          sculpture.
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View style={styles.nextButtonContainer}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  gap: 10,
                }}
              >
                <Ionicons name="map-outline" size={20} color={Colors.PRIMARY} />
                <Text style={styles.buttonTxt}>MapView</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: "space-between", 
  },
  scrollContainer: {
    flex: 1, 
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

  nextButtonContainer: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    height: 40,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginLeft: 20,
  },
  buttonTxt: {
    fontSize: 16,
    color: Colors.PRIMARY,
  },
});
