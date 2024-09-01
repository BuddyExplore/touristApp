import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function PlacesListItem({ placeInfo, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={styles.rowContainer}>
          <Image source={placeInfo.img} style={styles.image} />
          <View>
            {/* Wrap text content in a <Text> component */}
            <Text style={styles.mainText}>{placeInfo.name}</Text>
            <Text style={styles.subText}>{placeInfo.available} Tour guides available</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  touchable: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
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
