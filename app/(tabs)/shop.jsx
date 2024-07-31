import { View, Text , ScrollView, StyleSheet} from 'react-native'
import React, {useState}from 'react'
import Header from '../../components/Shop/Header';
import ShopList from '../../components/Shop/ShopList';
import Shop from '../../components/Shop/Shop'

export default function shop() {

  const [toggleShopList, settoggleShopList] = useState(true);

  const handleShop = (msg) => {
    settoggleShopList(false);
  }
  const handleShopBack = (msg) => {
    settoggleShopList(true);
  }
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          {toggleShopList && <ShopList shopPressed={handleShop}/>}
          {/* <ShopList shopPressed={handleShop}/> */}
          {!toggleShopList && <Shop onPressBack={handleShopBack}/>}
        </ScrollView>
      
      <Text>shop</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  scrollContainer: {
    paddingBottom: 500, // To prevent content from being hidden behind FAB
  },

});