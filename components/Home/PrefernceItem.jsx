import { View, Text, Image } from 'react-native'
import React from 'react'


export default function PrefernceItem({prefernce}) {

    return (
      <View>
        <Image source={prefernce.img}
                style={{
                width:45,
                height:45,
            }}
        />
      </View>
    )
  }