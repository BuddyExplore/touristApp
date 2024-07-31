import { View, Text } from 'react-native'
import React,{ useState } from 'react'
import Header from '../../components/Book/Header';
import Card from '../../components/Book/Card';
import Vehicles from '../../components/Book/Vehicles/Vehicles';
import Tourguides from '../../components/Book/TourGuides/Tourguides';
import Hotels from '../../components/Book/Hotels/Hotels'

export default function book() {
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

  return (
    
    <View>
      <Header />
      <Card optionPressed={handleMessageFromChild} />
      {toggleVehicle && <Vehicles />}
      {toggleTourGuide && <Tourguides />}
      {toggleHotel && <Hotels />}
    </View>
  )
}
