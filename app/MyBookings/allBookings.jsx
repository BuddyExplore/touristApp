import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useRouter }from 'expo-router';
import axios from 'axios';
import {Urls} from "../../constants/Urls"
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VehicleBookingTab = ({ bookings, onUpcomingPress, onItemReserved, onItemPicked }) => {
  const router = useRouter();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [reloader, setReloader] = useState(1)

  const fetchItems = async () => {
    setLoading(true);
    console.log("Here")
    try {
      const response = await axios.get(
        `${Urls.SPRING}/api/Booking/Vehicle/touristBookings/321`  //change 321 to actual id
      );
      setData(response.data.content);
      console.log(response.data.content)
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
    setLoading(false)}
  };


  useFocusEffect(
    React.useCallback(() => {
      fetchItems(); // Fetch data when the screen gains focus
    }, [])
  );

  useEffect(() => {
    // Initial data fetch when the component is mounted
    fetchItems();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setReloader(reloader + 1) // Reload data when the screen comes into focus
    }, []) // Empty array ensures it only runs when the screen is focused
  );

  
  const bookingStatus = (currentStatus) => {
    switch (currentStatus) {
      case 0:
        return <Text style={{ color: '#337dff', fontSize: 12 }}>Requested</Text>;
      case 1:
        return <Text style={{ color: '#337dff', fontSize: 12 }}>Accepted</Text>;
      case 2:
        return <Text style={{ color: '#337dff', fontSize: 12 }}>Dispatched</Text>;
      default:
        return <Text style={{ color: '#337dff', fontSize: 12 }}>Ongoing</Text>;
    }
  };
  
  const handleShowBooking = (status, bookingId, driverId, pickup_time, dropoff_time, pickup_location) =>  {
    if(status === 0){
    router.push({
      pathname: './bookingDetails',
      params: {
          bookingId,
          driverId,
          pickup_time,
          dropoff_time,
          pickup_location
      }
    });
  }else if(status === 1){
    router.push({
      pathname: './bookingAccepted',
      params: {
          bookingId,
          driverId,
          pickup_time,
          dropoff_time,
          pickup_location
      }
    });
  }else if(status === 2){
    router.push({
      pathname: './driverDispatched',
      params: {
          bookingId,
          driverId,
          pickup_time,
          dropoff_time,
          pickup_location
      }
    });
  }


};
  
  if (loading) {
    return (
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Text>
    );
  }

  return(
  <ScrollView style={styles.tabContainer}>
          <View style={{paddingVertical: 20, paddingLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Upcoming
            </Text>
          </View>
            {!data && <Text style={{color : 'grey', margin: 'auto', marginTop: 30}}>No upcoming bookings</Text>}
            {data && data.map((booking) => (
          <TouchableOpacity
            key={booking.id}
            style={styles.bookingItem}
            onPress={() => handleShowBooking(booking.status, booking.id, booking.driverId,`${booking.pickUpDate} at ${booking.pickUpTime}`, `${booking.dropOffDate} at ${booking.dropOffTime}`, booking.pickUpLocation)}
          >
            <Image source={{ uri: "https://example.com/image.png" }} style={styles.image} />
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingTitle}>{booking.fullName}</Text> 
              <Text style={styles.subText}>Pick-up: {booking.pickUpLocation}</Text> 
              <Text style={styles.dateText}>
                {booking.pickUpDate} at {booking.pickUpTime}
              </Text> 
              <Text style={styles.dateText}>
                Drop-off: {booking.dropOffDate} at {booking.dropOffTime}
              </Text> 
              <Text style={styles.subText}>{bookingStatus(booking.status)}</Text>
            </View>
          </TouchableOpacity>
        ))}
    
  </ScrollView>
  )
};


const BookingTab = ({ bookings, onUpcomingPress, onItemReserved, onItemPicked }) => (
  <ScrollView style={styles.tabContainer}>
    {Object.keys(bookings).map((status) => (
      <View key={status}>
        <Text style={styles.sectionHeader}>{status}</Text>
        {bookings[status].map((booking, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bookingItem}
            onPress={
              status === 'Upcoming' 
                ? () => onUpcomingPress(booking) 
                : status === 'Reserved' 
                ? () => onItemReserved(booking) 
                : status === 'Picked' 
                ? () => onItemPicked(booking) 
                : status === 'Completed' 
                ? () => onItemReserved(booking) 
                : status === 'Ongoing' 
                ? () => onItemPicked(booking) 
                : null
            }
          >
            <Image source={booking.image} style={styles.image} />
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingTitle}>{booking.title}</Text>
              <Text style={styles.subText}>{booking.subText}</Text>
              <Text style={styles.dateText}>{booking.date}</Text>
              <Text style={styles[booking.statusStyle]}>{booking.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    ))}
  </ScrollView>
);

const allBookings = () => {
  const router = useRouter();
  const initialLayout = { width: Dimensions.get('window').width };

  const vehiclesBookings = {
    Ongoing: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Toyota Coach',
        subText: 'Amal Perera',
        date: 'Aug 09 - Aug 11',
        status: 'Driver Dispatched',
        statusStyle: 'statusDispatched',
      },
    ],
    Upcoming: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Toyota Coach',
        subText: 'Amal Perera',
        date: 'Aug 09 - Aug 11',
        status: 'Requested',
        statusStyle: 'statusRequested',
      },
    ],
    Completed: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Nissan Clipper',
        subText: 'Kasun Gunawardene',
        date: 'Aug 09 - Aug 11',
        status: 'Completed',
        statusStyle: 'statusCompleted',
      },
    ],
  };

  const tourGuidesBookings = {
    Ongoing: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'D.T.A. Gunasekara',
        subText: 'Ruwanwelisaya',
        date: 'Aug 09',
        status: 'Dispatched',
        statusStyle: 'statusDispatched',
      },
    ],
    Completed: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'B.D. Sivalingam',
        subText: 'Mihintale',
        date: 'Aug 07',
        status: 'Completed',
        statusStyle: 'statusCompleted',
      },
    ],
  };

  const hotelsBookings = {
    Ongoing: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Wilpattu Rest',
        subText: 'Wilpattu',
        date: 'Aug 09 - Aug 11',
        status: 'Ongoing',
        statusStyle: 'statusDispatched',
      },
    ],
    Completed: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Holiday Inn',
        subText: 'Hikkaduwa',
        date: 'Aug 07 - Aug 08',
        status: 'Completed',
        statusStyle: 'statusCompleted',
      },
    ],
  };

  const itemsBookings = {
    Reserved: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Batik Shirt',
        subText: 'Gampaha',
        date: 'USD 45.00',
        status: 'Reserved',
        statusStyle: 'statusDispatched',
      },
    ],
    Picked: [
      {
        image: require('../../assets/images/Book/Hotels/Hotel1.jpg'),
        title: 'Batik Shirt',
        subText: 'Gampaha',
        date: 'USD 45.00',
        status: 'Picked',
        statusStyle: 'statusCompleted',
      },
    ],
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'vehicles', title: 'Vehicles' },
    { key: 'tourGuides', title: 'Tour Guides' },
    { key: 'hotels', title: 'Hotels' },
    { key: 'items', title: 'Items' },
  ]);

  const renderScene = SceneMap({
    vehicles: () => (
      <VehicleBookingTab
        bookings={vehiclesBookings}
        onUpcomingPress={() => router.push('./bookingDetails')}
      />
    ),
    tourGuides: () => <BookingTab bookings={tourGuidesBookings} />,
    hotels: () =><BookingTab
    bookings={hotelsBookings}
    onItemReserved={() => router.push('./Hotels/completed')}
    onItemPicked={() => router.push('./Hotels/ongoing')}
  />,
    items: () => (
      <BookingTab
        bookings={itemsBookings}
        onItemReserved={() => router.push('./Items/reserved')}
        onItemPicked={() => router.push('./Items/picked')}
      />
    ),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#0A89FF' }}
            style={{ backgroundColor: '#0A89FF' }}
            renderLabel={({ route, focused }) => (
              <Text style={{ 
                color: focused ? '#0A89FF' : '#000000', 
                fontWeight: 'bold' 
              }}>
                {route.title}
              </Text>
            )}
          />
        )}
        
      />

    </View>
  );
};

export default allBookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginLeft: 20,
    marginTop: 10,
  },
  bookingItem: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  bookingInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  dateText: {
    fontSize: 12,
    color: '#aaa',
  },
  statusDispatched: {
    fontSize: 12,
    color: '#0A89FF',
    marginTop: 5,
  },
  statusCompleted: {
    fontSize: 12,
    color: '#28a745',
    marginTop: 5,
  },
  statusRequested: {
    fontSize: 12,
    color: '#0A89FF',
    marginTop: 5,
  },
});
