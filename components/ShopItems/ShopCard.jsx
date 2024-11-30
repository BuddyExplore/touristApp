import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const ShopCard = ({shop}) => {
  const router = useRouter();
  const BASE_URL = 'http://192.168.8.122:5001/custom-static/images/Shop/';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
          {/* <ImageBackground source={{uri: `${BASE_URL}${shop.name.split(" ").join("")}.png`}} style={styles.image}> */}
          <ImageBackground source={shop.img} style={styles.image}>
              <View style={styles.textContainer}>
                  <Text style={styles.mainText}>{shop.name}</Text>
                  <Text style={styles.subText}>{shop.city}</Text>
              </View>
          </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

export default ShopCard

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      marginTop: 7
  },
  touchable: {
      width: 130,
      height: 90,
      borderRadius: 10,
      overflow: 'hidden', // Ensures rounded corners are applied to the image ''
      // backgroundColor: 'rgba(0, 0, 0, 0.02)'
  },
  image: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end', // Positions text at the bottom
  },
  textContainer: {
      paddingTop: 10,
      paddingHorizontal: 10,
      paddingBottom: 5,
      // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for text visibility
      borderBottomLeftRadius:10,
      justifyContent: 'center',
  },
  likesText: {
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      top: 10,
      right: 10,
  },
  mainText: {
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with opacity
      textShadowOffset: { width: 2, height: 2 }, // Offset the shadow
      textShadowRadius: 3
      // marginLeft: 15
  },
  subText: {
      color: 'white',
      fontSize: 10,
      fontWeight: '500',
      textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with opacity
      textShadowOffset: { width: 2, height: 2 }, // Offset the shadow
      textShadowRadius: 3
  }

})