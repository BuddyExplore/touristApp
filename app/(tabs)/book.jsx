import { View, Text, TouchableOpacity,  StyleSheet, ScrollView, Image  } from 'react-native'
import React,{ useState } from 'react'
import { useRouter } from 'expo-router';
import Header from '../../components/Book/Header';
import Card from '../../components/Book/Card';
import Vehicles from '../../components/Book/Vehicles/Vehicles';
import Tourguides from '../../components/Book/TourGuides/Tourguides';
import Hotels from '../../components/Book/Hotels/Hotels'

export default function book() {

  const router = useRouter();
  
  const [isComponentOneVisible, setIsComponentOneVisible] = useState(true);
  const [toggleVehicle, settoggleVehicle] = useState(true);
  const [toggleTourGuide, settoggleTourGuide] = useState(false);
  const [toggleHotel, settoggleHotel] = useState(false);
  const [toggleActivity, settoggleActivity] = useState(false);

  const handleMessageFromChild = (msg) => {
    if(msg === 1){
      settoggleVehicle(true)
      settoggleTourGuide(false)
      settoggleHotel(false)
      settoggleActivity(false)
    } else if(msg === 2){
      settoggleTourGuide(true)
      settoggleVehicle(false)
      settoggleHotel(false)
      settoggleActivity(false)
    } else if(msg === 3){
      settoggleHotel(true)
      settoggleVehicle(false)
      settoggleTourGuide(false)
      settoggleActivity(false)
    } else {
      settoggleActivity(true)
      settoggleHotel(false)
      settoggleVehicle(false)
      settoggleTourGuide(false)
      
    }
  };

  // const handleBackStep = () => {
  //   navigation.goBack(); // Or navigate to the specific screen if needed
  // };

  return (
    
    // <View style={styles.container}>
    //   <Text>Book</Text>
    //   <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Vehicles/search')}>
    //     <Text>Vehicles & Drivers</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Tourguides/search')}>
    //     <Text>Tour Guides</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Hotels/search')}>
    //     <Text>Hotels</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Items/discover')}>
    //     <Text>Items from Shops</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Activities/search')}>
    //     <Text>Activities</Text>
    //   </TouchableOpacity>
 
    // </View>

    <ScrollView style={{flex:1,backgroundColor: "white", paddingHorizontal: 15}}>

      <TouchableOpacity onPress={() => router.push('/Booking/Vehicles/search')} style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: "#F3F3F3", paddingVertical: 25, paddingHorizontal: 25, borderRadius: 30}}>
        <View>
          <Image style={{height: 70, width: 70}} source={require('../../assets/images/BookingCard/vehicle.png')} />
        </View>

        <View style={{ marginLeft: 8, flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 700, marginBottom: 2}}>Vehicles & drivers</Text>
            <Text style={{fontSize: 12, flexWrap: "wrap"}}>Book vehicles with drivers who can
            drive you to your destination</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Booking/Tourguides/search')} style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: "#F3F3F3", paddingVertical: 25, paddingHorizontal: 25, borderRadius: 30}}>
        <View>
          <Image style={{height: 70, width: 70}} source={require('../../assets/images/BookingCard/guide.png')} />
        </View>

        <View style={{ marginLeft: 8, flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 700, marginBottom: 2}}>Tour Guides</Text>
            <Text style={{fontSize: 12, flexWrap: "wrap"}}>Book experienced tour guides who can
            guide you during your journey</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Booking/Hotels/search')} style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: "#F3F3F3", paddingVertical: 25, paddingHorizontal: 25, borderRadius: 30}}>
        <View>
          <Image style={{height: 70, width: 70}} source={require('../../assets/images/BookingCard/hotel.png')} />
        </View>

        <View style={{ marginLeft: 8, flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 700, marginBottom: 2}}>Hotels</Text>
            <Text style={{fontSize: 12, flexWrap: "wrap"}}>Book comfortable hotels that provide excellent services during your stay</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Booking/Items') } style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: "#F3F3F3", paddingVertical: 25, paddingHorizontal: 25, borderRadius: 30}}>
        <View>
          <Image style={{height: 70, width: 70}} source={require('../../assets/images/BookingCard/shop.png')} />
        </View>

        <View style={{ marginLeft: 8, flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 700, marginBottom: 2}}>Items from Shops</Text>
            <Text style={{fontSize: 12, flexWrap: "wrap"}}>Shop from stores that offer a wide range
            of items for all your needs.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/Booking/Activities/search')} style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: "#F3F3F3", paddingVertical: 25, paddingHorizontal: 25, borderRadius: 30}}>
        <View>
          <Image style={{height: 70, width: 70}} source={require('../../assets/images/BookingCard/activity.png')} />
        </View>

        <View style={{ marginLeft: 8, flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 700, marginBottom: 2}}>Activities</Text>
            <Text style={{fontSize: 12, flexWrap: "wrap"}}>Book exciting activities around the island
            which enhance your travel experience.</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    width: '100%',
    alignItems: 'center',
    paddingTop: 50

  },  
  option: {
    marginTop: 50,
    width: '50%',
    padding: 30,
    borderWidth: 2,
    borderColor: 'black'
  }
})