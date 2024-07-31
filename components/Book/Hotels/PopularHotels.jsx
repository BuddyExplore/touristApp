import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import PopularHotelItems from './PopularHotelItems';


export default function PopularHotels() {
    const preferencesList = [
        { name: 'K.P. Sivalingam', where:'Sigiriya', icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel1.jpg')  },
        { name: 'J.A. Hewage', where:'Anuradhapura', icon: '👤', img:require('../../../assets/images/Book/Hotels/Hotel2.jpg')  },
        { name: 'D.P. Edward', where:'Sri Pada', icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel3.jpg')  },
        { name: 'G.A.S. Jayasinghe', where:'Nuwara Eliya', icon: '⚙️', img:require('../../../assets/images/Book/Hotels/Hotel4.jpg')  },
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
                <PopularHotelItems prefernce={item} key={index}/>
            )}
        />

    </View>

    
  )
}