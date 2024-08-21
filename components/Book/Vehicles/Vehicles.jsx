import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import PopularVehicles from "./PopularVehicles";
import VehList from "./VehList";
import VehicleSearchFilter from "./VehicleSearchFilter";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";

const Vehicles = () => {
  const [searchPressedBtn, setSearchPressedBtn] = useState(false);

  const handleSearch = () => {
    setSearchPressedBtn(!searchPressedBtn);
  };
  return (
    <View>
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <VehList />
        </ScrollView>
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
