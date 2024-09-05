import { View, Text, FlatList , Image} from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../../constants/Colors'
import PopularVehItems from './PopularVehItems';

export default function PopularVehicles() { 
    const preferencesList = [
        { name: 'Holiday Inn', where:'Battaramulla', icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel1.jpg')  },
        { name: 'Adventure Resort', where:'Maharagama', icon: '👤', img:require('../../../assets/images/Book/Hotels/Hotel2.jpg')  },
        { name: 'Chill Rest Resort', where:'Maharagama', icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel3.jpg')  },
        { name: 'Willpathtu Rest', where:'Pannipitiya', icon: '⚙️', img:require('../../../assets/images/Book/Hotels/Hotel4.jpg')  },
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
            //marginTop:20,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:20,
                fontFamily:'outfit-bold'
            }}>Popular Hotels</Text>
            
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
                <PopularVehItems prefernce={item} key={index}/>
            )}
        />

    </View>

    
  )
}