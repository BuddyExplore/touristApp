import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Category = ({category, color, backgroundColor, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{...styles.textView, borderWidth: 1, borderColor: color, backgroundColor: backgroundColor}}>
        <MaterialCommunityIcons name={category.icon} size={20} color={color} />
        <Text style={{color: color}}>{category.name}</Text>
      </View>
    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  likesText: {
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      top: 10,
      right: 10,
  }

})