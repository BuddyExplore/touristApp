import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '../../../constants/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import CardContainer from '../../../components/ShopItems/CardContainer';

const ExploreItems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);

  // const handleClick = (shopID) => {
  //   console.log("clicked " + shopID);
  // }

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

      <View style={{flex: 1}}>
        <CardContainer limit={12} />
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
})