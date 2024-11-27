import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../constants/Colors';
import Category from '../../../components/ShopItems/Category';
import CardContainer from '../../../components/ShopItems/CardContainer';
import Card from '../../../components/ShopItems/Card';
import ShopDetails from '../../../components/ShopItems/ShopDetails';

const shopsList = [
  {id: 0, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 1, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 2, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
  {id: 3, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 4, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 5, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
];

const itemsList = [
  {id: 0, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 1, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 2, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 3, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 4, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 5, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
];

const categoryList = [
  {id: 0, icon: null, name: "All",},
  {id: 1, icon: "tshirt-crew", name: "Fashion",},
  {id: 2, icon: "elephant", name: "Souvenirs",},
  {id: 3, icon: "flower-tulip", name: "Decor",},
  {id: 4, icon: "book-open-page-variant", name: "Books",},
]

const ShopInfo = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const shop = shopsList[id];
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
      <View>
        <View style={styles.ImgContainer}>
          <Image source={shop.img} style={styles.shopImg} />
        </View>
        <ShopDetails shop={shop} />
      </View>

      {/* Buttons positioned on top of the image */}
      <TouchableOpacity style={styles.backButton} onPress={() => { router.back()}}>
        <Ionicons name="arrow-back-outline" size={22} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareButton}>
        <Ionicons name="share-social" size={22} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-vertical" size={22} color={'black'} />
      </TouchableOpacity>

      {/* <View style={{paddingHorizontal: 20, marginTop: 20, gap: 8}}>
        <Text style={{fontSize: 18, fontWeight: 600}}>Description</Text>
        <Text style={{fontSize: 14}}>
          Laksala offers authentic local souvenirs and handcrafted items, 
          perfect for tourists seeking unique mementos and cultural treasures.
        </Text>
      </View> */}

      <View style={{marginHorizontal: 20, marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#D4D4D4', paddingBottom: 10}}>
        <Text style={{fontSize: 18, fontWeight: 600, marginBottom: 10}}>Contact Info</Text>
        
        <View style={{flexDirection: 'row', gap: 5, marginBottom: 5}}>
        <MaterialCommunityIcons name="phone-outline" size={18} color="black" />
          <Text style={{fontSize: 14}}>+94 11 7683376</Text>
        </View>

        <View style={{flexDirection: 'row', gap: 5}}>
          <MaterialCommunityIcons name="email-outline" size={18} color="black" />
          <Text style={{fontSize: 14}}>shopmail@gmail.com</Text>
        </View>
      </View>

      <View style={{padding: 20}}>
        <Text style={{color: "#B7B7B7", fontSize: 18}}>87 Items for sale</Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 16, fontWeight: 400}}>Categories</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={categoryList}
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id} 
          renderItem={({ item, index }) => {
            let c = Colors.PRIMARY;
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

      <View style={{flex: 1, alignItems: 'center'}}>
          <FlatList 
              data={itemsList}
              numColumns={3}
              scrollEnabled={false} // Disable FlatList's own scrolling
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.cardContainer} onPress={() => router.push({pathname: './ItemInfo', params: {id: item.id}})}>
                  <Card item={item} key={index} />
                </TouchableOpacity>
              )}
          />
      </View>

    </ScrollView>
  )
}

export default ShopInfo

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  ImgContainer: {
    height: 350
  },
  shopImg: {
    width: '100%',
    height: '100%',
  },
  shopContainer: {
    padding: 20,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20
  },
  shopName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  backButton: {
    position: 'absolute',
    top: 23,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  shareButton: {
    position: 'absolute',
    top: 23,
    right: 60,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  moreButton: {
    position: 'absolute',
    top: 23,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  subText: {
    color: '#8C8C8C',
    fontSize: 18,
    fontWeight: '600'
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