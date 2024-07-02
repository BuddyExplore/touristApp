import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import PrefernceItem from './PrefernceItem';
import ActivityItem from './ActivityItem';

export default function Activities() {
    const preferencesList = [
        { name: 'Snorkeling', where:'Arugambay', icon: '🔔', img:require('../../assets/images/Home/Activities/snorkeling.jpg')  },
        { name: 'Kayaking', where:'Madu riveer', icon: '👤', img:require('../../assets/images/Home/Activities/kayaking.jpg')  },
        { name: 'Wild Life', where:'Yala', icon: '🔔', img:require('../../assets/images/Home/Activities/safari.jpeg')  },
        { name: 'Hiking', where:'Ella Rock', icon: '⚙️', img:require('../../assets/images/Home/Activities/hiking.jpeg')  },
        // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
      ];

  return (
    <View>
        <View style={{
            padding:20,
            paddingBottom:0,
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
                <ActivityItem prefernce={item} key={index}/>
            )}
        />

    </View>

    
  )
}