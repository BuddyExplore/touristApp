import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const shopsList = [
  { name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.png'), city: 'Kandy'  },
  { name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.png'), city: 'Colombo'  },
  { name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/RoyalBatiks.png'), city: 'Anuradhapura' },
  { name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.png'), city: 'Kandy'  },
  { name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.png'), city: 'Colombo'  },
  { name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/RoyalBatiks.png'), city: 'Anuradhapura' },
];

const ShopInfo = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const shop = shopsList[id];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.ImgContainer}>
          <Image source={shop.img} style={styles.shopImg} />
        </View>
        <View style={styles.shopContainer}>
          <Text style={styles.shopName}>{shop.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 10}}>
            <Ionicons name="location-outline" size={24} color={'black'} />
            <Text style={styles.subText}> {shop.where}</Text>
          </View>
        </View>
      </View>

      {/* Buttons positioned on top of the image */}
      <TouchableOpacity style={styles.backButton} onPress={() => { router.back()}}>
        <Ionicons name="arrow-back-outline" size={22} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareButton}>
        <Ionicons name="share-social" size={22} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-vertical" size={22} color={'black'} />
      </TouchableOpacity>




    </View>
  )
}

export default ShopInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  ImgContainer: {
    height: 350
  },
  shopImg: {
    width: '100%',
    height: '100%',
  },
  shopContainer: {
    padding: 20,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  backButton: {
    position: 'absolute',
    top: 23,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  shareButton: {
    position: 'absolute',
    top: 23,
    right: 60,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  moreButton: {
    position: 'absolute',
    top: 23,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
})