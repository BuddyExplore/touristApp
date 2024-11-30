import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlacesListItem({ placeInfo, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={styles.rowContainer}>
          <Image source={placeInfo.img} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>{placeInfo.name}</Text>
            <Text style={styles.subText}>{placeInfo.available} Tour guides available</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={16} color={"#878787"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'white',
    padding: 10, 
    borderRadius: 10, 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1, 
  },
  mainText: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 5,
    color: 'black',
    fontSize: 12,
  },
});
