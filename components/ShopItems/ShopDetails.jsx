import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';

const ShopDetails = ( { shop } ) => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.shopContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
              <Text style={styles.shopName}>{shop.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <AntDesign name="star" size={24} color="#FE8D23" />
                <Text style={{fontSize: 20, fontWeight: 500}} >4.4</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, paddingVertical: 7, paddingHorizontal: 10, borderWidth: 1.3, borderColor: '#007BFF', borderRadius: 10 }}>
                <Entypo name="map" size={14} color={Colors.PRIMARY} />
                <Text style={{fontSize: 12, color: Colors.PRIMARY}}>MapView</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 10}}>
            <Ionicons name="location-outline" size={22} color={'black'} />
            <Text style={styles.subText}>215 , Bauddhaloka Mawatha, Colombo</Text>
          </View>
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 20, gap: 8}}>
          <Text style={{fontSize: 18, fontWeight: 600}}>Description</Text>
          <Text style={{fontSize: 14}}>
            Laksala offers authentic local souvenirs and handcrafted items, 
            perfect for tourists seeking unique mementos and cultural treasures.
          </Text>
        </View>
      </View>
  )
}

export default ShopDetails

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    // marginTop: -20
  },
  shopName: {
    fontSize: 26,
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
  subText: {
    color: '#8C8C8C',
    fontSize: 18,
    fontWeight: '600'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  }
})