import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import VehListItem from './VehListItem';


export default function VehList() {
    const preferencesList = [
        { name: 'Suzuki Alto', where:'Nugegoda', driver: 'A.D. Bandara' , icon: '🔔', img:require('../../../assets/images/Book/Vehicles/Vehicle5.jpg')  },
        { name: 'Hiace Dolphin', where:'Hokanda', driver: 'S.M. Perera' , icon: '👤', img:require('../../../assets/images/Book/Vehicles/Vehicle6.jpg')  },
        { name: 'Nissan Civillian', where:'Moratuwa', driver: 'W.T. Saman' , icon: '🔔', img:require('../../../assets/images/Book/Vehicles/Vehicle7.jpg')  },
        { name: 'Volkswagon Caddy', where:'Pannipitiya', driver: 'S.S.M. Peiris' , icon: '⚙️', img:require('../../../assets/images/Book/Vehicles/Vehicle4.jpg')  },
        { name: 'Suzuki Alto', where:'Nugegoda', driver: 'A.D. Bandara' , icon: '🔔', img:require('../../../assets/images/Book/Vehicles/Vehicle1.jpg')  },
        { name: 'Hiace Dolphin', where:'Hokanda', driver: 'S.M. Perera' , icon: '👤', img:require('../../../assets/images/Book/Vehicles/Vehicle2.jpg')  },
        { name: 'Nissan Civillian', where:'Moratuwa', driver: 'W.T. Saman' , icon: '🔔', img:require('../../../assets/images/Book/Vehicles/Vehicle3.jpg')  },
        { name: 'Volkswagon Caddy', where:'Pannipitiya', driver: 'S.S.M. Peiris' , icon: '⚙️', img:require('../../../assets/images/Book/Vehicles/Vehicle4.jpg')  },
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
            }}>Book vehicles</Text>
            
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>Filter</Text>
        </View>
        {preferencesList.map((item, index) => (
                <VehListItem prefernce={item} key={index}/>
            ))}
        {/* <FlatList 
            showsHorizontalScrollIndicator={false}
            data={preferencesList}
            horizontal={false}
            renderItem={({item, index}) => (
                <VehListItem prefernce={item} key={index}/>
            )}
        /> */}

    </View>

    
  )
}