import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// import VehicleModalDetails from '../../../components/ShopItems/ShopDetails';
// import DriverModalDetails from '../../../components/ShopItems/Reviews';
import Reviews from '../../../components/ShopItems/Reviews';
import { Colors } from '../../../constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ShopDetails from '../../../components/ShopItems/ShopDetails';

const shopsList = [
  {id: 0, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 1, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 2, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
  {id: 3, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 4, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 5, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
];

const itemsList = [
  {id: 0, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 1, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 2, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 3, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 4, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 5, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
];

const reviews = [
  { name: "Alex Thomson", date: "4 months ago", text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional." },
  { name: "Jane Doe", date: "2 weeks ago", text: "The driver was so friendly and the vehicle was in good condition." },
  { name: "Alex Thomson", date: "4 months ago", text: "Excellent service! The vehicle was comfortable, and the driver was punctual and professional." },
  { name: "Jane Doe", date: "2 weeks ago", text: "The driver was so friendly and the vehicle was in good condition." },
];

const ItemInfo = () => {

  const router = useRouter();
  const { id } = useLocalSearchParams();
  const item = itemsList[id];

  const [activeTab, setActiveTab] = useState('Item Description');

  const renderContent = () => {
    switch (activeTab) {
      case 'Item Description':
        return (
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <View style={{paddingTop: 25}}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Description</Text>
            </View>
            <Text style={{marginTop: 12, paddingLeft: 7}}>A stylish and comfortable shirt made from premium cotton, featuring a classic fit, 
              vibrant colors, and durable stitching. Perfect for casual outings or formal events, ensuring 
              both style and comfort.</Text>
          </View>
        );
      case 'Shop Details':
        return <ShopDetails shop={shopsList[0]} />;
      case 'Reviews':
        return <Reviews reviews={reviews} />;
      default:
        return (
          <View style={{flex: 1}}>
            <Text>Description</Text>
            <Text>A stylish and comfortable shirt made from premium cotton, featuring a classic fit, 
              vibrant colors, and durable stitching. Perfect for casual outings or formal events, ensuring 
              both style and comfort.</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.vehicleImgContainer}>
          <Image source={item.img} style={styles.vehicleImg} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.vehicleName}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 10}}>
            <Ionicons name="location-outline" size={24} color={'black'} />
            <Text style={styles.subText}> {item.where}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabPart, activeTab === 'Item Description' && styles.activeTabPart]} onPress={() => setActiveTab('Item Description')}>
          <Text style={[styles.tabText, activeTab === 'Item Description' && styles.activeTabText]}>
            Item Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabPart, activeTab === 'Shop Details' && styles.activeTabPart]} onPress={() => setActiveTab('Shop Details')}>
          <Text style={[styles.tabText, activeTab === 'Shop Details' && styles.activeTabText]}>
            Shop Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabPart, activeTab === 'Reviews' && styles.activeTabPart]} onPress={() => setActiveTab('Reviews')}>
          <Text style={[styles.tabText, activeTab === 'Reviews' && styles.activeTabText]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButtonContainer} onPress={() => router.push("Booking/Items/PaymentMethod")}>
          <Text style={styles.buttonTxt}>Purchase</Text>
        </TouchableOpacity>
      </View>
      
  </View>
  )
}

export default ItemInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  vehicleImgContainer: {
    height: 350
  },
  vehicleImg: {
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    padding: 20,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20
  },
  vehicleName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  subText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#8C8C8C"
  }, 
  tabContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '100%',
    // marginBottom: 10,
    // borderBottomWidth: 2,
    // borderBottomColor: '#ECECEC',
    // marginHorizontal: 10,
  },
  tabPart: {
    width: '33.33%',
    borderBottomWidth: 2,
    paddingVertical: 10,
    borderBottomColor: '#ECECEC',
  },
  activeTabPart: {
    borderBottomColor: Colors.PRIMARY
  },
  tabText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#878787',
  },
  activeTabText: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 23,
    backgroundColor: "white",
    marginHorizontal: 'auto',
    marginBottom: 15
  },
  nextButtonContainer: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 10
  },
  iconStyle: {
    marginLeft: 10,
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  headerTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:40,
    marginTop:15,
  },
  editButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    height: 40,
    width: 170,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: 10,
  },
  editText: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    marginRight: 10,
  },
});