import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../../../constants/Colors';
import ShopCard from '../../../components/ShopItems/ShopCard';
import Category from '../../../components/ShopItems/Category';
import CardContainer from '../../../components/ShopItems/CardContainer';
import { useRouter } from 'expo-router';

const shopsList = [
  { name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.png'), city: 'Kandy'  },
  { name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.png'), city: 'Colombo'  },
  { name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/RoyalBatiks.png'), city: 'Anuradhapura' },
];

const categoryList = [
  {icon: "tshirt-crew", name: "Fashion",},
  {icon: "elephant", name: "Souvenirs",},
  {icon: "flower-tulip", name: "Decor",},
  {icon: "book-open-page-variant", name: "Books",}
]

const itemsList = [
  {name: "Fashion",},
  {name: "Souvenirs",},
  {name: "Decor",},
  {name: "Books",}
]

  // // Define state for shops
  // const [shops, setShops] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // // Fetch shops data when component mounts
  // useEffect(() => {
  //   axios.get('http://your-api-url/shops')
  //     .then(response => {
  //       // Set the shops data to the state
  //       setShops(response.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []); // Empty dependency array means it runs only once when the component mounts

  // // Handle loading and error states
  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;  
  // }

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

//   Infinite Scrolling Example (Optional):
// If you need to implement infinite scrolling (loading more items as the user scrolls), you can use the onEndReached prop:

// js
// Copy code
// const handleLoadMore = () => {
//   if (!loading) {
//     setLoading(true);
//     // Simulate fetching more data
//     axios.get('http://your-api-url/shops?page=nextPage')
//       .then(response => {
//         setShops(prevShops => [...prevShops, ...response.data]); // Append new shops
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }
// };

// return (
//   <FlatList
//     data={shops}
//     keyExtractor={(item) => item.id.toString()}
//     renderItem={({ item }) => (
//       <View style={{ padding: 10 }}>
//         <Text>{item.name}</Text>
//         <Text>{item.location}</Text>
//       </View>
//     )}
//     onEndReached={handleLoadMore}
//     onEndReachedThreshold={0.1}  // Trigger load more when user scrolls 90% of the list
//     ListFooterComponent={loading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
//   />
// );

const ShopHome = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {

  }, [activeCategory])

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>    
      
      <View style={styles.searchBar}>
          <Feather name="search" size={15} color="black" />
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Search for shops and items"
              style={styles.textInput}
              value={searchValue}
              onChangeText={setSearchValue}
            />
          </View>
      </View>

      <View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 10, paddingTop: 17}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', verticalAlign: 'center'}}>Explore shops</Text>
          <Pressable onPress={() => router.push("Booking/Items/ExploreShops")} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={{fontSize: 18, verticalAlign: 'center', color: Colors.PRIMARY}}>View all</Text>
            <AntDesign name="arrowright" size={22} color={Colors.PRIMARY}/>
          </Pressable>
        </View>
        
          <FlatList 
              showsHorizontalScrollIndicator = {false}
              data={shopsList}
              horizontal={true}
              renderItem={({item, index}) => (
                  <ShopCard shop={item} key={index}/>
              )}
          />
      </View>

      <View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 10, paddingTop: 17}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', verticalAlign: 'center'}}>Explore stock</Text>
          <Pressable onPress={() => router.push("Booking/Items/ExploreItems")} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={{fontSize: 18, verticalAlign: 'center', color: Colors.PRIMARY}}>View all</Text>
            <AntDesign name="arrowright" size={22} color={Colors.PRIMARY}/>
          </Pressable>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', gap: 5}}>
          <Category category={categoryList[0]} color={activeCategory == 0 ? "white" : "#878787"} backgroundColor={activeCategory == 0 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(0)} />
          <Category category={categoryList[1]} color={activeCategory == 1 ? "white" : "#878787"} backgroundColor={activeCategory == 1 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(1)} />
          <Category category={categoryList[2]} color={activeCategory == 2 ? "white" : "#878787"} backgroundColor={activeCategory == 2 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(2)} />
          <Category category={categoryList[3]} color={activeCategory == 3 ? "white" : "#878787"} backgroundColor={activeCategory == 3 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(3)} />
        </View>

        <CardContainer limit={6} />

      </View>

    </View>
  )
}

export default ShopHome

const styles = StyleSheet.create({
  searchBar: { height: 60,
    marginTop: 30,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textInput: {
    fontFamily: "outfit",
    color: "#A4A4A4",
    fontSize: 15,
  }
})