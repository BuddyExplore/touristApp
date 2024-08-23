import { View, Text, TouchableOpacity,  StyleSheet  } from 'react-native'
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

  const handleBackStep = () => {
    navigation.goBack(); // Or navigate to the specific screen if needed
  };

  return (
    
    <View style={styles.container}>
      <Text>Book</Text>
      <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Vehicles/search')}>
        <Text>Vehicles & Drivers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Tourguides/search')}>
        <Text>Tour Guides</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Hotels/search')}>
        <Text>Hotels</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Items/discover')}>
        <Text>Items from Shops</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push('/Booking/Activities/search')}>
        <Text>Activities</Text>
      </TouchableOpacity>



 
    </View>
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