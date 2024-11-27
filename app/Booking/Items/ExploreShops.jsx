import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from '../../../constants/Colors';
import ShopListItem from '../../../components/ShopItems/ShopListItem';
import axios from 'axios';

const shopsList = [
  {id: 0, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 1, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 2, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
  {id: 3, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 4, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 5, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
];

const ExploreShops = () => {
  const router = useRouter();
  // const [shopsList, setShopsList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);

  // useEffect(() => {
  //   const fetchShops = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/api/travel/shop/allShops`);
  //       setShopsList(response.data);
  //       console.log(response.data);
  //     } catch(e) {
  //       console.log(e);
  //     }
  //   }

  //   fetchShops();

  // }, [])

  const handleClick = (index) => {
    const id = index;

    router.push({
      pathname: './ShopInfo',
      params: {
        id
      }}
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      
      <View style={styles.searchBar}>
          <Feather name="search" size={15} color="black" />
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Search for Shops"
              style={styles.textInput}
              value={searchValue}
              onChangeText={setSearchValue}
            />
          </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-start', margin: 15, marginLeft: 20}}>
        <Pressable style={{display: 'flex', flexDirection: 'row', gap: 5, paddingVertical: 6, paddingHorizontal: 12, paddingRight: 20, borderWidth: 1, borderColor: '#007BFF', borderRadius: 15 }}>
          <Octicons name="filter" size={19} color={Colors.PRIMARY} />
          <Text style={{fontSize: 15, color: Colors.PRIMARY}}>Filter</Text>
        </Pressable>
      </View>

      <View style={{paddingHorizontal: 11}}>
        <FlatList
          // data={vehicles}
          data={shopsList}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false} 
          renderItem={({ item, index }) => (
            <ShopListItem shop={item} shopID={index} handleClick={() => handleClick(index)}/> // item.id should pass
          )}
        />
      </View>
    </View>
  )
}

export default ExploreShops

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
})