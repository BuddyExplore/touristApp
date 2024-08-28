import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import VehicleModal from './VehicleModal';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the arrowhead

export default function VehListItem({ prefernce }) {
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
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setShowModal(true)}
      >
        <View style={styles.rowContainer}>
          <Image source={prefernce.img} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>{prefernce.name}</Text>
            {/* <Text style={styles.subText}>Driver : {prefernce.driver}</Text> */}
            <Image
              source={require("../../../assets/images/Book/4star.png")}
              style={styles.starImage}
            />
            <Text style={styles.subText}>{prefernce.where}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.arrowIcon} />
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
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 10,
  },
  touchable: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  mainText: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  starImage: {
    width: 70,
    height: 20,
    marginVertical: 5,
  },
  subText: {
    marginTop: 5,
    color: 'black',
    fontSize: 12,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});
