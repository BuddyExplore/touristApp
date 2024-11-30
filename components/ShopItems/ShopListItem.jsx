import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'; // Import Ionicons for the arrowhead
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';


export default function ShopListItem({ shop, shopID, handleClick }) {
  const router = useRouter();
  const BASE_URL = 'http://192.168.8.122:5001/custom-static';
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        // onPress={() => setShowModal(true)}
        onPress={handleClick}
      >
        <View style={styles.rowContainer}>
          {/* <Image source={{uri: `${BASE_URL}${shop.coverImage}`}} style={styles.image} /> */}
          <Image source={shop.img} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>{shop.name}</Text>
            {/* <Text style={styles.subText}>Driver : {shop.driver}</Text> */}
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 1, marginTop: 3}}>
              <SimpleLineIcons name="location-pin" size={10} color="#AFAFAF" />
              <Text style={styles.subText}>{shop.city}</Text>
            </View>
          </View>
          <Ionicons style={{position: 'relative', right: 15}} name="bag-handle-outline" size={22} color={Colors.PRIMARY} />
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
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 90,
    height: 85,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    marginLeft: 10
  },
  mainText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  starImage: {
    width: 70,
    height: 20,
    marginVertical: 5,
  },
  subText: {
    color: '#AFAFAF',
    fontSize: 12,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});
