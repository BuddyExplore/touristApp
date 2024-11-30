import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '../../../constants/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import CardContainer from '../../../components/ShopItems/CardContainer';
import Card from '../../../components/ShopItems/Card';
import { useRouter } from 'expo-router';

const itemsList = [
  {id: 0, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 1, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 2, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 3, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 4, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 5, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
  {id: 6, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 7, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 8, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 9, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 10, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 11, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
];

const ExploreItems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const router = useRouter();

  // const handleClick = (itemID) => {
  //   router.push({
  //     pathname: 
  //   })
  // }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      
      <View style={styles.searchBar}>
          <Feather name="search" size={15} color="black" />
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Search for Items"
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

      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
            <FlatList 
                data={itemsList}
                numColumns={3}
                // scrollEnabled={false} // Disable FlatList's own scrolling
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({item, index}) => (
                  <TouchableOpacity style={styles.cardContainer} onPress={() => router.push({pathname: './ItemInfo', params: {id: item.id}})}>
                    <Card item={item} key={index} />
                  </TouchableOpacity>    
                )}
            />
        </View>
      </View>
    </View>
  )
}

export default ExploreItems

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
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  }
})