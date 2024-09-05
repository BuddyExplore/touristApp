import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import VehicleModal from "./VehiclesModal1";
import { Ionicons } from "@expo/vector-icons";

export default function PopularVehItems({ prefernce }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (itemName) => {
    if (itemName === 1) {
      setShowModal(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={prefernce.img}
        style={styles.image}
      ></ImageBackground>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setShowModal(true)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>{prefernce.name}</Text>
          <Pressable style={styles.moreButton}>
            <Ionicons name="ellipsis-vertical" size={14} color="black" />
          </Pressable>
          <Image
            source={require("../../../assets/images/Book/4star.png")}
            style={styles.starImage}
          />
          {/*<Text style={styles.subText}> 📍 {prefernce.where}</Text>*/}
        </View>
      </TouchableOpacity>

      {showModal && (
        <VehicleModal
          vehicleInfo={prefernce}
          visibility={showModal}
          closeModal={handleCloseModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  touchable: {
    //width: 130,
    borderRadius: 10,
    overflow: "hidden",
    //backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
  image: {
    width: "100%",
    height: 90,
  },
  textContainer: {
    padding: 10,
    width: 130,
    //backgroundColor: "rgba(0, 0, 0, 0.3)",
    //borderBottomLeftRadius: 10,
    //borderBottomRightRadius: 10,
  },
  mainText: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  moreButton: {
    position: "absolute",
    right: 0,
    top: 13,
    zIndex: 1,
  },
  starImage: {
    width: 70,
    height: 20,
    //marginVertical: 5,
  },
  subText: {
    color: "black",
  },
});
