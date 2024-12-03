// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   FlatList,
//   Button,
//   ActivityIndicator,
// } from 'react-native';

// const Result = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [stayData, setStayData] = useState([]);
//   const [eatData, setEatData] = useState([]);

//   useEffect(() => {
//     // Fetch travel plan data
//     fetch('http://192.168.194.228:3000/api/location', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         location: "Galle",
//         budget: 300,
//         duration: 3,
//         interests: ["religious", "Viewpoints"],
//       }),
//     })
//       .then((response) => {
//         console.log('Travel Plan Response:', response); // Log the raw response
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((result) => {
//         console.log('Travel Plan Data:', result); // Log the response data
//         setData(result || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching travel plan:', error.message); // Log the error message
//         setLoading(false);
//       });

//     // Fetch stay data
//     fetch('http://192.168.194.228:8000/api/stay', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         location: 'Tangalle', // Replace with dynamic value
//       }),
//     })
//       .then((response) => {
//         console.log('Stay Response:', response); // Log the raw response
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((result) => {
//         console.log('Stay Data:', result); // Log the response data
//         setStayData(result.accommodations || []);
//       })
//       .catch((error) => console.error('Error fetching stay data:', error.message));

//     // Fetch eat data
//     fetch('http://192.168.194.228:8000/api/food', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         location: 'Galle', // Replace with dynamic value
//       }),
//     })
//       .then((response) => {
//         console.log('Eat Response:', response); // Log the raw response
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((result) => {
//         console.log('Eat Data:', result); // Log the response data
//         setEatData(result.food || []);
//       })
//       .catch((error) => console.error('Error fetching eat data:', error.message));
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Galle</Text>
//       <Text style={styles.subHeading}>Southern Province, Sri Lanka</Text>
//       <Text style={styles.description}>
//         The Southern Province of Sri Lanka is known for its rich cultural heritage and breathtaking natural landscapes...
//       </Text>

//       {/* Travel Plan Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Travel Plan</Text>
//         <FlatList
//           data={data}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) =>
//             item && (
//               <View style={styles.planItem}>
//                 <Text style={styles.planDay}>Day {item.Day}</Text>
//                 {item.Locations?.map((location, index) => (
//                   <View key={index} style={styles.locationItem}>
//                     <Text style={styles.locationTitle}>{location.Title}</Text>
//                     <ScrollView
//                       horizontal
//                       showsHorizontalScrollIndicator={false}
//                       style={styles.horizontalScroll}
//                     >
//                       {[location.img1, location.img2, location.img3].filter(Boolean).map((img, i) => (
//                         <Image key={i} source={{ uri: img }} style={styles.image} />
//                       ))}
//                     </ScrollView>
//                     <Text>{location.Description}</Text>
//                   </View>
//                 ))}
//               </View>
//             )
//           }
//         />
//       </View>

//       {/* Stay Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Stay</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {stayData.map((item, index) => (
//             <View key={index} style={styles.card}>
//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 style={styles.horizontalScroll}
//               >
//                 {[item.img1, item.img2, item.img3].filter(Boolean).map((img, i) => (
//                   <Image key={i} source={{ uri: img }} style={styles.cardImage} />
//                 ))}
//               </ScrollView>
//               <Text style={styles.cardTitle}>{item.Name}</Text>
//               <Text>{item.Location}</Text>
//               <Button title="Book now" onPress={() => alert('Booking')} />
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Eat Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Eat</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {eatData.map((item, index) => (
//             <View key={index} style={styles.card}>
//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 style={styles.horizontalScroll}
//               >
//                 {[item.img1, item.img2, item.img3].filter(Boolean).map((img, i) => (
//                   <Image key={i} source={{ uri: img }} style={styles.cardImage} />
//                 ))}
//               </ScrollView>
//               <Text style={styles.cardTitle}>{item.Name}</Text>
//               <Text>{item.Location}</Text>
//               <Text>{item.Budget}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
//   subHeading: { fontSize: 16, color: 'gray', marginBottom: 16 },
//   description: { fontSize: 14, marginBottom: 16 },
//   section: { marginBottom: 24 },
//   sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   planItem: { marginBottom: 16 },
//   planDay: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
//   locationItem: { marginBottom: 16 },
//   locationTitle: { fontSize: 16, fontWeight: 'bold' },
//   horizontalScroll: { marginVertical: 8 },
//   image: { width: 300, height: 200, borderRadius: 8, marginRight: 8 },
//   card: { width: 200, marginRight: 16, borderWidth: 1, borderRadius: 8, padding: 8 },
//   cardImage: { width: 200, height: 120, borderRadius: 8, marginRight: 8 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
//   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });

// export default Result;

// hard coded page

import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const Result = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second delay
    const timer = setTimeout(() => setLoading(false), 5000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }


  const data = [
    {
      Day: 1,
      Locations: [
        {
          Title: "Sea Turtle Farm Galle Mahamodara",
          Description: "Welcome to Sea Turtle Hatchery - Mahamodara. We rescue turtles who are in danger of losing their lives to the fishing industry whether they are caught in nets or hunted for meat. We currently have 40 turtles, including 4 types of turtle. All are welcome to come and visit to see and learn about Tara turtles here in Sri Lanka.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/10/a9/9e/20170423105508-img-2392.jpg?w=1200&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/10/a9/9c/20170423110301-img-2421.jpg?w=1200&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a3/3f/05/20180414-124014-largejpg.jpg?w=1000&h=-1&s=1",
        },
        {
          Title: "Galle Fort",
          Description: "Galle, in southern Sri Lanka, boasts a rich history marked by Dutch influence evident in its World Heritage Site, the Dutch Fort. This strategic emporium of foreign trade has ancient roots, possibly dating back to biblical times as the city of Tarshish. Legend has it that the town derived its name from a Portuguese fleet's accidental encounter, inspired by the crowing of a cock ('Galo' in Portuguese), or possibly from the abundance of rocks ('Gala' in Sinhala) in its harbor.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/b8/2d/galle.jpg?w=1200&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1100&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/e0/41/the-fantastic-place-you.jpg?w=800&h=-1&s=1",
        },
      ],
    },
    {
      Day: 2,
      Locations: [
        {
          Title: "Hikkaduwa Beach",
          Description: "Hikkaduwa Beach, located on the southwestern coast of Sri Lanka, is a tropical haven renowned for its vibrant coral reefs and golden sands. This coastal gem has been a cherished destination for travelers since the 1960s, gaining fame as one of the country's first surfing hotspots. The name 'Hikkaduwa' is thought to have Sinhala origins, with 'Hikka' meaning sword and 'Duwa' meaning island, possibly referencing the shape of the area or an ancient local legend. Beyond its stunning shoreline, Hikkaduwa is a bustling hub of marine biodiversity, offering visitors a chance to explore a living coral sanctuary and swim alongside colorful schools of fish.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e9/d8/03/caption.jpg?w=1200&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e7/8d/2a/roice-car-tours.jpg?w=800&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fb/0e/76/getlstd-property-photo.jpg?w=800&h=-1&s=1",
        },
        {
          Title: "Handunugoda Tea Estate",
          Description: "Handunugoda Tea Estate is a serene haven in Ahangama, renowned for its unique blend of tradition and innovation in tea cultivation. Visitors can explore the lush plantations, learn about the intricate tea-making process, and taste the estate's signature varieties.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b9/d8/c0/plantation.jpg?w=1200&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/59/f7/d7/20180317-055139-largejpg.jpg?w=1200&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2c/82/99/caption.jpg?w=1200&h=-1&s=1",
        },
        {
          Title: "Mirissa Beach",
          Description: "Mirissa Beach is a vibrant and picturesque coastal retreat on Sri Lanka's southern shoreline. Known for its soft golden sands, calm waters, and lush palm-fringed scenery, it's a perfect destination for relaxation and marine activities.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/96/58/df/plaz-z-jizniho-vybezku.jpg?w=1200&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4b/06/49/mirissa-beach.jpg?w=700&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/49/55/36/mirissa-154-km-95-miles.jpg?w=500&h=-1&s=1",
        },
      ],
    },
    {
      Day: 3,
      Locations: [
        {
          Title: "Bentota Beach",
          Description: "Bentota Beach offers a tranquil and picturesque escape with its serene golden sands and calm waters. This coastal paradise is perfect for sunbathing, water sports, and unforgettable sunsets.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4e/dc/bc/beach.jpg?w=900&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ea/3c/05/sunset-in-srilanka.jpg?w=1100&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/cb/6a/d2/bentota-beach.jpg?w=1200&h=-1&s=1",
        },
        {
          Title: "Bundala National Park",
          Description: "Bundala National Park is an internationally recognized haven for migratory water birds. Home to 197 bird species, including greater flamingos, the park also features crocodiles, elephants, and lush forests.",
          img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/15/59/37/whistling-ducks.jpg?w=1200&h=-1&s=1",
          img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ff/f5/f7/bundala-national-park.jpg?w=1200&h=-1&s=1",
          img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d0/17/4f/wetland-tourism-a-great.jpg?w=1200&h=-1&s=1",
        },
      ],
    },
  ];
  

  const stayData = [

    {
      Name: 'Jetwing Saman Villas',
      Location: 'Bentota',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'CoCoBay Unawatuna',
      Location: 'Unawatuna',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/12/4d/15/cocobay-unawatuna.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/12/4d/15/cocobay-unawatuna.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/12/4d/15/cocobay-unawatuna.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'Shangri-La Hambantota',
      Location: 'Hambanthota',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8f/bc/d4/shangri-la-hambantota.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8f/bc/d4/shangri-la-hambantota.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8f/bc/d4/shangri-la-hambantota.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'Cinnamon Bentota Beach',
      Location: 'Bentota',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e6/40/75/cinnamon-bentota-beach.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e6/40/75/cinnamon-bentota-beach.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e6/40/75/cinnamon-bentota-beach.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'Jetwing Lighthouse',
      Location: 'Galle',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'Taj Bentota Resort & Spa',
      Location: 'Bentota',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/5a/1e/facade.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/5a/1e/facade.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/5a/1e/facade.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'Le Grand Galle',
      Location: 'Galle',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3a/10/2a/pool-area.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3a/10/2a/pool-area.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3a/10/2a/pool-area.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'DoubleTree by Hilton Weerawila Rajawarna Resort',
      Location: 'Weerawila',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/bb/2b/39/exterior.jpg?w=1100&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/bb/2b/39/exterior.jpg?w=1100&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/bb/2b/39/exterior.jpg?w=1100&h=-1&s=3',
    },
    {
      Name: 'The Spice House Mirissa',
      Location: 'Mirissa',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/2d/45/36/the-spice-house-mirissa.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/2d/45/36/the-spice-house-mirissa.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/2d/45/36/the-spice-house-mirissa.jpg?w=1200&h=-1&s=3',
    },
    {
      Name: 'Radisson Blu Resort Galle',
      Location: 'Galle',
      img1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ca/e1/c4/amari-galle-sri-lanka.jpg?w=1200&h=-1&s=1',
      img2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ca/e1/c4/amari-galle-sri-lanka.jpg?w=1200&h=-1&s=2',
      img3: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ca/e1/c4/amari-galle-sri-lanka.jpg?w=1200&h=-1&s=3',
    },
  ];
  

  const eatData = [
    {
      Name: "Ceylon Excel",
      Location: "Tangalle",
      Budget: "low",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
    },
    {
      Name: "Chill House Restaurant",
      Location: "Tangalle",
      Budget: "low",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/2a/0d/c2/6f/chill-house-tangalle.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/2a/0d/c2/6f/chill-house-tangalle.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/2a/0d/c2/6f/chill-house-tangalle.jpg",
    },
    {
      Name: "Lolami Café",
      Location: "Mirissa",
      Budget: "high",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/2b/d5/10/49/tropical-vibes.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/2b/d5/10/49/tropical-vibes.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/2b/d5/10/49/tropical-vibes.jpg",
    },
    {
      Name: "Catch99 at Naomis Restaurant and Sushi Bar",
      Location: "Weligama",
      Budget: "high",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
    },
    {
      Name: "The Natural Earth Company",
      Location: "Weligama",
      Budget: "medium",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/e8/e5/bc/vegan-vegetarian-friendly.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/e8/e5/bc/vegan-vegetarian-friendly.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/28/e8/e5/bc/vegan-vegetarian-friendly.jpg",
    },
    {
      Name: "Layback Rooftop Café, Restaurant & Bar (part of Layback surf camp)",
      Location: "Weligama",
      Budget: "medium",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/28/44/ec/39/happy-costomer-best-food.jpg",
    },
    {
      Name: "Church Street Gourmet",
      Location: "Galle",
      Budget: "medium",
      img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/97/1c/65/indoor-view.jpg?w=1200&h=-1&s=1",
      img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/97/1c/65/indoor-view.jpg?w=1200&h=-1&s=2",
      img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/97/1c/65/indoor-view.jpg?w=1200&h=-1&s=3",
    },
    {
      Name: "Sea Salt Society - Beach Restaurant - Weligama",
      Location: "Weligama",
      Budget: "medium",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/22/02/ac/42/caption.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/22/02/ac/42/caption.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/22/02/ac/42/caption.jpg",
    },
    {
      Name: "Luuma Beach",
      Location: "Galle",
      Budget: "medium",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/28/c3/45/e1/caption.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/28/c3/45/e1/caption.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/28/c3/45/e1/caption.jpg",
    },
    {
      Name: "Canal View Hikkaduwa Sri Lankan Homemade Food Restaurant",
      Location: "Hikkaduwa",
      Budget: "low",
      img1: "https://media-cdn.tripadvisor.com/media/photo-s/16/c6/c8/23/mouthwatering-healthy.jpg",
      img2: "https://media-cdn.tripadvisor.com/media/photo-s/16/c6/c8/23/mouthwatering-healthy.jpg",
      img3: "https://media-cdn.tripadvisor.com/media/photo-s/16/c6/c8/23/mouthwatering-healthy.jpg",
    },
  ];

  const bookings = [
    {
      id: 1,
      image: require('../../assets/images/Book/Vehicles/Vehicle1.jpg'), // Replace with actual path
      title: 'Toyota Coach',
      location: 'Amal Perera',
      status: 'Trip Started',
      // statusColor: Colors.lightBlue,
      icon: '🚍', // Emoji as an icon
    },
    {
      id: 2,
      image: require('../../assets/images/Book/Tourguides/person1.jpg'), // Replace with actual path
      title: 'D.T.S. Gunasekara',
      location: 'Isurumuniya Temple',
      time: '5:45 PM',
      icon: '👨', // Emoji as an icon
    },
    // {
    //   id: 3,
    //   image: require('../../assets/images/Book/Hotels/Hotel1.jpg'), // Replace with actual path
    //   title: 'Wilpattu Resport',
    //   location: 'Wilpattu',
    //   status: 'Booked',
    //   // statusColor: Colors.blue,
    //   icon: '🏡', // Emoji as an icon
    // }
  ];
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Galle</Text>
      <Text style={styles.subHeading}>Southern Province, Sri Lanka</Text>
      <Text style={styles.description}>
        The Southern Province of Sri Lanka is known for its rich cultural heritage and breathtaking natural landscapes...
      </Text>

            {/* recommendations */}
            <Text style={styles.sectionTitle}>Recomended Vehicle and Driver</Text>
            {bookings.map((booking) => (
                <View key={booking.id} style={styles.bookingCard}>
                  <Text style={styles.icon}>{booking.icon}</Text>
                  <Image source={booking.image} style={styles.bookingImage} />
                  <View style={styles.bookingDetails}>
                    <Text style={styles.bookingTitle}>{booking.title}</Text>
                    <Text>{booking.location}</Text>
                    {booking.time ? (
                      <Text style={styles.time}>{booking.time}</Text>
                    ) : (
                      <Text style={[styles.status, { backgroundColor: booking.statusColor }]}>
                        {booking.status}
                      </Text>
                    )}
                  </View>
                </View>
              ))}

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

      <TouchableOpacity
      style={styles.button}
      onPress={() => router.push('/mytrip')}
      >
      <Text style={styles.buttonText}>Save this Trip</Text>
      </TouchableOpacity>


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
  planDay: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, marginLeft:0},
  locationItem: { marginBottom: 16 },
  locationTitle: { fontSize: 16, fontWeight: 'bold' },
  horizontalScroll: { marginVertical: 8 },
  image: { width: 300, height: 200, borderRadius: 8, marginRight: 8 },
  card: { width: 200, marginRight: 16, borderWidth: 1, borderRadius: 8, padding: 8 },
  cardImage: { width: 200, height: 120, borderRadius: 8, marginRight: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  bookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  bookingImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  bookingDetails: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: '#fff',
    fontSize: 12,
  },
  time: {
    marginTop: 5,
    color: '#555',
  },
  button: {
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Result;

