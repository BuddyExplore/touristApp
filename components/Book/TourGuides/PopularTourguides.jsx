import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import PopularTourguideItems from './PopularTourguideItems';


export default function PopularTourguides() {
    const preferencesList = [
        { name: 'K.P. Sivalingam', where:'Sigiriya', icon: '🔔', img:require('../../../assets/images/Book/Tourguides/person1.jpg')  },
        { name: 'J.A. Hewage', where:'Anuradhapura', icon: '👤', img:require('../../../assets/images/Book/Tourguides/person2.jpg')  },
        { name: 'D.P. Edward', where:'Sri Pada', icon: '🔔', img:require('../../../assets/images/Book/Tourguides/person2.jpg')  },
        { name: 'G.A.S. Jayasinghe', where:'Nuwara Eliya', icon: '⚙️', img:require('../../../assets/images/Book/Tourguides/person4.jpg')  },
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
            }}>Popular Tour Guides</Text>
            
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
                <PopularTourguideItems prefernce={item} key={index}/>
            )}
        />

    </View>

    
  )
}