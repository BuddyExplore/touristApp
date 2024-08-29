import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import PopularVehicles from "./PopularVehicles";
import VehList from "./VehList";
import VehicleSearchFilter from "./VehicleSearchFilter";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { useRouter } from "expo-router";

const Vehicles = () => {
  const [searchPressedBtn, setSearchPressedBtn] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    setSearchPressedBtn(!searchPressedBtn);
  };
  return (
    <View style={{height: "100%", backgroundColor: "white"}}>
      {!searchPressedBtn && (
        <>
          <VehicleSearchFilter
            searchPressed={handleSearch}
            isSearch={!searchPressedBtn}
          />
          <PopularVehicles />
        </>
      )}

      {searchPressedBtn && (
        <>
        <View contentContainerStyle={styles.Container}>
        <VehList />
        </View>
        </>
      )}
     
    </View>
  );
};

export default Vehicles;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 600, // To prevent content from being hidden behind FAB
  },
});
