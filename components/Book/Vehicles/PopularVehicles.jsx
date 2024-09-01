import { View, Text, FlatList , Image} from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../../constants/Colors'
import PopularVehItems from './PopularVehItems';

export default function PopularVehicles() { 
    const preferencesList = [
        { name: 'Nissan Clipper', where:'Battaramulla',  img:require('../../../assets/images/Book/Vehicles/Vehicle1.jpg')  },
        { name: 'Toyota Hiace', where:'Maharagama',  img:require('../../../assets/images/Book/Vehicles/Vehicle2.jpg')  },
        { name: 'Toyota Coaster', where:'Maharagama',  img:require('../../../assets/images/Book/Vehicles/Vehicle3.jpg')  },
        { name: 'Volkswagon Caddy', where:'Pannipitiya', img:require('../../../assets/images/Book/Vehicles/Vehicle4.jpg')  },
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
            }}>Vehicles near you</Text>
            
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