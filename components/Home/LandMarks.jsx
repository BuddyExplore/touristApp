import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import LandMarksItem from './LandMarksItem';

export default function LandMarks() {
    const preferencesList = [
        { name: 'Arugambay', icon: '⚙️', img:require('../../assets/images/Home/Landmarks/arugambay.jpg')  },
        { name: 'Ella Rock', icon: '👤', img:require('../../assets/images/Home/Landmarks/ellarock.jpg')  },
        { name: 'Galle Fort', icon: '🔔', img:require('../../assets/images/Home/Landmarks/gallefort.jpg')  },
        { name: 'Ruwanweliseya', icon: '🔔', img:require('../../assets/images/Home/Landmarks/ruwanweliseya.jpg')  },
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
            }}>Explore popular landmarks</Text>
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text>
        </View>

        <FlatList 
            data={preferencesList}
            horizontal={true}
            renderItem={({item, index}) => (
                <LandMarksItem prefernce={item} key={index}/>
            )}
        />

    </View>

    
  )
}