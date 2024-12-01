import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [stayData, setStayData] = useState([]);
  const [eatData, setEatData] = useState([]);

  useEffect(() => {
    // Fetch travel plan data
    fetch('http:///192.168.8.178:8000/api/location', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: "Galle",
        budget: 300,
        duration: 3,
        interests: ["religious", "Viewpoints"],
      }),
    })
      .then((response) => {
        console.log('Travel Plan Response:', response); // Log the raw response
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log('Travel Plan Data:', result); // Log the response data
        setData(result || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching travel plan:', error.message); // Log the error message
        setLoading(false);
      });

    // Fetch stay data
    fetch('http://192.168.8.178:8000/api/stay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: 'Tangalle', // Replace with dynamic value
      }),
    })
      .then((response) => {
        console.log('Stay Response:', response); // Log the raw response
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log('Stay Data:', result); // Log the response data
        setStayData(result.accommodations || []);
      })
      .catch((error) => console.error('Error fetching stay data:', error.message));

    // Fetch eat data
    fetch('http://192.168.8.178:8000/api/food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: 'Galle', // Replace with dynamic value
      }),
    })
      .then((response) => {
        console.log('Eat Response:', response); // Log the raw response
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log('Eat Data:', result); // Log the response data
        setEatData(result.food || []);
      })
      .catch((error) => console.error('Error fetching eat data:', error.message));
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Galle</Text>
      <Text style={styles.subHeading}>Southern Province, Sri Lanka</Text>
      <Text style={styles.description}>
        The Southern Province of Sri Lanka is known for its rich cultural heritage and breathtaking natural landscapes...
      </Text>

      {/* Travel Plan Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel Plan</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            item && (
              <View style={styles.planItem}>
                <Text style={styles.planDay}>Day {item.Day}</Text>
                {item.Locations?.map((location, index) => (
                  <View key={index} style={styles.locationItem}>
                    <Text style={styles.locationTitle}>{location.Title}</Text>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={styles.horizontalScroll}
                    >
                      {[location.img1, location.img2, location.img3].filter(Boolean).map((img, i) => (
                        <Image key={i} source={{ uri: img }} style={styles.image} />
                      ))}
                    </ScrollView>
                    <Text>{location.Description}</Text>
                  </View>
                ))}
              </View>
            )
          }
        />
      </View>

      {/* Stay Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Stay</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stayData.map((item, index) => (
            <View key={index} style={styles.card}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
              >
                {[item.img1, item.img2, item.img3].filter(Boolean).map((img, i) => (
                  <Image key={i} source={{ uri: img }} style={styles.cardImage} />
                ))}
              </ScrollView>
              <Text style={styles.cardTitle}>{item.Name}</Text>
              <Text>{item.Location}</Text>
              <Button title="Book now" onPress={() => alert('Booking')} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Eat Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Eat</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {eatData.map((item, index) => (
            <View key={index} style={styles.card}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
              >
                {[item.img1, item.img2, item.img3].filter(Boolean).map((img, i) => (
                  <Image key={i} source={{ uri: img }} style={styles.cardImage} />
                ))}
              </ScrollView>
              <Text style={styles.cardTitle}>{item.Name}</Text>
              <Text>{item.Location}</Text>
              <Text>{item.Budget}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subHeading: { fontSize: 16, color: 'gray', marginBottom: 16 },
  description: { fontSize: 14, marginBottom: 16 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  planItem: { marginBottom: 16 },
  planDay: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  locationItem: { marginBottom: 16 },
  locationTitle: { fontSize: 16, fontWeight: 'bold' },
  horizontalScroll: { marginVertical: 8 },
  image: { width: 300, height: 200, borderRadius: 8, marginRight: 8 },
  card: { width: 200, marginRight: 16, borderWidth: 1, borderRadius: 8, padding: 8 },
  cardImage: { width: 200, height: 120, borderRadius: 8, marginRight: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Result;
