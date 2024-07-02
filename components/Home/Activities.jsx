import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import PrefernceItem from './PrefernceItem';

export default function LandMarks() {
    const preferencesList = [
        { name: 'Adventure', icon: '⚙️', img:require('../../assets/images/Home/Prefernces/adventurer.png')  },
        { name: 'Camping', icon: '👤', img:require('../../assets/images/Home/Prefernces/tent.png')  },
        { name: 'Wild Life', icon: '🔔', img:require('../../assets/images/Home/Prefernces/wildlife.png')  },
        { name: 'Snorkeling', icon: '🔔', img:require('../../assets/images/Home/Prefernces/mask.png')  },
        { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
      ];

  return (
    <View>
        <View style={{
            padding:20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:1,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:20,
                fontFamily:'outfit-bold'
            }}>Activities for you</Text>
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text>
        </View>

        <FlatList 
            showsHorizontalScrollIndicator={false}
            data={preferencesList}
            horizontal={true}
            renderItem={({item, index}) => (
                <PrefernceItem prefernce={item} key={index}/>
            )}
        />

    </View>

    
  )
}