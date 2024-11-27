import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../../../constants/Colors';
import ShopCard from '../../../components/ShopItems/ShopCard';
import Category from '../../../components/ShopItems/Category';
import CardContainer from '../../../components/ShopItems/CardContainer';
import { useRouter } from 'expo-router';
import Card from '../../../components/ShopItems/Card';

const shopsList = [
  {id: 0, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 1, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 2, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
];

const categoryList = [
  {id: 0, icon: "tshirt-crew", name: "Fashion",},
  {id: 1, icon: "elephant", name: "Souvenirs",},
  {id: 2, icon: "flower-tulip", name: "Decor",},
  {id: 3, icon: "book-open-page-variant", name: "Books",},
]

const itemsList = [
  {id: 0, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 1, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 2, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 3, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 4, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 5, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
  // {id: 6, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  // {id: 7, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  // {id: 8, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  // {id: 9, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  // {id: 10, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  // {id: 11, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
];

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

        <View style={{ flexGrow: 1, justifyContent: 'center'}}>
          <FlatList
            data={categoryList}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id} 
            renderItem={({ item, index }) => {
              let c = "#878787";
              let bc = "#fff";

              if(activeCategory === index) {
                c = "#fff";
                bc = Colors.PRIMARY;
              }

              return ( 
                <Category category={item} color={c} backgroundColor={bc} onPress={() => setActiveCategory(index)} />
              )
            }}
          />
        </View>
        {/* <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', gap: 5}}>
          <Category category={categoryList[0]} color={activeCategory == 0 ? "white" : "#878787"} backgroundColor={activeCategory == 0 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(0)} />
          <Category category={categoryList[1]} color={activeCategory == 1 ? "white" : "#878787"} backgroundColor={activeCategory == 1 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(1)} />
          <Category category={categoryList[2]} color={activeCategory == 2 ? "white" : "#878787"} backgroundColor={activeCategory == 2 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(2)} />
          <Category category={categoryList[3]} color={activeCategory == 3 ? "white" : "#878787"} backgroundColor={activeCategory == 3 ? Colors.PRIMARY : "#fff"} onPress={() => setActiveCategory(3)} />
        </View> */}

        <View style={{alignItems: 'center'}}>
          <FlatList 
              data={itemsList}
              numColumns={3}
              // scrollEnabled={false} // Disable FlatList's own scrolling
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.cardContainer} onPress={() => router.push({pathname: "Booking/Items/ItemInfo" , params: {id: item.id}})}>
                  <Card item={item} key={index} />
                </TouchableOpacity>
              )}
          />
        </View>

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