import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useRouter } from 'expo-router';

const BookingTab = ({ bookings, onUpcomingPress }) => (
  <ScrollView style={styles.tabContainer}>
    {Object.keys(bookings).map((status) => (
      <View key={status}>
        <Text style={styles.sectionHeader}>{status}</Text>
        {bookings[status].map((booking, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bookingItem}
            onPress={status === 'Upcoming' ? () => onUpcomingPress(booking) : null}
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
        status: 'Booked',
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
      <BookingTab
        bookings={vehiclesBookings}
        onUpcomingPress={() => router.push('./bookingDetails')}
      />
    ),
    tourGuides: () => <BookingTab bookings={tourGuidesBookings} />,
    hotels: () => <BookingTab bookings={hotelsBookings} />,
    items: () => <BookingTab bookings={itemsBookings} />,
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
